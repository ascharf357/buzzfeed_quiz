//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var bball_score = 0;
var ice_skating_score = 0;
var biking_score = 0;
var golf_score = 0;
var high_score;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//Question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//Question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//Question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//Question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//Question 6
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//Question 7
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");




//result
var result = document.getElementById("result");

//restart
var restart = document.getElementById("restart");
var buttons_string = ["q1a1", "q1a2", "q1a3", "q1a4", "q2a1", "q2a2", "q2a3", "q2a4", "q3a1", "q3a2", "q3a3", "q3a4", "q4a1", "q4a2", "q4a3", "q4a4",
                "q5a1", "q5a2", "q5a3", "q5a4","q6a1", "q6a2", "q6a3", "q6a4", "q7a1", "q7a2", "q7a3", "q7a4"];
var buttons = [q1a1, q1a2, q1a3, q1a4, q2a1, q2a2, q2a3, q2a4, q3a1, q3a2, q3a3, q3a4, q4a1, q4a2, q4a3, q4a4,
                q5a1, q5a2, q5a3, q5a4,q6a1, q6a2, q6a3, q6a4, q7a1, q7a2, q7a3, q7a4];
var i;






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", golf);
q1a2.addEventListener("click", biking);
q1a3.addEventListener("click", ice_skating);
q1a4.addEventListener("click", bball);

//Question 2
q2a1.addEventListener("click", bball);
q2a2.addEventListener("click", ice_skating);
q2a3.addEventListener("click", golf);
q2a4.addEventListener("click", biking);

//Question 3
q3a1.addEventListener("click", golf);
q3a2.addEventListener("click", biking);
q3a3.addEventListener("click", bball);
q3a4.addEventListener("click", ice_skating);

//question 4
q4a1.addEventListener("click", ice_skating);
q4a2.addEventListener("click", bball);
q4a3.addEventListener("click", biking);
q4a4.addEventListener("click", golf);

//Question 5
q5a1.addEventListener("click", ice_skating);
q5a2.addEventListener("click", biking);
q5a3.addEventListener("click", bball);
q5a4.addEventListener("click", golf);

//Question 6
q6a1.addEventListener("click", bball);
q6a2.addEventListener("click", golf);
q6a3.addEventListener("click", biking);
q6a4.addEventListener("click", ice_skating);

//Question 6
q7a1.addEventListener("click", biking);
q7a2.addEventListener("click", golf);
q7a3.addEventListener("click", bball);
q7a4.addEventListener("click", ice_skating);



//restart
restart.addEventListener("click", restart_button);


//disable buttons
function disable_2_3_4(){
  if (questionCount == 0){
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    q1a2.style.cssText = "opacity:0.3;";
    q1a3.style.cssText = "opacity:0.3;";
    q1a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 1){
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
    q2a2.style.cssText = "opacity:0.3;";
    q2a3.style.cssText = "opacity:0.3;";
    q2a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 2){
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
    q3a2.style.cssText = "opacity:0.3;";
    q3a3.style.cssText = "opacity:0.3;";
    q3a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 3){
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
    q4a2.style.cssText = "opacity:0.3;";
    q4a3.style.cssText = "opacity:0.3;";
    q4a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 4){
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
    q5a2.style.cssText = "opacity:0.3;";
    q5a3.style.cssText = "opacity:0.3;";
    q5a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 5){
    document.getElementById("q6a2").disabled = true;
    document.getElementById("q6a3").disabled = true;
    document.getElementById("q6a4").disabled = true;
    q6a2.style.cssText = "opacity:0.3;";
    q6a3.style.cssText = "opacity:0.3;";
    q6a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 6){
    document.getElementById("q7a2").disabled = true;
    document.getElementById("q7a3").disabled = true;
    document.getElementById("q7a4").disabled = true;
    q7a2.style.cssText = "opacity:0.3;";
    q7a3.style.cssText = "opacity:0.3;";
    q7a4.style.cssText = "opacity:0.3;";
  }

}

function disable_1_3_4(){
  if (questionCount == 0){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    q1a1.style.cssText = "opacity:0.3;";
    q1a3.style.cssText = "opacity:0.3;";
    q1a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
    q2a1.style.cssText = "opacity:0.3;";
    q2a3.style.cssText = "opacity:0.3;";
    q2a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 2){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
    q3a1.style.cssText = "opacity:0.3;";
    q3a3.style.cssText = "opacity:0.3;";
    q3a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 3){
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
    q4a1.style.cssText = "opacity:0.3;";
    q4a3.style.cssText = "opacity:0.3;";
    q4a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 4){
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
    q5a1.style.cssText = "opacity:0.3;";
    q5a3.style.cssText = "opacity:0.3;";
    q5a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 5){
    document.getElementById("q6a1").disabled = true;
    document.getElementById("q6a3").disabled = true;
    document.getElementById("q6a4").disabled = true;
    q6a1.style.cssText = "opacity:0.3;";
    q6a3.style.cssText = "opacity:0.3;";
    q6a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 6){
    document.getElementById("q7a1").disabled = true;
    document.getElementById("q7a3").disabled = true;
    document.getElementById("q7a4").disabled = true;
    q7a1.style.cssText = "opacity:0.3;";
    q7a3.style.cssText = "opacity:0.3;";
    q7a4.style.cssText = "opacity:0.3;";
  }

}

