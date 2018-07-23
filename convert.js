const fs = require('fs')

const convert = (() => {
  const result = {}
  const csv = fs.readFileSync(__dirname + '/data.csv')
  const lines = csv.toString('utf8').split('\n').filter(str => str != '')
  const headers = lines[0].split(';').slice(1).map(str => str.trim())
  const rows = lines.slice(1)
  rows.map(row => {
    [num, ...properties] = row.split(';')
    result[num] = headers.reduce((acc, header, i) => {
      acc[header] = properties[i].trim()
      return acc
    }, {})
  })
  console.log(JSON.stringify(result, null, 2))
})()
