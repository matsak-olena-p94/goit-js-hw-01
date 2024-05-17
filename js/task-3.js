function getElementWidth(content, padding, border) {
    content = Number(content)
    padding = Number(padding)
    border = Number(border)
    const borderBox = content + (padding * 2) + (border * 2); 
    return = Number(borderBox)
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));