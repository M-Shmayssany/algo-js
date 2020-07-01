class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let circleNew = new Circle(13,13,15);
console.log(circleNew);
circleNew.move(2,2);
console.log(circleNew);
console.log("The surface of the circle is: " + circleNew.surface);