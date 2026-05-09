const form =document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const boy=document.getElementById('first1');
    const girl = document.getElementById('second2');

    const l1=boy.value.length;
    const l2= girl.value.length;

    const result = Math.pow(l1+l2,3)%101;

    const text=document.querySelector('h2');
    text.textContent= `Result: ${result}%`;
    form.reset();

})

