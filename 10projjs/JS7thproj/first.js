const zodiacsigns = [
    "capricorn","Aquarius","Pisces","Aries","Taurus","Gemini"
    ,"Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
];

const compliments = [
   "Your zodiac energy naturally attracts positivity wherever you go.",
    "You embody the best qualities of your ruling planet.",
    "Your birth chart shows rare emotional intelligence.",

"You have a magnetic aura that people instantly trust.",

"Your astrological sign gives you powerful inner strength.",

"You balance logic and emotions beautifully, just as the stars intended.",
"Your planetary alignment blesses you with natural leadership.",
"You intuitively understand people on a soul level.",

"Your sign’s creativity shines in everything you do.",

"You have the calm wisdom of an old soul written in your chart.",

"Your cosmic energy makes you incredibly inspiring.",

"You handle challenges with grace, just like your ruling element.",
"Your moon sign gives you deep emotional depth and empathy.",
"You shine brightest when you stay true to your zodiac nature.",

"Your horoscope reflects resilience and determination.",

"You have a rare blend of passion and patience in your chart.",

"Your planetary influence makes you naturally charming.",

"You bring harmony wherever you go, guided by the stars.",

"Your astrological energy helps others feel safe and understood.",

"You are spiritually aligned with the universe.",

"Your sign’s intuition is incredibly strong.",

"You express love in a way only your zodiac sign can.",

"Your chart shows great potential for success and fulfillment.",

"You have a healing presence influenced by cosmic forces.",

"Your destiny is beautifully written in the stars.",

"You turn obstacles into opportunities through your astrological strength.",

"Your zodiac sign blesses you with natural confidence.",

"You radiate balance, guided by celestial harmony.",

"your planetary placements make you truly one of a kind.",

"You are exactly where the universe wants you to be.",
];

const predictions = [
    "A delayed blessing will finally arrive when you least expect it.",

"Someone from your past may reappear with unfinished karma.",

"Your intuition will guide you toward the right decision soon.",

"Financial stability improves after a period of struggle.",

"Emotional healing begins once you stop doubting yourself.",

"A hidden talent will start bringing recognition.",

"You will outgrow certain people without any conflict.",

"A new opportunity will come through an unexpected source.",

"The universe will reward your patience soon.",

"A major mindset shift will change your life direction.",

"You will gain clarity about someone who confused you.",

"Your hard work will be noticed, even if silently.",

"A peaceful phase replaces recent emotional chaos.",

"You may receive good news related to career or studies.",

"Your energy will attract positive connections.",

"A long-standing worry will slowly resolve itself.",

"You will learn to choose yourself without guilt.",

"Spiritual growth increases through challenges.",

"A wish you kept private is manifesting.",

"You are entering a phase of self-respect and confidence."
]

const form = document.getElementById('astro');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.getElementById('name').value;
    const surname = document.getElementById('Surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    let zodiacsign = zodiacsigns[month-1];
    let compliment  = compliments[day-2];
    let prediction = predictions[year%20];

    const div = document.getElementById('result');
    div.textContent = `Hi ${name} ${surname}, Your zodiac sign is ${zodiacsign}.${compliment}.${prediction}`
})