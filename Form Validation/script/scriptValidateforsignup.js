const form=document.getElementById('form1');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const address=document.getElementById('address');
const phone=document.getElementById('num');
let email=document.getElementById('email');
const gender=document.getElementById('gender');
const pass1=document.getElementById('pass1');
const pass2=document.getElementById('pass2');
form1.addEventListener('click',(event)=>
{
formValidation();
})
const successmsg=()=>
{
    let Confirm = confirm("Are you Conform !")
    if(Confirm)
    {
        Modal();

        
    }
    

}
// define validation form
    const formValidation=()=>{
    const Fname=fname.value.trim();
    const Lname=lname.value.trim();
    const Address=address.value.trim();
    const Phone=phone.value.trim();
    const Emails=email.value.trim();
    const Pass1=pass1.value.trim();
    const Pass2=pass2.value.trim();
   
//first name and last name
if(Fname=="")
{
    setErrorMsg(fname,"name can no be blank");
    
}
else
{
    SetSucces(fname)
}
// last name

if(Lname=="")
{
    setErrorMsg(lname,"name can no be blank");
    
}
else
{
    SetSucces(lname)
};
// contect
if(Phone==""){
    setErrorMsg(phone,"Please Enter your mobile Number");
   
}
else if(Phone.length!=10)
{
    setErrorMsg(phone,"Max-Min 10 Digit Input")
    
}
else
{   
    SetSucces(phone);

}
 // email
 if(Emails=="")
 {
 setErrorMsg(email,'Email Cannot be blank')
 
 }

 else{
    SetSucces(email);
 }

if(Pass1==""){
    setErrorMsg(pass1,"password cannot be blank")
    
}
else if(Pass1<=5){
    setErrorMsg(pass1,"password minimum 6 Char")
    
}
else if(Pass1!=Pass2){
    setErrorMsg(pass2,"Password did nnot Match")
    
}
else
{
     SetSucces(pass1);
     SetSucces(pass2);
    };
   
// Addres
if(Address==""){
    setErrorMsg(address,"Address cannot be blank")
    return false;
}
else{
    SetSucces(address);
}



successmsg();
return true;
}

function setErrorMsg(input,errmassege)
{
    const formgroup=input.parentElement;
    const small=formgroup.querySelector('small')
    
    formgroup.className="col-md-6 form-group error";
    small.innerText=errmassege;
    

}
function SetSucces(email)
{
    const formgroup=email.parentElement;
    formgroup.className="col-md-6 form-group success"

}

function Modal(){
    document.querySelector(".modalbyadarsh").innerHTML=` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
       <div class="modal-body" style="text-align:center">
        <i class="fa fa-check-circle" style="font-size:60px;color:rgb(61, 190, 22)"></i>
           <h4>Registration completed successfully</h4>
           <h2>Thank you!</h2>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`
}
