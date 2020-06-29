let randomArray = []; 

function rand10(){
    return Math.floor(Math.random() * 10) + 1;  //returns a random integer from 1 to 10 
    }

function multiRand(n){
    for (i=0; i<=n;i++){
        randomArray.push(rand10());
    }
}

multiRand(50);

randomArray.forEach(i => {
    console.log(randomArray[i]);
});
