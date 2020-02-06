
function job () 
{
    var experience = prompt("How much experience years do you have ?");
    console.log(experience);

  
    var overtime = prompt("Can you work for an overtime ?");
    console.log(overtime);
    while(overtime.toLocaleLowerCase() !== "yes" && overtime !== "no") {
        overtime = prompt("Can you work for an overtime ?");
    }
    var pressure = prompt("Can you work under pressure ?");
    console.log(pressure);
    while(pressure.toLocaleLowerCase() !== "yes" && pressure !== "no") {
        pressure = prompt("Can you work under pressure ?");
    }
    var result; 
    var item ="";
    var i ="";


    for ( i = 0; i < experience; i++)
    {
       if (overtime === "yes" && pressure === "yes" ) {
       ( item = item + '<img src="images/download.png">');}
    
     else if (overtime === "no" || pressure === "no" ){
       ( item = item + '<img src="images/red cross.png">');}
    }
    
    if (experience >= 5 && overtime == "yes" && pressure == "yes" ) {     
        result = 'Your apportunity to get this job is High';   
    } 
    else if (experience < 5 && experience >= 2 && overtime == "yes" && pressure == "yes"  ) {     
        result = 'please submit your CV to schedule the interview';   
    } else if (experience < 2 && experience >= 0 || overtime == "no" || pressure == "no") {     
        result = 'Sorry! You are not qualified enough for this specific position.';   
    } else {     
    
        result = 'Something went wrong!';   
    } 
    return result+item;
    
}

document.write('<h3>'+ job() + '</h3>');