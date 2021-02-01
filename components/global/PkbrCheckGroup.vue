<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules" tag="div" class="block">
    <p class="mt-4 text-sm font-medium">
      {{ label }}
      <span v-if="isRequired" class="text-brand-red">*</span>
    </p>
    <p v-if="errors.length > 0" class="mt-2 text-brand-red text-sm">
      <svg class="h-5 w-5 text-brand-red inline-block" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      {{ errors[0] }}
    </p>

    <div v-for="(item, index) in list" :key="index" class="mt-3">
      <div class="relative flex items-start">
        <div class="absolute flex items-center h-5">
          <input
            :id="`${name}-${index}`"
            v-model="tempValue"
            :value="item[itemValue]"
            type="checkbox"
            class="form-checkbox h-4 w-4 text-brand-green-dark transition duration-150 ease-in-out"
            @change="isException(item[itemValue] === clearValue)"
          >
        </div>
        <div class="pl-6 text-sm leading-5">
          <label class="text-gray-700" :for="`${name}-${index}`">{{ item[itemText] }}</label>
        </div>
      </div>
    </div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { isObject, clone } from 'lodash'

export default {
  components: {
    ValidationProvider
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => []
    },
    rules: {
      type: String,
      default: ''
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    clearValue: {
      type: [String, Number],
      default: 99
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tempValue: clone(this.value),
      list: clone(this.items)
    }
  },
  computed: {
    isRequired () {
      return !!this.label && this.rules.split('|').includes('required')
    }
  },
  watch: {
    value (val) {
      this.tempValue = val
    },
    items (val) {
      this.list = val
    },
    tempValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  mounted () {
    this.checkItemChild()
  },
  methods: {
    checkItemChild () {
      if (!isObject(this.list[0])) {
        this.list = this.list.map(value => ({ text: value, value }))
      }
    },
    isException (bool) {
      let tempValue = this.tempValue
      const clearOption = this.list.find(item => item.value === this.clearValue)
      if (bool) {
        tempValue = [this.clearValue]
      } else {
        tempValue = clearOption
          ? tempValue.filter(val => val !== this.clearValue)
          : tempValue
      }
      this.tempValue = tempValue
    }
  }
}
</script>
