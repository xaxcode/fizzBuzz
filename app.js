
$(document).ready(function() {
	$("#promptbutton").click(function fizzbuzz(cool) {
   
    var number=prompt("enter a number");
    if (number == NaN){
    	prompt("That is not a number. Enter a number.");
    
    } else {
    
    for (i = 1; i <=number; i++) 
    	{
	if (i%15==0)
		console.log("fizzbuzz");

    else if (i%5==0) 
		console.log("buzz");

    else if (i%3==0) 
		console.log("fizz");

	else 
		console.log(i);
		}
}
})
});


