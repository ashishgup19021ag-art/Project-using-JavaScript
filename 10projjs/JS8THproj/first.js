const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circleelement = document.createElement('div');
    circleelement.classList.add('circle');

    const color = ['red','blue','purple','brown','green','pink','orange'];
    circleelement.style.backgroundColor = color[Math.floor(Math.random()*7)];

    circleelement.style.top = `${e.clientY-25}px`;
    circleelement.style.left=`${e.clientX-25}px`;
    circleelement.textContent=`HI`

    body.append(circleelement);

    setTimeout(()=>{
        circleelement.remove();
    },5000)
})