const opacityColor = (varName) => `rgb(var(--${varName}) / <alpha-value>)`;

module.exports = {
    opacityColor
}