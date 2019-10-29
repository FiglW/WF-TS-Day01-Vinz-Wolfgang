var menu = ["Club Sandwich", "Ramen", "Pizza"];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2];
for (var i = 0; i < menu.length; i++) {
    var div = document.createElement("div");
    var para = document.createElement("p");
    var commentOut = document.createElement("span");
    commentOut.setAttribute("id", "commentOut" + i);
    var comment = document.createElement("input");
    comment.setAttribute("id", "input" + i);
    var btn = document.createElement("button");
    btn.setAttribute("id", "btn" + i);
    btn.innerHTML = "Submit";
    btn.addEventListener("click", com);
    comment.setAttribute("type", "textarea");
    para.innerHTML = "" + menu[i];
    document.body.appendChild(div);
    div.appendChild(para);
    div.appendChild(comment);
    div.appendChild(btn);
    function com() {
        console.log("input" + i);
        document.getElementById("input" + i).value = document.getElementById("commentOut" + i).innerHTML;
    }
}
