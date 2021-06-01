// Access all radio buttons:
var qa1 = document.getElementsByName("q1");
var qa2 = document.getElementsByName("q2");
var qa3 = document.getElementsByName("q3");
var qa4 = document.getElementsByName("q4");
var qa5 = document.getElementsByName("q5");
var qa6 = document.getElementsByName("q6");
var qa7 = document.getElementsByName("q7");
var qa8 = document.getElementsByName("q8");
var qa9 = document.getElementsByName("q9");
var qa10 = document.getElementsByName("q10");

var nabut = document.getElementById("qSubmitBut");


//Question 1
var q1c = new XMLHttpRequest();
q1c.open('GET', 'admin/db/q1.txt');
q1c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[0].innerHTML="Q1. "+q1c.responseText;
}
q1c.send();

var a1_1c = new XMLHttpRequest();
a1_1c.open('GET', 'admin/db/a1_1.txt');
a1_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[0].innerHTML=a1_1c.responseText;
}
a1_1c.send();

var a1_2c = new XMLHttpRequest();
a1_2c.open('GET', 'admin/db/a1_2.txt');
a1_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[1].innerHTML=a1_2c.responseText;
}
a1_2c.send();

var a1_3c = new XMLHttpRequest();
a1_3c.open('GET', 'admin/db/a1_3.txt');
a1_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[2].innerHTML=a1_3c.responseText;
}
a1_3c.send();

