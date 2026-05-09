const form = document.querySelector('form');
const answer =  {
    q1:"11",
    q2:"West Indies",
    q3:"50",
    q4:"Sachin Tendulkar",
    q5:"Leg Before Wicket",
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalscore=0;

    for (let [name,value] of data.entries()) {
        if (answer[name]==value) 
            finalscore++;
        
        
    }

    const resullt = document.getElementById('result');
    resullt.textContent= `your score is: ${finalscore} out of 5`;

    form.reset();
})