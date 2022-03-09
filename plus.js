document.addEventListener("DOMContentLoaded", result)

function result() {
    let buttons = document.querySelectorAll("button")

    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i]
        btn.addEventListener("click", () => {
            calc(btn.innerText)
        })
    }
}

function calc(sign) {
    const numberOne = document.querySelector("#input1")
    const numberTwo = document.querySelector("#input2")
    let result = 0
    if (sign === "Кошуу") {
        result = Number(numberOne.value) + Number(numberTwo.value)
    }
    const resultNode = document.getElementById("myRes")
    resultNode.textContent = result
}