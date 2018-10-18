function setup() {
    // this create the size of the shape
    createCanvas(400, 400)
    // this identifies the background color
    background(255)
  }
  
  function draw() {
    //this is the colour of the triangle and rectangle
    fill(255, 130, 0)
    // this is the outline of the shape
    stroke(0)
    // these are the shapes which will be shown on the canvas
    
    // when this was changed from rectangle to square the shape changed but the size stayed the same
    background(255)
    house(5, 50, 40, 50)
    house(100, 100, 80, 70)
    house(mouseX,mouseY, 80, 90)
    
    

  }
  function square(x, y, size){
      // the x means the x-axis, the y means the y-axis and the size means the height and width
      rect(x, y, size, size)
  }

  function roof(x, y, height, width) {
    triangle(x, y, x+height, y, x+width/2, y-width)
    // this is the x and y axis of the roof
  }
  
  function house(x, y, height, width) {
    rect(x, y, height, width)
    roof(x, y, height, width)
    // this is the x and y axis of the house    
  }
