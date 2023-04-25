console.log('hi')
const form =document.querySelector('#form1');
const NAme=document.querySelector('#name');
const Dish=document.querySelector('#dish');
const Price=document.querySelector('#price');
const table_no=document.querySelector('#table');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

form.addEventListener('submit' , onSubmit);

function onSubmit(event){
    event.preventDefault();
    if( NAme.value===''||Dish.value===''||Price.value==='' ||table_no.value===''){
        //alert please enter all fields
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        // Remove error after 3 seconds
        setTimeout(()=>msg.remove(),3000);
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${NAme.value} , ${Dish.value},${Price.value},${table_no.value}`));

        userList.appendChild(li);

        //clear fields
        NAme.value='';
        Dish.value='';
        Price.value='';
        table_no.value='';



        
    }

}


