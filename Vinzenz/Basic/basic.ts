var table: Array<number> = [1,2,3,4,5,6,7,8,9,10];
var table2: Array<number> = [1,2,3,4,5,6,7,8,9,10];

for(let a of table){

    for(var b of table2){

    let result: number = a*b;
    console.log(a + " x "+ b +" = "+ result);
    }
    
};



