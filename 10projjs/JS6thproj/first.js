
setInterval(()=>{
    const div = document.getElementById('time');
    const t1=Date.now();
    const t2 = new Date(2026,9,19).getTime();

    let timer=t2-t1;

    const day = Math.floor((timer)/(1000*60*60*24));
    timer%=(1000*60*60*24);

    const hour = Math.floor((timer)/(1000*60*60));
    timer%=(1000*60*60);

    const minute = Math.floor((timer)/(1000*60));
    timer%=(1000*60);

    const sec = Math.floor((timer)/(1000));
    timer%=(1000);

    div.textContent=`Days:${day} Hour:${hour} minute:${minute} second:${sec}`;
})