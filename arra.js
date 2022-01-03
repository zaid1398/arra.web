/**
 * Create an array using .push and etc.
 */

var arr =[];

var i = prompt("Enter 1st num:");
 i = parseInt(i);
 arr.push(i);
 i = prompt("Enter 2nd num:");
 arr.push(i);
 i= prompt("Enter 3rd num:");
 arr.push(i);
 if(arr[0]>arr[1] && arr[0]>arr[2])
	{
	alert("Max num is: " +arr[0]);
	}
	else if(arr[1]>arr[0] && arr[1]>arr[2])
	{
	alert("Max num is: " +arr[1]);
	}
	else
	{
	alert("Max numb is: " +arr[2]);
	}