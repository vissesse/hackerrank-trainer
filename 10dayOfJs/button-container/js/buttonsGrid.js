const divButtons = document.createElement("div")
divButtons.id = "btns"
document.body.appendChild(divButtons)

for (let i = 1; i <= 9; i++) {
    let btn = document.createElement("Button")
    btn.id = 'btn' + i
    btn.className = 'btn'
    btn.innerHTML = i
    divButtons.appendChild(btn)
}

const btn5 = document.getElementById("btn5")
btn5.onclick = function() {
    const btn_1 = document.getElementById("btn1")
    const btn_2 = document.getElementById("btn2")
    const btn_3 = document.getElementById("btn3")
    const btn_4 = document.getElementById("btn4")
    const btn_6 = document.getElementById("btn6")
    const btn_7 = document.getElementById("btn7")
    const btn_8 = document.getElementById("btn8")
    const btn_9 = document.getElementById("btn9")

    let aux = btn_1.innerText
    btn_1.innerHTML = btn_4.innerText
    btn_4.innerHTML = btn_7.innerText
    btn_7.innerHTML = btn_8.innerText
    btn_8.innerHTML = btn_9.innerText
    btn_9.innerHTML = btn_6.innerText
    btn_6.innerHTML = btn_3.innerText
    btn_3.innerHTML = btn_2.innerText
    btn_2.innerHTML = aux

}