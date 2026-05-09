
setInterval(()=>{
    const div=document.getElementById('time');
    div.textContent=new Date().toLocaleTimeString();
},1000)