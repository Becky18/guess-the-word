 player1_name=localStorage.getItem("player1_name");
 player2_name=localStorage.getItem("player2_name");
 
 score_1=0;
 score_2=0;

 document.getElementById("player1_name").innerHTML=player1_name + ":"
 document.getElementById("player2_name").innerHTML=player2_name + ":"

 document.getElementById("player_Q").innerHTML="Question Turn:" + player1_name
 document.getElementById("player_A").innerHTML="Answer Turn:" + player2_name

 document.getElementById("score_1").innerHTML= score_1
 document.getElementById("score_2").innerHTML= score_2

 function send(){
word_given=document.getElementById("submit_I").value;
console.log(word_given)
word=word_given.toLowerCase();

first = word.charAt(1);
console.log(first);
half = Math.floor(word.length/2);
console.log(half);
seconde = word.charAt(half);
console.log(seconde);
last = word.length - 1;
console.log(last);
third=word.charAt(last)
console.log(third);

remove_1 = word.replace(first,"_");
remove_2 = remove_1.replace(seconde,"_");
remove_3 = remove_2.replace(third,"_");

question="<h4 id='question_D'>" +remove_3+"</h4>"
input_B="<br> Answer:<input id='A_I' type='text' placeholder='Type Answer'>"
check_B="<br><br> <button class='btn btn-warning' id='C_B' onclick='CHECK()'>CHECK</button>"
row=question + input_B + check_B;
document.getElementById("output").innerHTML=row;
document.getElementById("submit_I").value=""
 }

 questionTurn="player1";
 answerTurn="player2";

function CHECK(){
    answer=document.getElementById("A_I").value;
    ai=answer.toLowerCase()

    if(ai==word){
        if(answerTurn=="player1"){
            score_1=score_1+1;
            document.getElementById("score_1").innerHTML=score_1;
    }
    else{
        score_2=score_2+1;
        document.getElementById("score_2").innerHTML=score_2;
    }
    }
if(questionTurn=="player1"){
    questionTurn="player2";
    document.getElementById("player_Q").innerHTML="Question Turn :"+ player2_name
}
else{
    questionTurn="player1";
    document.getElementById("player_Q").innerHTML="Question Turn :"+ player1_name
}
if(answerTurn=="player1"){
    answerTurn="player2";
    document.getElementById("player_A").innerHTML="Answer Turn :"+ player2_name
}
else{
    answerTurn="player1";
    document.getElementById("player_A").innerHTML="Answer Turn :"+ player1_name
}
document.getElementById("output").innerHTML=""
}