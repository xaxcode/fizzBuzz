
$(document).ready(function() {
	$("#promptbutton").click(function fizzbuzz(cool) {
   
    var string_number=prompt("enter a number");
    console.log('string_number=%o',string_number);
    var number=+string_number;
    console.log('number=%o',number);

   // if (isNaN(string_number)) {
   // 	alert("That is not a number. Try again.");
  //  } else {
    
    for (i = 1; i <=string_number; i++) 
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

})
});


