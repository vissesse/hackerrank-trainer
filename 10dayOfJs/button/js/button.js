let cont = 0
var btn = document.createElement("Button");
btn.id = "btn";
btn.innerHTML = cont
document.body.appendChild(btn)

btn.onclick = function() {
    /* This changes the button's label */
    btn.innerHTML = ++cont
};