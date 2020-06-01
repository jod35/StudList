
const table_body=document.querySelector('.table-body');


// const add_button=document.querySelector("#submit");
const form =document.querySelector('form');


form.addEventListener("submit",submitListItem);


function submitListItem(e){

    const first_name=document.querySelector("#first_name").value;
    const last_name=document.querySelector('#lastname').value;
    const age=document.querySelector("#age").value;
    const gender=document.querySelector("#gender").value;
    const grade=document.querySelector("#grade").value;

    table_body.innerHTML+=`
    <tr class='table-item'>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${grade}</td>
    </tr>
    
    `

    let table_item=document.querySelectorAll('.table-item');

    for(let i=0; i<table_item.length;i++){
        if (i >5){
            table_item[i].getElementsByClassName.display="none";
        }
        
    }


    e.preventDefault();
}


