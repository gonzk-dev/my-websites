// Javascript function that prompts user for their major
// getElementById, make a div w the id for the major checkr.
// then use .innerHTML to input the msg lol
// check the class repo or email the prof for help before the next lab is due

function majorChecker(){
   var majorMessage = document.getElementById('majorDiv');
   var major = prompt('What is your major?');
   majorMessage.innerHTML = '<p>Great! We love '+ major + ' majors in this club!</p>';
}