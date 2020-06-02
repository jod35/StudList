
const table_body=document.querySelector('.table-body');
const text_center=document.querySelector('.text-center');
const other_item_display=document.querySelector('.other-items');


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
        table_item[i].classList.add('item');
        if (i >=10){
            table_item[i].style.display="none";
            
            
            other_item_display.innerHTML+=
        `<tr class='table-item'>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${grade}</td>
        </tr>`;
            
        }
        table_item[i].addEventListener('click',()=>{
            table_item[i].style.backgroundColor="red";
            table_item.length-=1; 
            text_center.innerHTML = `${table_item.length} Items`;
        });
    }


    text_center.innerHTML = `${table_item.length} Items`;


    e.preventDefault();
}


