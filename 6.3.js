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


//returns a random integer from 1 to val
function randNumber(val){
    return Math.floor(Math.random() * val) + 1;   
    }

// Create 1000 random rectangle
let R = []; 

for (i=1; i <= 1000; i++){
    R[i] = new Rectangle( randNumber(1000), randNumber(1000), randNumber(100), randNumber(100));
    //console.log("Rectangle(" + i + "): ");
    //console.log(R[i]);
}


let testResult = Boolean;
let test = 1;

while (test <= 1000){
    for (underTest = 1; underTest <= 1000; underTest++){
        if (test != underTest){
            testResult = R[test].collides(R[underTest]);
            if(testResult == true){
                console.log("the rectangle(" + test + ") is colided with rectangle(" + underTest + ")");
            }
        }
    }
    test++;
}
