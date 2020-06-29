class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos){
            return  true;// collision detected!
        } else {
            return false;// no collision detected!
        }
    } 
        
}


let R1 = new Rectangle( 50, 0, 200, 200);
let R2 = new Rectangle( 0, 50, 100, 100);
let C = R1.collides(R2);
console.log(C);

