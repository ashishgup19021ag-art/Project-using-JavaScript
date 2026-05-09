const form =document.querySelector('form');
const upload = document.getElementById('upload')
const input = document.querySelector('input')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    const div = document.createElement('div');
    div.classList.add('divv')
    div.style.marginTop="10px"
    

    const task = document.createElement('span');
    task.classList.add('taskk');
    task.textContent=text;


    const deletebutton =  document.createElement('button');
    deletebutton.textContent= "Delete";
    deletebutton.style.width="100px"
    deletebutton.style.marginLeft = "20px"

    const donebutton = document.createElement('button');
    donebutton.textContent = "done"
    donebutton.style.width="100px"
    donebutton.style.marginLeft = "20px"

    div.append(task,donebutton,deletebutton);
    upload.append(div); 

    deletebutton.addEventListener('click',(e)=>{
        div.remove();
    })

    donebutton.addEventListener('click',(e)=>{
        div.style.textDecoration="line-through";
    })
})