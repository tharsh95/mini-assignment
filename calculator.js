let screen = document.getElementById("screen")
buttons = document.querySelectorAll("button")
let screenValue = ""
for (item of buttons) {
    item.addEventListener("click", (e) => {
        screen.disabled = false
        buttonText = e.target.innerText
        if (buttonText == "CE") {
            screenValue = ""
            screen.value = screenValue
        }
        else if (buttonText == "OFF") {
            screen.disabled = true
            screen.value = ""
        }
        else if (buttonText == "ON") {
            screen.disabled = false
            screen.value = ""
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue)
            buttonText.addEventListener("keyup", function (e) {
                if(e.keyCode == 13){
                    screen.value = screenValue
                }
            })
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}