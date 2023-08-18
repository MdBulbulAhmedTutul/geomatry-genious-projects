// Calculate the triangle area
function calculatTriangle(){
    // Get the base value
    const triangleBase = document.getElementById('tiangle-base');
    const triangleBaseString = triangleBase.value;
    const triangleBaseNumber = parseFloat(triangleBaseString);
    
    // Get the height value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightString = triangleHeight.value;
    const triangleHeightNumber = parseFloat(triangleHeightString);
    
    // triangl area calculate the value
    const newTriangle = 0.5 * triangleHeightNumber * triangleBaseNumber;

    // get the are and set the value
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = newTriangle;
};



// calculate the rectangle area
function rectangleCalculate(){
    // get the recangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthString = rectangleWidth.value;
    const rectangleWidthNumber = parseFloat(rectangleWidthString);
    
    // get the rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthString = rectangleLength.value;
    const rectangleLengthNumber = parseFloat(rectangleLengthString);
    
    // rectangle area calculate
    const newRectangle = rectangleLengthNumber * rectangleWidthNumber;
    
    // Set the rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = newRectangle;
}

// paralal calculate
function paralalCalculate(){
    // Get the para base
    const paraBase = document.getElementById('para-base');
    const paraBaseString = paraBase.value;
    const paraBaseNumber = parseFloat(paraBaseString);
    
    // get the para base height
    const paraHeight = document.getElementById('para-height');
    const paraHeightString = paraHeight.value;
    const paraHeightNumber = parseFloat(paraHeightString);
    
    // Calculate the para area
    const newPara = paraHeightNumber * paraBaseNumber;

    // set the para area
    const paraArea = document.getElementById('para-area');
    paraArea.innerText = newPara;
}