//start of variables//
let place = prompt("Enter a place");
let lastname = prompt("Enter a last name");
let adj = prompt("Enter ADJ");
let subject = prompt("Name a subject");
let noun = prompt("Name enter a noun");
let food = prompt("Name a food");
let drink = prompt("Name a drink");
let activity = prompt("Name an activity");
let emotions = prompt("Enter a emotions");
//end of variables//
//start of story using variables//
let story = `Today at ${place}, my teacher, Mr./Ms. ${lastname}, gave us a ${adj} quiz on ${subject}. I had no idea how to answer questions like, "What is ${noun}?" and "Why does ${noun} exist?" During lunch, I ate ${food} and drank ${drink}, but my friend accidentally dropped ${food} everywhere, which was super ${adj}. After lunch, we had ${activity} class, where I felt ${emotions} but also kind of ${adj}. What a day!`
//end of story using variables//
console.log(story)

document.getElementById('story').innerHTML =story