var a1_4c = new XMLHttpRequest();
a1_4c.open('GET', 'admin/db/a1_4.txt');
a1_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[3].innerHTML=a1_4c.responseText;
}
a1_4c.send();
//answer judgement
var a1c = new XMLHttpRequest();
a1c.open('GET', 'admin/db/a1.txt');
a1c.onreadystatechange = function() {
    var a1 = a1c.responseText;
    
    if (a1 == "A"){
        qa1[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa1[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a1 == "B"){
        qa1[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa1[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a1 == "C"){
        qa1[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa1[2].className)[1].style.backgroundColor= "lightGreen";
            }
        });
    } else if (a1 == "D"){
        qa1[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa1[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a1c.send();

//Question 2

var q2c = new XMLHttpRequest();
q2c.open('GET', 'admin/db/q2.txt');
q2c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[1].innerHTML="Q2. "+q2c.responseText;
}
q2c.send();

var a2_1c = new XMLHttpRequest();
a2_1c.open('GET', 'admin/db/a2_1.txt');
a2_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[4].innerHTML=a2_1c.responseText;
}
a2_1c.send();

var a2_2c = new XMLHttpRequest();
a2_2c.open('GET', 'admin/db/a2_2.txt');
a2_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[5].innerHTML=a2_2c.responseText;
}
a2_2c.send();

var a2_3c = new XMLHttpRequest();
a2_3c.open('GET', 'admin/db/a2_3.txt');
a2_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[6].innerHTML=a2_3c.responseText;
}
a2_3c.send();

var a2_4c = new XMLHttpRequest();
a2_4c.open('GET', 'admin/db/a2_4.txt');
a2_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[7].innerHTML=a2_4c.responseText;
}
a2_4c.send();
//answer judgement
var a2c = new XMLHttpRequest();
a2c.open('GET', 'admin/db/a2.txt');
a2c.onreadystatechange = function() {
    var a2 = a2c.responseText;
    
    if (a2 == "A"){
        qa2[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa2[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a2 == "B"){
        qa2[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa2[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a2 == "C"){
        qa2[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa2[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a2 == "D"){
        qa2[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa2[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a2c.send();


//Question 3

var q3c = new XMLHttpRequest();
q3c.open('GET', 'admin/db/q3.txt');
q3c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[2].innerHTML="Q3. "+q3c.responseText;
}
q3c.send();

var a3_1c = new XMLHttpRequest();
a3_1c.open('GET', 'admin/db/a3_1.txt');
a3_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[8].innerHTML=a3_1c.responseText;
}
a3_1c.send();

var a3_2c = new XMLHttpRequest();
a3_2c.open('GET', 'admin/db/a3_2.txt');
a3_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[9].innerHTML=a3_2c.responseText;
}
a3_2c.send();

var a3_3c = new XMLHttpRequest();
a3_3c.open('GET', 'admin/db/a3_3.txt');
a3_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[10].innerHTML=a3_3c.responseText;
}
a3_3c.send();

var a3_4c = new XMLHttpRequest();
a3_4c.open('GET', 'admin/db/a3_4.txt');
a3_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[11].innerHTML=a3_4c.responseText;
}
a3_4c.send();
//answer judgement
var a3c = new XMLHttpRequest();
a3c.open('GET', 'admin/db/a3.txt');
a3c.onreadystatechange = function() {
    var a3 = a3c.responseText;
    
    if (a3 == "A"){
        qa3[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa3[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a3 == "B"){
        qa3[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa3[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a3 == "C"){
        qa3[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa3[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a3 == "D"){
        qa3[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa3[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a3c.send();


//Question 4

var q4c = new XMLHttpRequest();
q4c.open('GET', 'admin/db/q4.txt');
q4c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[3].innerHTML="Q4. "+q4c.responseText;
}
q4c.send();

var a4_1c = new XMLHttpRequest();
a4_1c.open('GET', 'admin/db/a4_1.txt');
a4_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[12].innerHTML=a4_1c.responseText;
}
a4_1c.send();

var a4_2c = new XMLHttpRequest();
a4_2c.open('GET', 'admin/db/a4_2.txt');
a4_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[13].innerHTML=a4_2c.responseText;
}
a4_2c.send();

var a4_3c = new XMLHttpRequest();
a4_3c.open('GET', 'admin/db/a4_3.txt');
a4_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[14].innerHTML=a4_3c.responseText;
}
a4_3c.send();

var a4_4c = new XMLHttpRequest();
a4_4c.open('GET', 'admin/db/a4_4.txt');
a4_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[15].innerHTML=a4_4c.responseText;
}
a4_4c.send();
//answer judgement
var a4c = new XMLHttpRequest();
a4c.open('GET', 'admin/db/a4.txt');
a4c.onreadystatechange = function() {
    var a4 = a4c.responseText;
    
    if (a4 == "A"){
        qa4[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa4[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a4 == "B"){
        qa4[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa4[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a4 == "C"){
        qa4[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa4[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a4 == "D"){
        qa4[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa4[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a4c.send();


//Question 5

var q5c = new XMLHttpRequest();
q5c.open('GET', 'admin/db/q5.txt');
q5c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[4].innerHTML="Q5. "+q5c.responseText;
}
q5c.send();

var a5_1c = new XMLHttpRequest();
a5_1c.open('GET', 'admin/db/a5_1.txt');
a5_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[16].innerHTML=a5_1c.responseText;
}
a5_1c.send();

var a5_2c = new XMLHttpRequest();
a5_2c.open('GET', 'admin/db/a5_2.txt');
a5_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[17].innerHTML=a5_2c.responseText;
}
a5_2c.send();

var a5_3c = new XMLHttpRequest();
a5_3c.open('GET', 'admin/db/a5_3.txt');
a5_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[18].innerHTML=a5_3c.responseText;
}
a5_3c.send();

var a5_4c = new XMLHttpRequest();
a5_4c.open('GET', 'admin/db/a5_4.txt');
a5_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[19].innerHTML=a5_4c.responseText;
}
a5_4c.send();
//answer judgement
var a5c = new XMLHttpRequest();
a5c.open('GET', 'admin/db/a5.txt');
a5c.onreadystatechange = function() {
    var a5 = a5c.responseText;
    
    if (a5 == "A"){
        qa5[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa5[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a5 == "B"){
        qa5[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa5[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a5 == "C"){
        qa5[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa5[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a5 == "D"){
        qa5[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa5[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a5c.send();


//Question 6

var q6c = new XMLHttpRequest();
q6c.open('GET', 'admin/db/q6.txt');
q6c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[5].innerHTML="Q6. "+q6c.responseText;
}
q6c.send();

var a6_1c = new XMLHttpRequest();
a6_1c.open('GET', 'admin/db/a6_1.txt');
a6_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[20].innerHTML=a6_1c.responseText;
}
a6_1c.send();

var a6_2c = new XMLHttpRequest();
a6_2c.open('GET', 'admin/db/a6_2.txt');
a6_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[21].innerHTML=a6_2c.responseText;
}
a6_2c.send();

var a6_3c = new XMLHttpRequest();
a6_3c.open('GET', 'admin/db/a6_3.txt');
a6_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[22].innerHTML=a6_3c.responseText;
}
a6_3c.send();

var a6_4c = new XMLHttpRequest();
a6_4c.open('GET', 'admin/db/a6_4.txt');
a6_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[23].innerHTML=a6_4c.responseText;
}
a6_4c.send();
//answer judgement
var a6c = new XMLHttpRequest();
a6c.open('GET', 'admin/db/a6.txt');
a6c.onreadystatechange = function() {
    var a6 = a6c.responseText;
    
    if (a6 == "A"){
        qa6[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa6[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a6 == "B"){
        qa6[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa6[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a6 == "C"){
        qa6[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa6[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a6 == "D"){
        qa6[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa6[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a6c.send();


//Question 7

var q7c = new XMLHttpRequest();
q7c.open('GET', 'admin/db/q7.txt');
q7c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[6].innerHTML="Q7. "+q7c.responseText;
}
q7c.send();

var a7_1c = new XMLHttpRequest();
a7_1c.open('GET', 'admin/db/a7_1.txt');
a7_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[24].innerHTML=a7_1c.responseText;
}
a7_1c.send();

var a7_2c = new XMLHttpRequest();
a7_2c.open('GET', 'admin/db/a7_2.txt');
a7_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[25].innerHTML=a7_2c.responseText;
}
a7_2c.send();

var a7_3c = new XMLHttpRequest();
a7_3c.open('GET', 'admin/db/a7_3.txt');
a7_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[26].innerHTML=a7_3c.responseText;
}
a7_3c.send();

var a7_4c = new XMLHttpRequest();
a7_4c.open('GET', 'admin/db/a7_4.txt');
a7_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[27].innerHTML=a7_4c.responseText;
}
a7_4c.send();
//answer judgement
var a7c = new XMLHttpRequest();
a7c.open('GET', 'admin/db/a7.txt');
a7c.onreadystatechange = function() {
    var a7 = a7c.responseText;
    
    if (a7 == "A"){
        qa7[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa7[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a7 == "B"){
        qa7[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa7[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a7 == "C"){
        qa7[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa7[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a7 == "D"){
        qa7[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa7[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a7c.send();


//Question 8

var q8c = new XMLHttpRequest();
q8c.open('GET', 'admin/db/q8.txt');
q8c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[7].innerHTML="Q8. "+q8c.responseText;
}
q8c.send();

var a8_1c = new XMLHttpRequest();
a8_1c.open('GET', 'admin/db/a8_1.txt');
a8_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[28].innerHTML=a8_1c.responseText;
}
a8_1c.send();

var a8_2c = new XMLHttpRequest();
a8_2c.open('GET', 'admin/db/a8_2.txt');
a8_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[29].innerHTML=a8_2c.responseText;
}
a8_2c.send();

var a8_3c = new XMLHttpRequest();
a8_3c.open('GET', 'admin/db/a8_3.txt');
a8_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[30].innerHTML=a8_3c.responseText;
}
a8_3c.send();

var a8_4c = new XMLHttpRequest();
a8_4c.open('GET', 'admin/db/a8_4.txt');
a8_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[31].innerHTML=a8_4c.responseText;
}
a8_4c.send();
//answer judgement
var a8c = new XMLHttpRequest();
a8c.open('GET', 'admin/db/a8.txt');
a8c.onreadystatechange = function() {
    var a8 = a8c.responseText;
    
    if (a8 == "A"){
        qa8[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa8[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a8 == "B"){
        qa8[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa8[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a8 == "C"){
        qa8[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa8[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a8 == "D"){
        qa8[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa8[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a8c.send();


//Question 9

var q9c = new XMLHttpRequest();
q9c.open('GET', 'admin/db/q9.txt');
q9c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[8].innerHTML="Q9. "+q9c.responseText;
}
q9c.send();

var a9_1c = new XMLHttpRequest();
a9_1c.open('GET', 'admin/db/a9_1.txt');
a9_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[32].innerHTML=a9_1c.responseText;
}
a9_1c.send();

var a9_2c = new XMLHttpRequest();
a9_2c.open('GET', 'admin/db/a9_2.txt');
a9_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[33].innerHTML=a9_2c.responseText;
}
a9_2c.send();

var a9_3c = new XMLHttpRequest();
a9_3c.open('GET', 'admin/db/a9_3.txt');
a9_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[34].innerHTML=a9_3c.responseText;
}
a9_3c.send();

var a9_4c = new XMLHttpRequest();
a9_4c.open('GET', 'admin/db/a9_4.txt');
a9_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[35].innerHTML=a9_4c.responseText;
}
a9_4c.send();
//answer judgement
var a9c = new XMLHttpRequest();
a9c.open('GET', 'admin/db/a9.txt');
a9c.onreadystatechange = function() {
    var a9 = a9c.responseText;
    
    if (a9 == "A"){
        qa9[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa9[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a9 == "B"){
        qa9[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa9[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a9 == "C"){
        qa9[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa9[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a9 == "D"){
        qa9[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa9[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a9c.send();


//Question 10

var q10c = new XMLHttpRequest();
q10c.open('GET', 'admin/db/q10.txt');
q10c.onreadystatechange = function() {
    document.getElementsByClassName("qp")[9].innerHTML="Q10. "+q10c.responseText;
}
q10c.send();

var a10_1c = new XMLHttpRequest();
a10_1c.open('GET', 'admin/db/a10_1.txt');
a10_1c.onreadystatechange = function() {
    document.getElementsByTagName("label")[36].innerHTML=a10_1c.responseText;
}
a10_1c.send();

var a10_2c = new XMLHttpRequest();
a10_2c.open('GET', 'admin/db/a10_2.txt');
a10_2c.onreadystatechange = function() {
    document.getElementsByTagName("label")[37].innerHTML=a10_2c.responseText;
}
a10_2c.send();

var a10_3c = new XMLHttpRequest();
a10_3c.open('GET', 'admin/db/a10_3.txt');
a10_3c.onreadystatechange = function() {
    document.getElementsByTagName("label")[38].innerHTML=a10_3c.responseText;
}
a10_3c.send();

var a10_4c = new XMLHttpRequest();
a10_4c.open('GET', 'admin/db/a10_4.txt');
a10_4c.onreadystatechange = function() {
    document.getElementsByTagName("label")[39].innerHTML=a10_4c.responseText;
}
a10_4c.send();
//answer judgement
var a10c = new XMLHttpRequest();
a10c.open('GET', 'admin/db/a10.txt');
a10c.onreadystatechange = function() {
    var a10 = a10c.responseText;
    
    if (a10 == "A"){
        qa10[0].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa10[0].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a10 == "B"){
        qa10[1].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa10[1].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if(a10 == "C"){
        qa10[2].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa10[2].className)[1].style.backgroundColor="lightGreen";
            }
        });
    } else if (a10 == "D"){
        qa10[3].value= "right";
        nabut.addEventListener("click", function(){
            var check1 = document.querySelector('input[name = "q1"]:checked');
            var check2 = document.querySelector('input[name = "q2"]:checked');
            var check3 = document.querySelector('input[name = "q3"]:checked');
            var check4 = document.querySelector('input[name = "q4"]:checked');
            var check5 = document.querySelector('input[name = "q5"]:checked');
            var check6 = document.querySelector('input[name = "q6"]:checked');
            var check7 = document.querySelector('input[name = "q7"]:checked');
            var check8 = document.querySelector('input[name = "q8"]:checked');
            var check9 = document.querySelector('input[name = "q9"]:checked');
            var check10 = document.querySelector('input[name = "q10"]:checked');
    
            if (check1 != null && check2 != null && check3 != null && check4 != null && check5 != null && check6 != null && check7 != null && check8 != null && check9 != null && check10 != null){
                document.getElementsByClassName(qa10[3].className)[1].style.backgroundColor="lightGreen";
            }
        });
    }
}
a10c.send();
// check the answer and give marks after submission:
function submit() {
    var check1 = document.querySelector('input[name = "q1"]:checked');
    var check2 = document.querySelector('input[name = "q2"]:checked');
    var check3 = document.querySelector('input[name = "q3"]:checked');
    var check4 = document.querySelector('input[name = "q4"]:checked');
    var check5 = document.querySelector('input[name = "q5"]:checked');
    var check6 = document.querySelector('input[name = "q6"]:checked');
    var check7 = document.querySelector('input[name = "q7"]:checked');
    var check8 = document.querySelector('input[name = "q8"]:checked');
    var check9 = document.querySelector('input[name = "q9"]:checked');
    var check10 = document.querySelector('input[name = "q10"]:checked');
    
    if (check1 === null || check2 === null || check3 === null || check4 === null || check5 === null || check6 === null || check7 === null || check8 === null || check9 === null || check10 === null) {
        swal("All Questions are Compulsory.", "Please attend all Questions.","warning");
        return;
    } else {
        swal({
            title: "Done",
            text: "You have successfully completed the Quiz. Tap the button below to see your result.",
            icon: "success",
            button: "Show Result",
        });
    }
    
    for (s=0; s<30; s++){
    document.getElementsByTagName("span")[s].style.display="inline";
    };
    for (i=0; i<40; i++){
    document.getElementsByTagName("input")[i].setAttribute("disabled","true");
    };
    
    check1.setAttribute("checked", "true");
    check2.setAttribute("checked", "true");
    check3.setAttribute("checked", "true");
    check4.setAttribute("checked", "true");
    check5.setAttribute("checked", "true");
    check6.setAttribute("checked", "true");
    check7.setAttribute("checked", "true");
    check8.setAttribute("checked", "true");
    check9.setAttribute("checked", "true");
    check10.setAttribute("checked", "true");
    
    if (check1.value === "right") {
        var tc1 = document.getElementById("cov1").innerHTML= 1;
    } else {
        document.getElementsByClassName(check1.className)[1].setAttribute("class", "wg");
        var tc1 = document.getElementById("cov1").innerHTML= 0;
    };
    if (check2.value === "right") {
        var tc2 = document.getElementById("cov2").innerHTML= 1;
    } else {
        document.getElementsByClassName(check2.className)[1].setAttribute("class", "wg");
        var tc2 = document.getElementById("cov2").innerHTML= 0;
    };
    if (check3.value === "right") {
        var tc3 = document.getElementById("cov3").innerHTML= 1;
    } else {
        document.getElementsByClassName(check3.className)[1].setAttribute("class", "wg");
        var tc3 = document.getElementById("cov3").innerHTML= 0;
    };
    if (check4.value === "right") {
        var tc4 = document.getElementById("cov4").innerHTML= 1;
    } else {
        document.getElementsByClassName(check4.className)[1].setAttribute("class", "wg");
        var tc4 = document.getElementById("cov4").innerHTML= 0;
    };
    if (check5.value === "right") {
        var tc5 = document.getElementById("cov5").innerHTML= 1;
    } else {
        document.getElementsByClassName(check5.className)[1].setAttribute("class", "wg");
        var tc5 = document.getElementById("cov5").innerHTML= 0;
    };
    if (check6.value === "right") {
        var tc6 = document.getElementById("cov6").innerHTML= 1;
    } else {
        document.getElementsByClassName(check6.className)[1].setAttribute("class", "wg");
        var tc6 = document.getElementById("cov6").innerHTML= 0;
    };
    if (check7.value === "right") {
        var tc7 = document.getElementById("cov7").innerHTML= 1;
    } else {
        document.getElementsByClassName(check7.className)[1].setAttribute("class", "wg");
        var tc7 = document.getElementById("cov7").innerHTML= 0;
    };
    if (check8.value === "right") {
        var tc8 = document.getElementById("cov8").innerHTML= 1;
    } else {
        document.getElementsByClassName(check8.className)[1].setAttribute("class", "wg");
        var tc8 = document.getElementById("cov8").innerHTML= 0;
    };
    if (check9.value === "right") {
        var tc9 = document.getElementById("cov9").innerHTML= 1;
    } else {
        document.getElementsByClassName(check9.className)[1].setAttribute("class", "wg");
        var tc9 = document.getElementById("cov9").innerHTML= 0;
    };
    if (check10.value === "right") {
        var tc10 = document.getElementById("cov10").innerHTML= 1;
    } else {
        document.getElementsByClassName(check10.className)[1].setAttribute("class", "wg");
        var tc10 = document.getElementById("cov10").innerHTML= 0;
    };
    window.location.href="#cov10";
    document.getElementById("qThead").innerHTML="Result:";
    document.getElementById("tc1").style.display="inline";
    document.getElementById("tc").style.display="inline";
    var ntcn = tc1+tc2+tc3+tc4+tc5+tc6+tc7+tc8+tc9+tc10;
    document.getElementById("tc").innerHTML=ntcn;
    document.getElementById("scoren").setAttribute("value", ntcn);
    document.getElementById("qSubmitBut").style.backgroundColor="#999";
    document.getElementById("qSubmitBut").removeAttribute("onclick");
    document.getElementById("sendScore").style.display="block";
};
function restrict() {
    swal({
        title: "!",
        title: "You can not change your score",
        text: "Click anywhere out of this box to proceed",
        icon: "error",
        buttons: false,
        });
};
var scx = new XMLHttpRequest();
scx.open('GET', 'admin/db/scr.txt');
scx.onreadystatechange = function() {
    document.getElementById("scoreT").innerHTML="<table>"+scx.responseText+"</table>";
}
scx.send();