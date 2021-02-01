<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules" tag="div" class="block">
    <label class="block text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      <span v-if="isRequired" class="text-brand-red">*</span>
    </label>
    <div class="mt-1 relative rounded-md">
      <select
        v-model="tempValue"
        class="form-select form-style"
        :class="{
          'form-style-error': errors.length > 0,
          'placeholdered': tempValue === null
        }"
      >
        <option :value="null" disabled class="text-gray-200">
          {{ placeholder }}
        </option>
        <option v-for="(item, index) in list" :key="index" :value="item[itemValue]">
          {{ item[itemText] }}
        </option>
      </select>
      <div v-if="errors.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-sm text-brand-red">
      {{ errors[0] }}
    </p>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { isObject } from 'lodash'

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
      type: [String, Number],
      default: null
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
    placeholder: {
      type: String,
      default: 'Pilih'
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tempValue: this.value,
      list: this.items
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
        this.list = this.list.map((value, i) => ({ text: value, value }))
      }
    }
  }
}
</script>
