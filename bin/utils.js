const upperCamelCase = require('uppercamelcase')

// Well, some icons are just lines, but they follow the fill logic.
const forceStroke = (name = '') => name.toLowerCase() === 'dash'

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('_')
  const style = nameSlices[nameSlices.length - 1]

  const finalStyle = (() => {
    if (forceStroke(name)) return 'stroke'
    return style === 'fill' || style === 'stroke' ? style : defaultStyle
  })()

  return {
    name,
    componentName: upperCamelCase(name),
    style: finalStyle,
  }
}

module.exports = {
  parseName,
}
