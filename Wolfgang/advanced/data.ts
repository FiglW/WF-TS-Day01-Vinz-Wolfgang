var menus : Array<string>=['Schnitzel','Veggie-Burger','Toast','Spaghetti Carbonara','Eiernockerl'];

const [itemOne,itemTwo,itemThree,itemFour,itemFifth] = menus;



for(let menu of menus){
	console.log(menu);
}


// let isBeginner: datatype =.....//


















/*for(let i = 0 ; i < menu.length ; i++){
   var newdiv = document.createElement("p");

// create a <p> element


    var textnode = document.createTextNode(menu[i]);
   newdiv.appendChild(textnode);

// Append the text to <p>
   document.body.appendChild(newdiv);

// Append <p> to the body tag
}

function newItem(): void{
   let new_item = (<HTMLInputElement>document.getElementById('new-item')).value;

// Typescript is typesafe. So the document.getElementById() returns the type HTMLElement which does not contain a valueproperty. The subtype HTMLInputElement does however contain the value property.


   var newdiv = document.createElement("p");

// create a <p> element


    var text = document.createTextNode(new_item);

// create a text node
   newdiv.appendChild(text);

// Append the text to <p>    

document.body.appendChild(newdiv);

// Append <p> to the body tag
}

function promotion(item: string,price: number): any {
   return "Don't miss our promotion of "+ item + " for just "+ price + " Euro";
}
document.getElementById('target').innerHTML=promotion(itemThree,1);*/