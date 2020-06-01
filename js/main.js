const first_name=document.querySelector("#first_name").value;
const last_name=document.querySelector('#lastname').value;
const age=document.querySelector("#age").value;
const gender=document.querySelector("#gender").value;
const grade=document.querySelector("#grade").value;


// const add_button=document.querySelector("#submit");
const form =document.querySelector('form');


form.addEventListener("submit",submitListItem);


function submitListItem(e){
        
    e.preventDefault();
}


