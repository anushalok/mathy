function send() {
    Number1 = document.getElementById("Number1").value;
    Number2 = document.getElementById("Number2").value;

    question_number ="<h4>" + Number1 + "X" + Number2+"</h4>";
    input_box = "<br>Answer : <input type = 'text' id='iput_check_box'";
    check_button = "<br><br>button class='btn btn-info' onclick='check()'>";
    row = question_number + input_box + check-button;
    
    document.getElementById("Number1").value="";
    document.getElementById("Number2").value="";
}
