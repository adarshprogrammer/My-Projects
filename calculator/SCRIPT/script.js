let num = document.querySelectorAll('table tr td .num')
let display = document.getElementsByClassName('form-control')
let opration = document.querySelectorAll('table tr td .op')
let spacial = document.querySelectorAll('table tr td .sp')


for (let x of num) {
    x.onclick = () => {
        display[0].value += x.innerHTML
    }
}
for (let x of opration) {
    x.onclick = () => {
        display[0].value += x.innerHTML
    }
}
spacial[0].onclick = () => display[0].value = display[0].value.substr(0, display[0].value.length - 1);
spacial[1].onclick = () => display[0].value = "";
spacial[2].onclick = () =>
 {
    if (display[0].style.display == "none") {
        spacial[2].innerHTML = "OFF";
        setTimeout(() => { display[0].style.display = "block" }, 100);
        setTimeout(() => { display[0].style = "background-color:rgb(128, 255, 202)" }, 500);
        setTimeout(() => { display[0].value = 'Loading..' }, 500);
        setTimeout(() => { display[0].value = "" }, 3000);

    }
    else {
        display[0].value = 'OFF Mode';
        spacial[2].innerHTML = "ON";
        setTimeout(() => { display[0].value = "" }, 700);
        setTimeout(() => { display[0].style = "background-color:rgb(22, 20, 20);" }, 1000);
        setTimeout(() => { display[0].style.display = "none" }, 1500)
    }
}
spacial[3].onclick=()=>{
    
       display[0].value=eval(display[0].value)
        
}







