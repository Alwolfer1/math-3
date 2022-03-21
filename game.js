function send(){
    number1=document.getElementById("N1").value;
    number2=document.getElementById("N2").value;
    actualAns=parseInt(number1)*parseInt(number2);

    question="<h4>" + number1 +"X" + number2 + "</h4>";
    input="<br>Answer : <input type='text' id='answer'>";
    button="<br><br><button class='btn btn-info' onclick='check()>Check</button>'"
    row = question + input + button;

    document.getElementById("output").innerHTML= row;

}
