var menu = ['Schnitzel', 'Veggie-Burger', 'Toast', 'Spaghetti Carbonara', 'Eiernockerl'];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2], itemFour = menu[3], itemFifth = menu[4];
for (var i = 0; i < menu.length; i++) {
    var newdiv = document.createElement("p");
    // create a <p> element
    var textnode = document.createTextNode(menu[i]);
    newdiv.appendChild(textnode);
    // Append the text to <p>
    document.body.appendChild(newdiv);
    // Append <p> to the body tag
}
function newItem() {
    var new_item = document.getElementById('new-item').value;
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
/* Here we have a function named newItem and the type of the function is void */
function promotion(item, price) {
    return "Don't miss our promotion of " + item + " for just " + price + " Euro";
}
document.getElementById('target').innerHTML = promotion(itemThree, 1);
