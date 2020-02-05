var experience = prompt("How much experience years do you have ?");
console.log(experience);
var result; 
 
if (experience >= 5 ) {     
    result = 'Your apportunity to get this job is High';   
} 
else if (experience < 5 && experience >= 2 ) {     
    result = 'please submit your CV to schedule the interview';   
} else if (experience < 2 && experience >= 0) {     
    result = 'Sorry! You are not qualified enough for this specific position.';   
} else {     
    result = 'Something went wrong!';   
} 

document.write('<h3>'+result+'</h3>');