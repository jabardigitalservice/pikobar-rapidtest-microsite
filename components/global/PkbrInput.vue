<template>
  <div class="block">
    <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
      <label :for="name" class="block text-gray-700 text-sm font-bold">
        {{ label }}
        <span v-if="isRequired" class="text-red-500">&nbsp;*</span>
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div v-if="errors.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <textarea
          v-if="type === 'textarea'"
          :id="name"
          v-model.lazy="tempValue"
          :name="name"
          :rows="rows"
          class="block pr-10 shadow appearance-none border-2 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand-green-dark transition duration-500 ease-in-out"
          :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300': errors.length > 0 }"
          :placeholder="placeholder"
        />
        <input
          v-else
          :id="name"
          v-model.lazy="tempValue"
          :name="name"
          :type="type"
          class="block pr-10 shadow appearance-none border-2 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-brand-green-dark transition duration-500 ease-in-out"
          :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300': errors.length > 0 }"
          :placeholder="placeholder"
          @keypress="isNumberTel"
        >
      </div>
      <strong class="text-red-500 text-xs italic">
        {{ errors[0] }}
      </strong>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

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
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rules: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      tempValue: this.value
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
    tempValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    isNumberTel (e) {
      if (this.type === 'tel') {
        const charCode = (e.which) ? e.which : e.keyCode
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          e.preventDefault()
        }
      }
      return true
    }
  }
}
</script>