<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules" tag="div" class="block">
    <label :for="name" class="block text-sm font-medium leading-5 text-gray-700">
      {{ label }}
      <span v-if="isRequired" class="text-brand-red">*</span>
    </label>
    <div class="mt-1 relative rounded-md">
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg v-if="errors.length > 0" class="h-5 w-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <p v-if="note" class="text-sm text-brand-grey-dark hover:text-brand-green italic">
          {{ note }}
        </p>
      </div>
      <textarea
        v-if="type === 'textarea'"
        :id="name"
        v-model.lazy="tempValue"
        :name="name"
        :rows="rows"
        class="form-style"
        :class="{ 'form-style-error': errors.length > 0 }"
        :placeholder="placeholder"
        @keyup.enter="nextStep"
      />
      <input
        v-else
        :id="name"
        v-model.lazy="tempValue"
        :name="name"
        :type="type"
        class="form-style"
        :class="{ 'form-style-error': errors.length > 0 }"
        :placeholder="placeholder"
        @keypress="isNumberTel"
        @keyup.enter="nextStep"
      >
    </div>
    <p class="text-brand-red text-sm">
      {{ errors[0] }}
    </p>
  </validation-provider>
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
    },
    note: {
      type: String,
      default: null
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
    },
    nextStep () {
      this.$emit('next')
    }
  }
}
</script>
