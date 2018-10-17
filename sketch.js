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
    triangle(0, 30, 40, 0, 80, 30)
    // when this was changed from rectangle to square the shape changed but the size stayed the same
    square(5, 30, 70)
    roof(100, 100)

  }
  function square(x, y, size){
      // the x means the x-axis, the y means the y-axis and the size means the height and width
      rect(x, y, size, size)
  }

  function roof(x, y) {
    triangle(x, y, x+80, y, x+40, y-30)
    // this is the x and y axis of the roof
  }
  
  function house(x, y) {
    // this is the x and y axis of the house    
  }
