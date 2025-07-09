const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('_')
  const style = nameSlices[nameSlices.length - 1]

  const finalStyle =
    style === 'fill' || style === 'stroke' ? style : defaultStyle

  return {
    name,
    componentName: upperCamelCase(name),
    style: finalStyle,
  }
}

module.exports = {
  parseName,
}
