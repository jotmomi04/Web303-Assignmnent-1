/*
	WEB 303 Assignment 1 - jQuery
	{Manjot Singh}
*/
$(document).ready(function(){
	$("label").keyup(function(){
	const Ysalary = $("#yearly-salary").val();
	const P = $("#percent").val();
	const spendingAmount = (Ysalary * P) / 100;
	$("#amount").text("$" + spendingAmount.toFixed(2));
  });
 
});
