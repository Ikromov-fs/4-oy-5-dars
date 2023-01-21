let __display = document.querySelector('#display');
let __buttons = document.querySelector('#buttons');
let __button = __buttons.querySelectorAll('button');


__button.forEach((number) => {
    number.addEventListener("click", (e) => {
        let content = e.target.textContent;
        // __display.textContent += content
        if (content === "reset") {
            __display.textContent = null
        }
        else if (content === "del") {
            __display.textContent = __display.textContent.slice(0, -1)
        }
        else if (content === "=") {
            __display.innerText = eval(__display.innerText)
        }
        else {
        __display.textContent += content
        }
    })
})
