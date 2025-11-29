let number = () => {
    let num = Math.floor(Math.random() * 16777215);
    code1 = "#" +num.toString(16);
    document.body.style.backgroundColor = code1;

    display.innerText = code1;
};

let code1;
let select = () => {
    navigator.clipboard.writeText(code1);
}

//h2 line
let display = document.getElementById("color-code");

//click call
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.addEventListener("click",number);
btn2.addEventListener("click",select);

//initial call on page load
number();