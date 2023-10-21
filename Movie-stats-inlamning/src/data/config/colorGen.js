function generateRandomHexColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  
  function generateRandomHexColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const randomColor = generateRandomHexColor();
      colors.push(randomColor);
    }
    return colors;
  }
  
  export default generateRandomHexColors;
  
  
  