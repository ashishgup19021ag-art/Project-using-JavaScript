const qoutes=[
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Dream big, start small, but start today.",
    "Discipline is choosing between what you want now and what you want most.",
    "Your future is created by what you do today, not tomorrow.",
    "Hard work beats talent when talent doesn't work hard.",
    "Believe in yourself even when no one else does.",
    "Every expert was once a beginner.",
    "Don't stop when you're tired; stop when you're done.",
    "Small progress is still progress.",
    "Failure is simply the opportunity to begin again, more intelligently.",
    "Your mindset determines your success.",
    "Focus on improvement, not perfection.",
    "Success comes to those who are willing to wait and work.",
    "Knowledge is power, but action is everyhing.",
    "Great things never come from comfort zons.",
    "Consistency is more important than motivaion.",
    "The only limit is the one you set yourself",
    "Learn from yesterday, live for today, hope for tomorrow.",
    "Stay patient and trust the process.",
    "Your hard work today will become your strength tomorrow.",
];

const qoute = document.getElementById("qoute");
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    qoute.textContent=qoutes[index];
}) 