function disable_1_2_3(){
  if (questionCount == 0){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    q1a1.style.cssText = "opacity:0.3;";
    q1a2.style.cssText = "opacity:0.3;";
    q1a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    q2a1.style.cssText = "opacity:0.3;";
    q2a2.style.cssText = "opacity:0.3;";
    q2a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 2){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    q3a1.style.cssText = "opacity:0.3;";
    q3a2.style.cssText = "opacity:0.3;";
    q3a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 3){
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    q4a1.style.cssText = "opacity:0.3;";
    q4a2.style.cssText = "opacity:0.3;";
    q4a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 4){
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    q5a1.style.cssText = "opacity:0.3;";
    q5a2.style.cssText = "opacity:0.3;";
    q5a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 5){
    document.getElementById("q6a1").disabled = true;
    document.getElementById("q6a2").disabled = true;
    document.getElementById("q6a3").disabled = true;
    q6a1.style.cssText = "opacity:0.3;";
    q6a2.style.cssText = "opacity:0.3;";
    q6a3.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 6){
    document.getElementById("q7a1").disabled = true;
    document.getElementById("q7a2").disabled = true;
    document.getElementById("q7a3").disabled = true;
    q7a1.style.cssText = "opacity:0.3;";
    q7a2.style.cssText = "opacity:0.3;";
    q7a3.style.cssText = "opacity:0.3;";
  }
}

function disable_1_2_4(){
  if (questionCount == 0){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a4").disabled = true;
    q1a1.style.cssText = "opacity:0.3;";
    q1a2.style.cssText = "opacity:0.3;";
    q1a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 1){
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a4").disabled = true;
    q2a1.style.cssText = "opacity:0.3;";
    q2a2.style.cssText = "opacity:0.3;";
    q2a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 2){
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a4").disabled = true;
    q3a1.style.cssText = "opacity:0.3;";
    q3a2.style.cssText = "opacity:0.3;";
    q3a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 3){
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a4").disabled = true;
    q4a1.style.cssText = "opacity:0.3;";
    q4a2.style.cssText = "opacity:0.3;";
    q4a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 4){
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a4").disabled = true;
    q5a1.style.cssText = "opacity:0.3;";
    q5a2.style.cssText = "opacity:0.3;";
    q5a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 5){
    document.getElementById("q6a1").disabled = true;
    document.getElementById("q6a2").disabled = true;
    document.getElementById("q6a4").disabled = true;
    q6a1.style.cssText = "opacity:0.3;";
    q6a2.style.cssText = "opacity:0.3;";
    q6a4.style.cssText = "opacity:0.3;";
  }
  else if (questionCount == 6){
    document.getElementById("q7a1").disabled = true;
    document.getElementById("q7a2").disabled = true;
    document.getElementById("q7a4").disabled = true;
    q7a1.style.cssText = "opacity:0.3;";
    q7a2.style.cssText = "opacity:0.3;";
    q7a4.style.cssText = "opacity:0.3;";
  }
}



//#TODO: Define quiz functions here
function golf(){
  golf_score+=1
  questionCount+=1
  //alert("f")
  
  if (questionCount == 7){
    get_results();
  }
    
}

function biking(){
  biking_score+=1
  questionCount+=1
  //alert("f")
  
  if (questionCount == 7){
    get_results();
  }
}

function ice_skating(){
  ice_skating_score+=1
  questionCount+=1
  //alert("f")
  
 if (questionCount == 7){
    get_results();
  }
}

function bball(){
  bball_score+=1
  questionCount+=1
 // alert("f")
  
 if (questionCount == 7){
    get_results();
  }
}




function get_results(){
  if (bball_score>ice_skating_score && bball_score>golf_score && bball_score>biking_score){
    result.innerHTML = "You should play basketball";
  }
  else if (ice_skating_score>bball_score && ice_skating_score>golf_score && ice_skating_score>biking_score){
    result.innerHTML = "You should ice skate";
    
  }
  else if (golf_score>ice_skating_score && golf_score >bball_score && golf_score>biking_score){
    result.innerHTML = "You should play golf";
  }
  else if (biking_score>ice_skating_score && biking_score>bball_score && biking_score>golf_score){
    result.innerHTML = "You should bike"
  }
  else {
    result.innerHTML = "IDK. You are a confusing person";
  }
  
}


function restart_button(){
  questionCount = 0;
  bball_score = 0;
  ice_skating_score = 0;
  biking_score = 0;
  golf_score = 0;
  result.innerHTML = "Your result is..."

  for (i=0; i< buttons_string.length; i++){
    document.getElementById(buttons_string[i]).disabled = false;
    buttons[i].style.cssText = "opacity:1;";
    
  }
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}