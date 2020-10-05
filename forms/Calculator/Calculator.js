/* algorithm - create two input controls, a label to instruct user to enter two variables, two buttons: one for addition, one for multiplication.
*/

let firstNum = ""
let secondNum = ""
btnAdd.onclick=function(){
  firstNum = inptNum1.value
  secondNum = inptNum2.value
  lblAnswer.value = parseInt(firstNum) + parseInt(secondNum)
}
btnMult.onclick=function(){
  firstNum = inptNum1.value
  secondNum = inptNum2.value
  lblAnswer.value = parseInt(firstNum) * parseInt(secondNum)
}