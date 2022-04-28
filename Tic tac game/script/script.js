const clicks = document.querySelectorAll("#tic .col-md-4")
const $span = document.getElementsByTagName("span")

let count = 0;


clicks.forEach((x, y) => {
    x.addEventListener('click', () => {
       


        if (count % 2 == 0) {
            if (x.innerHTML == "") {
                x.innerHTML = "X";
                count++;
                $span[1].innerText = "O";
            }
        }
        else
            if (x.innerHTML == "") {
                x.innerHTML = "O";
                count++;
                $span[1].innerText = "X";
            }

    })

})
function remove() {
    let x = confirm("are you sure")
    if (x == true) {

        clicks[0].innerHTML = ""
        clicks[1].innerHTML = ""
        clicks[2].innerHTML = ""
        clicks[3].innerHTML = ""
        clicks[4].innerHTML = ""
        clicks[5].innerHTML = ""
        clicks[6].innerHTML = ""
        clicks[7].innerHTML = ""
        clicks[8].innerHTML = ""
    }

}


const wining_game = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
clicks.forEach((x)=>{ 
   
    x.addEventListener('click',()=>{

        wining_game.forEach((a, b) => {
   
            
            if (clicks[a[0]].innerHTML == "X" && clicks[a[1]].innerHTML == "X" && clicks[a[2]].innerHTML == "X") {
             clicks[a[0]].style = "color:aqua";
             clicks[a[1]].style = "color:aqua";
             clicks[a[2]].style = "color:aqua";
             setTimeout(()=>{
                let con=confirm(" 'X' you Won!");
                if(con==true){
        clicks[0].innerHTML = ""
        clicks[1].innerHTML = ""
        clicks[2].innerHTML = ""
        clicks[3].innerHTML = ""
        clicks[4].innerHTML = ""
        clicks[5].innerHTML = ""
        clicks[6].innerHTML = ""
        clicks[7].innerHTML = ""
        clicks[8].innerHTML = ""
      let $add=parseInt($span[2].innerText);
       $span[2].innerText=$add+=1;
                }

             },500)
             
            }



            if (clicks[a[0]].innerHTML == "O" && clicks[a[1]].innerHTML == "O" && clicks[a[2]].innerHTML == "O") {
             clicks[a[0]].style = "color:aqua";
             clicks[a[1]].style = "color:aqua";
             clicks[a[2]].style = "color:aqua";
             setTimeout(()=>{
                let con=confirm(" 'O' you Won!");
                if(con==true){
        clicks[0].innerHTML = ""
        clicks[1].innerHTML = ""
        clicks[2].innerHTML = ""
        clicks[3].innerHTML = ""
        clicks[4].innerHTML = ""
        clicks[5].innerHTML = ""
        clicks[6].innerHTML = ""
        clicks[7].innerHTML = ""
        clicks[8].innerHTML = ""
       let $add=parseInt($span[3].innerText);
       $span[3].innerText=$add+=1;

                }

             },500)
             
            }
           
})

})
})

