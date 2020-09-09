import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/id.json'
import axios from 'axios'

extend('required', {
  ...required,
  message: messages.required
})

extend('email', {
  ...email,
  message: messages.email
})

extend('phone_number', {
  validate: (value) => {
    return value.match(/^0{1}8{1}[0-9]{8,11}$/g)
  },
  message: 'Format Nomor Telepon tidak benar'
})

extend('nik', {
  validate: (value) => {
    const allowedPrefix = [
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '21',
      '31', '32', '33', '34', '35', '36', '51', '52', '53', '61',
      '62', '63', '64', '65', '71', '72', '73', '74', '75', '76',
      '81', '82', '91', '92'
    ]

    const prefix = value.substring(0, 2)

    return allowedPrefix.includes(prefix) && value.match(/^[1-9]{1}[0-9]{11}(?!0{4})[0-9]{4}$/g)
  },
  message: 'Format NIK tidak benar'
})
