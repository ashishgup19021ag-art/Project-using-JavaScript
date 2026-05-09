const first = document.getElementById('first');

first.addEventListener('click',(e)=>{
    const color = e.target;
    document.body.style.backgroundColor= color.id ;
});