'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const getFromFields = require('../../lib/get-form-fields')
$(() => {
  $('#create-post').on('submit', event => {
    event.preventDefault()
    const data = getFromFields(event.target)
    event.target.reset()
    console.table(data)
  })
})
