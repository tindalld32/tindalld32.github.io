function runTheNumbers() {
    // Input - two numbers, operator, and answer
    let num1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let num2 = parseFloat(document.getElementById('num2').value);
    let answer = parseFloat(document.getElementById('answer').value);
        
    let trueAnswer = 0;
    
    let message = ""
    // Processing - calculate the answer, compare computed answer to user's answer
    switch (operator) {
      case '+':
        trueAnswer = num1 + num2;
        break;
      case '-':
        trueAnswer = num1 - num2;
        break;
      case '*':
        trueAnswer = num1 * num2;
        break;
      case '/':
        trueAnswer = num1 / num2;
        break;
      default:
        message = "Please enter a valid operator."
    }
        
    if (trueAnswer == answer) {
      message = "Correct! 🏆";
      } else if (trueAnswer != answer) {
      message = "Incorrect 😢";
    }        

    // Output - state if answer is the same (correct) or not (incorrect)
    document.getElementById('output').innerHTML = message;
  }