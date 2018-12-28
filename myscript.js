console.log("PAWELSKI PROGRAMISTA 15K SOON");

$(document).ready(function(){
    var currentNumber = '';
    var previousNumber = '';
    var operation;

    $("#button-C").click(function(){
        $("#screen").empty().append("0");
        currentNumber = '';
        previousNumber = '';
        equals();
    })

    $("#button-previous").click(function(){
        if(currentNumber.length > 1)
            currentNumber = currentNumber.substr(0, currentNumber.length-1);
        else
            currentNumber = 0;
        $("#screen").empty().append(currentNumber);
    })

    $(".digit-clickable").click(function(){
        currentNumber+=$(this).text();
        $("#screen").empty().append(currentNumber);
    })

    $(".action-clickable").click(function(){
        equals();
        $("#screen").empty().append("0");
        previousNumber = currentNumber;
        currentNumber = '';
        operation = $(this).text();
    })
    function equals(){
        $(".equals").click(function(){
            switch(operation){
                case "+":
                    currentNumber = parseInt(previousNumber) + parseInt(currentNumber);
                    break;
                case "-":
                    currentNumber = parseInt(previousNumber) - parseInt(currentNumber);
                    break;
                case "/":
                    currentNumber = parseInt(previousNumber) / parseInt(currentNumber);            
                    break;
                case "x":
                    currentNumber = parseInt(previousNumber) * parseInt(currentNumber);
            }
            $("#screen").empty().append(currentNumber);
            $(".equals").off();
        })
    }
    equals();
});