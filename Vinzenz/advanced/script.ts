var menu: Array<string> = ["Club Sandwich", "Ramen", "Pizza"];

const [itemOne, itemTwo, itemThree] = menu;

for(var i=0;i<menu.length;i++){
    var div = document.createElement("div");
    var para = document.createElement("p");
    var commentOut = document.createElement("span");
    commentOut.setAttribute("id",`commentOut${i}`);
    var comment = document.createElement("input");
    comment.setAttribute("id",`input${i}`);
    var btn = document.createElement("button");
    btn.setAttribute("id",`btn${i}`);
    btn.innerHTML ="Submit";
    btn.addEventListener("click", com);
    comment.setAttribute("type","textarea");

    para.innerHTML = `${menu[i]}`;

    document.body.appendChild(div); 
    div.appendChild(para);
    div.appendChild(comment);
    div.appendChild(btn);

    function com(){
        

    }
    
}