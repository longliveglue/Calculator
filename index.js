// Task 1. Tidy up the UI 
// Task 2. Create an undo button to go back through calculations.


//Sets a variable for value1 and value2. i.e the first thing that
//should be typed is the first number i.e value1 + value2.
let value1 = "";
let value2 = "";
let sum = 0;
let opPress = false;
let opPlus = false;
let opMinus = false;
let opMulti = false;
let opDivide = false;
let equalsCount = 0;

// This creates a Jquery listener for all items with the .button class.
// when they are clicked their text is loaded into a var called whatWasclicked.
$(".button").on("click", function () {
  let whatWasClickedText = $(this).text();
  let whatWasClickedId = $(this).attr("id");
  //The below calls a function that sends the id of the item that was clicked along with the text.
  //this allows the type of button that was clicked to be sorted into one of four catergories.
  theOpBranch(whatWasClickedId, whatWasClickedText);
});

//This FUNCTION! looks at the id attribute of the item that is clicked. The buttons have been given one for four designations.
//number, operator, clear and equals. T
theOpBranch = (theId, theText) => {
  console.log(theId + " " + theText);

  //!!!! look at the logic of the equals count portion. I don't know if this is how i will achieve it.
  //ultimately when we have a situation where we have a value 1 and operator and a value 2 and equals is pressed that if an operator is 
  //pressed again it will take the result of the previous sum and put it into value 1 to allow further math.
  if (equalsCount > 0) {
    value1 = "";
    value2 = "";
    opPress = false;
    opPlus = false;
    opMinus = false;
    opMulti = false;
    opDivide = false;
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
  }

  //This bit is seeing if the id of the button was pressed was a number and the state of the operator buttons i.e has +, -, * been pressed.
  // in this case if they haven't the values that are pressed are sent to value1.
  else if (theId === "number" && opPress === false) {
    value1 = value1 + theText;
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
  }


  //This part of the code deals with the clear button. If the clear button is pressed all the operators are set to false.
  //Value 1 and value 2 are set back to nothing.
  else if (theId === "clear") {
    opPress = false;
    opPlus = false;
    opMinus = false;
    opMulti = false;
    opDivide = false;
    value1 = "";
    value2 = "";
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
    $("#valueoperator").text("");
    $("#valueequals").text("");
    console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
  }

  //This part of the code is dealing with if an operator has been pressed. 
  else if (theId === "operator") {
    console.log("operator was clicked")
    if (theText === "-") {
      opPress = true;
      opPlus = false;
      opMinus = true;
      opMulti = false;
      opDivide = false;
      $("#valueoperator").text("-");
      console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
    }
    else if (theText === "+") {
      opPress = true;
      opPlus = true;
      opMinus = false;
      opMulti = false;
      opDivide = false;
      $("#valueoperator").text("+");
      console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
    }
    else if (theText === "/") {
      opPress = true;
      opPlus = false;
      opMinus = false;
      opMulti = false;
      opDivide = true;
      $("#valueoperator").text("/");
      console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
    }

    else if (theText === "x") {
      opPress = true;
      opPlus = false;
      opMinus = false;
      opMulti = true;
      opDivide = false;
      $("#valueoperator").text("*");
      console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
    }
  }

  //This part is dealing with the portion after value1 has been typed in and an operator has been selected soo 200 + 
  else if (theId === "number" && opPress === true) {
    value2 = value2 + theText;
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
    console.log("opPress = " + opPress + " opPlus = " + opPlus + " opMinus = " + opMinus + " opMulti = " + opMulti + " opDivide = " + opDivide)
  }


  //This bit is dealing with the equals so we have a value1 stored, an operator selected and a value2 stored.

  else if (theId === "equals" && opPress === true) {

    //This bit takes the string value of value1 and value2 converts it to an floating point number. 
    // it does this by taking a the string which is contained in say value1 and uses the parseFloat(value1)
    // we could also use parseInt(value1) if we wished to use a whole number.
    let num1 = parseFloat(value1);
    let num2 = parseFloat(value2);

    if (opPlus === true){
      sum = num1 + num2;
      
      $("#valueone").text(sum);
      $("#valueequals").text("=");
      $("#valuetwo").text("");
      $("#valueoperator").text("");
      value1 = sum;
      value2 = "";
      opPress = false;
      opPlus = false;
      opMinus = false;
      opMulti = false;
      opDivide = false;
    }

    else if ( opMinus === true){
      sum = num1 - num2;
            $("#valueone").text(sum);
      $("#valueoperator").text("=");
      $("#valuetwo").text("");
      value1 = sum;
      value2 = "";
      opPress = false;
      opPlus = false;
      opMinus = false;
      opMulti = false;
      opDivide = false;
    }
    
    else if ( opMulti === true){
      sum = num1 * num2;
      
      $("#valueone").text(sum);
      $("#valueoperator").text("=");
      $("#valuetwo").text("");
      value1 = sum;
      value2 = "";
      opPress = false;
      opPlus = false;
      opMinus = false;
      opMulti = false;
      opDivide = false;
    }

    else if ( opDivide === true){
      sum = num1 / num2;
      $("#valueone").text(sum);
      $("#valueoperator").text("=");
      $("#valuetwo").text("");
      value1 = sum;
      value2 = "";
      opPress = false;
      opPlus = false;
      opMinus = false;
      opMulti = false;
      opDivide = false;
    }

  }

 //this bit will delete the last digit off value1. It knows to delete it off value 1 if opPress = false
  else if (theId === "delete" && opPress === false) {
    value1 = value1.slice(0, -1);
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
  }

  //this bit will delete the last digit off value2. It knows to delete it off value 2 if opPress = true
  else if (theId === "delete" && opPress === true) {
    value2 = value2.slice(0, -1);
    $("#valueone").text(value1);
    $("#valuetwo").text(value2);
  }



};



