let place = prompt("Enter a place");
let lastname = prompt("Enter a last name");
let adj = prompt("Enter ADJ");
let subject = prompt("Name a subject");
let noun = prompt("Name enter a noun");
let food = prompt("Name a food");
let drink = prompt("Name a drink");
let activity = prompt("Name an activity");
let emotions = prompt("Enter a emotions");

let story = `Today at ${place}, my teacher, Mr./Ms. ${lastname}, gave us a ${adj} quiz on ${subject}. I had no idea how to answer questions like, "What is ${noun}?" and "Why does ${noun} exist?" During lunch, I ate ${food} and drank (liquid), but my friend accidentally spilled (food) everywhere, which was super (adjective). After lunch, we had (activity) class, where I felt (emotion) but also kind of (adjective). What a day! `

console.log(story)

document.getElementById('story').innerHTML = mystory