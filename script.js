/*
	WEB 303 Assignment 1 - jQuery
	{Manjot Singh}
*/
function calcAmount() {
	const $salary = $("#yearly-salary").val();
	const $percent = $("#percent").val();
	const $amountTOSpend = ($salary * $percent) / 100;
	$("#amount").text("$" + $amountTOSpend.toFixed(2));
  }
  
  //keyup instead of change updates whenever a key is pressed.
  $salary.keyup(calcAmount);
$percent.keyup(calcAmount);

