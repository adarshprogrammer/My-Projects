let display = document.getElementById('display')
let keys = document.getElementsByClassName("num")
let op = document.getElementsByClassName("op")
let sk = document.getElementsByClassName("sk")
console.log(op)
for (let x in keys) {
    keys[x].onclick = () => {
        display.value += keys[x].innerHTML
    }
}

for (let y in op) {
    op[y].onclick = () => {
        display.value += op[y].innerHTML
    }
}
sk[0].onclick = () => display.value = "";
sk[1].onclick = () => display.value = eval(display.value);
img.onmouseover = () => {
    if(display.value=="")
    display.placeholder= "HELLO_FRIENDS😎";
}
