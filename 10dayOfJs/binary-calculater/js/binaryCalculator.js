function click_clear(e) {
    // clicking on = or c 
    const res = document.getElementById("res")
    res.innerHTML = ""
}

function regex_input() {
    return new RegExp("[10]+[\+\*-/][10]+$", 'g')
}

function remov(array, pos) {
    for (let i = pos; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }

    return array
}

function find_operator(array) {
    let array_ = array
    let element_index = array_.findIndex((e) => { if (e == '*' || e == '/*') return e })
    for (const element of array_) {
        const item_pos_1 = array_[element_index - 1]
        const item_pos_2 = array_[element_index + 1]
        if (element == '*')
            array_[pos_1] = item_pos_1 * item_pos_2

        if (element == '/')
            array_[pos_1] = item_pos_1 / item_pos_2

        array = remov(array, element_index)
        array = remov(array, element_index + 1)

        element_index = array_.findIndex((e) => { if (e == `*` || e == `/`) return e })
    }
    return array_
}

function click_eql(e) {
    const res = document.getElementById('res').innerText
    const res_regex = regex_input().exec(res)
    if (res_regex != null) {
        const automata = prepare_calc(res)
        const result = calculate(automata)

        console.log(automata)
        console.log(res.split(`/`))



        document.getElementById('res').innerHTML = (result).toString(2)

    }
}

function operate(e) {
    const btn = e.target || e.srcElement;
    const res = document.getElementById('res')
    res.innerHTML += btn.innerText
}

function calculate(array) {
    console.log("get calculate")
    let lista = array
    let result = 0


    for (let i = 1; i < lista.length; i += 2) {
        if (lista[i] == '*') {
            const v_left = lista[i - 1]
            const v_right = lista[i + 1]
            lista[i + 1] = v_left * v_right

        }
        if (lista[i] == '/') {
            const v_left = lista[i - 1]
            const v_right = lista[i + 1]
            lista[i + 1] = parseInt(v_left / v_right)
        }
        if (lista[i] == '+') {
            const v_left = lista[i - 1]
            const v_right = lista[i + 1]
            lista[i + 1] = v_left + v_right

        }
        if (lista[i] == '-') {
            const v_left = lista[i - 1]
            const v_right = lista[i + 1]
            lista[i + 1] = v_left - v_right
        }
    }

    result = lista[lista.length - 1]

    return result
}
//6->70
//
//
function prepare_calc(values) {
    console.log(values)
    let automata = []
    let value = ""
    for (let i = 0; i < values.length; i++) {
        const e = values[i]
        switch (values[i]) {
            case '+':
                automata.push(parseInt(value, 2))
                automata.push(e)
                value = ""
                continue
            case '/':
                automata.push(parseInt(value, 2))
                automata.push(e)
                value = ""
                continue
            case '*':
                automata.push(parseInt(value, 2))
                automata.push(e)
                value = ""
                continue
            case '-':
                automata.push(parseInt(value, 2))
                automata.push(e)
                value = ""
                continue
            default:
                value += e;
        }

    }

    automata.push(parseInt(value, 2))
    return automata
}


document.getElementById("btnSum").addEventListener('click', operate)
document.getElementById("btnSub").addEventListener('click', operate)
document.getElementById("btnMul").addEventListener('click', operate)
document.getElementById("btnDiv").addEventListener('click', operate)
document.getElementById("btn1").addEventListener('click', operate)
document.getElementById("btn0").addEventListener('click', operate)
document.getElementById("btnClr").addEventListener('click', click_clear)
document.getElementById("btnEql").addEventListener('click', click_eql)