const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ammount=document.getElementById('income');
    const income=parseInt(ammount.value);
    let totaltax=0;

    const result=document.querySelector('h2');


    if (income<=1200000)
        return;
    else if(income<=1600000){
        totaltax= (income-1200000)*.15;
    }
    else if(income<=2000000){
        totaltax=(income-1600000)*.20 + 60000;
    }
    else if(income<=2400000){
        totaltax=(income-2000000)*.25 + 60000+ 80000;
    }
    else {
        totaltax=(income-2400000)*0.30+60000+80000+100000;
    }

    result.textContent=`Income Tax: ${totaltax}`;
    form.reset;

})