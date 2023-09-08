// Declarando las variables.
const colorPicker = document.getElementById('color-picker');
const colorPicker2 = document.getElementById('color-picker2');
const colorPicker3 = document.getElementById('color-picker3');
const colorPicker4 = document.getElementById('color-picker4');
const colorDisplay = document.getElementById('color-display');
const hexCode = document.getElementById('hex-code');
const rgbCode = document.getElementById('rgb-code');
const hslCode = document.getElementById('hsl-code');
const presetColor1 = document.getElementById('preset-color-1');
const presetColor2 = document.getElementById('preset-color-2');
const gradientTypeSelect = document.getElementById('gradient-type');
const gradientAngleInput = document.getElementById('gradient-angle');
const gradientPreview = document.getElementById('gradient-preview');
const textColorPicker = document.getElementById('text-color');
const backgroundColorPicker = document.getElementById('background-color');
const textDisplay = document.getElementById('text-display');

//Obtiniendo los códigos de los colores de los selectores.

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
    // Obtener valores HEX
    hexCode.value = selectedColor;
    // Obtener valores RGBA
    const rgbaValues = getRGBAValues(selectedColor);
    rgbCode.value = rgbaValues.join(', ');
    // Obtener valores HSLA
    const hslaValues = getHSLAValues(selectedColor);
    hslCode.value = hslaValues.join('%, ');
    // Actualizar el degradado
    updateGradientPreview(selectedColor);
});

colorPicker2.addEventListener('input', () => {
    const selectedColor = colorPicker2.value;
    colorDisplay.style.backgroundColor = selectedColor;
    hexCode.value = selectedColor;
    const rgbaValues = getRGBAValues(selectedColor);
    rgbCode.value = rgbaValues.join(', ');
    const hslaValues = getHSLAValues(selectedColor);
    hslCode.value = hslaValues.join('%, ');
    updateGradientPreview(selectedColor);
});

colorPicker3.addEventListener('input', () => {
    const selectedColor = colorPicker3.value;
    colorDisplay.style.backgroundColor = selectedColor;
    hexCode.value = selectedColor;
    const rgbaValues = getRGBAValues(selectedColor);
    rgbCode.value = rgbaValues.join(', ');
    const hslaValues = getHSLAValues(selectedColor);
    hslCode.value = hslaValues.join('%, ');
    updateGradientPreview(selectedColor);
});

colorPicker4.addEventListener('input', () => {
    const selectedColor = colorPicker4.value;
    colorDisplay.style.backgroundColor = selectedColor;
    hexCode.value = selectedColor;
    const rgbaValues = getRGBAValues(selectedColor);
    rgbCode.value = rgbaValues.join(', ');
    const hslaValues = getHSLAValues(selectedColor);
    hslCode.value = hslaValues.join('%, ');
    updateGradientPreview(selectedColor);
});

presetColor1.addEventListener('input', () => {
    const selectedColor = presetColor1.value;
    colorPicker.value = selectedColor;
    colorPicker.dispatchEvent(new Event('input'));
});

presetColor2.addEventListener('input', () => {
    const selectedColor = presetColor2.value;
    updateGradientPreview(selectedColor);
});

gradientTypeSelect.addEventListener('change', () => {
    updateGradientPreview(colorPicker.value);
});

gradientAngleInput.addEventListener('input', () => {
    updateGradientPreview(colorPicker.value);
});

textColorPicker.addEventListener('input', () => {
    const textColor = textColorPicker.value;
    textDisplay.style.color = textColor;
});

backgroundColorPicker.addEventListener('input', () => {
    const bgColor = backgroundColorPicker.value;
    textDisplay.style.backgroundColor = bgColor;
});




function getRGBAValues(color) {
    const rgbaMatch = color.match(/[\d.]+/g);
    return rgbaMatch ? rgbaMatch.map(parseFloat) : [0, 0, 0, 1];
}

function getHSLAValues(color) {
    const hslaMatch = tinycolor(color).toHsl();
    return [
        Math.round(hslaMatch.h),
        Math.round(hslaMatch.s * 100),
        Math.round(hslaMatch.l * 100),
        hslaMatch.a
    ];
}

function updateGradientPreview(color) {
    const color1 = colorPicker.value;
    const color2 = presetColor2.value;
    const gradientType = gradientTypeSelect.value;
    const gradientAngle = gradientAngleInput.value + 'deg';

    const gradient = `${gradientType}(${gradientAngle}, ${color1}, ${color2})`;
    gradientPreview.style.background = gradient;
}

// script.js

// ... (código previo) ...

const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('output-text');
const textHexCode = document.getElementById('text-hex-code');
const textBgHexCode = document.getElementById('text-bg-hex-code');

textInput.addEventListener('input', () => {
    const newText = textInput.value;
    textOutput.textContent = newText;
    updateTextColors();
});

textColorPicker.addEventListener('input', updateTextColors);
backgroundColorPicker.addEventListener('input', updateTextColors);

function updateTextColors() {
    const textColor = textColorPicker.value;
    const bgColor = backgroundColorPicker.value;

    textOutput.style.color = textColor;
    textOutput.style.backgroundColor = bgColor;

    textHexCode.value = textColor;
    textBgHexCode.value = bgColor;
}

// ... (código posterior) ...
