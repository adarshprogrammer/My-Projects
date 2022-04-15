const inputBox=document.querySelector('.inputField input')
const btn=document.querySelector('.inputField button')
const todo=document.querySelector('.todolist')
const deleteall=document.querySelectorAll('.footer button')
inputBox.onkeyup=()=>{
    let userdata=inputBox.value;
    if(userdata.trim()!=0){
        btn.classList.add('active');
    }
    else {
        btn.classList.remove('active');
    }
}
btn.onclick=()=>{
    let userdata=inputBox.value;
    let getLocalStorage=localStorage.getItem('New Todo')
    if(getLocalStorage==null){
        array=[]
    }
    else{
        array=JSON.parse(getLocalStorage);
    }
    array.push(userdata);
    localStorage.setItem("New Todo",JSON.stringify(array));
    showtask();
}
function showtask()
{
    let getLocalStorage=localStorage.getItem('New Todo')
    if(getLocalStorage==null){
        array=[]
    }
    else{
        array=JSON.parse(getLocalStorage);
    }
    const panding=document.querySelector('.panding')
    panding.textContent=array.length;
    let newTag="";
    array.forEach((element,index)=> {
        newTag +=`<li>${element}<span onclick="Delete(${index})"><i class="fa fa-trash"></i></span></li>`
        
    });
    todo.innerHTML=newTag;
    inputBox.value=""

}
//delete task function
function Delete(index){
    let getLocalStorage=localStorage.getItem('New Todo');
    array=JSON.parse(getLocalStorage);
    array.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(array));
    showtask()

}
deleteall[1].onclick=()=>{
    array=[]
    localStorage.setItem('New Todo',JSON.stringify(array));
    showtask();

}