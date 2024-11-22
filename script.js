let username = prompt('who are you?')
let userQuest = prompt('Describe ')
let userFavColor = prompt('what is your favorite color?')
let swallowAirspeed = prompt('what is the air speed of an unlaiden swallow')
let 

let head = `<h1> ${username}'s art`
let mystory = `<p> Hello ${username}. Answer me these questions <span class="loud">three</span>, and the other side youll see. </p>
<p> I see you have alreadu amswered, so your quest is to ${userQuest} </p>`

console.log(mystory)

document.getElementById('story').innerHTML = mystory