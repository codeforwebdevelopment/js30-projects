
function validateHTMlform()
{
let form = document.StudenSignupForm;
if( form.textnames.value == "" )
{
alert( "Please provide First Name!" );
form.textnames.focus() ;
return;
}
if( form.lastnames.value == "" )
{
alert( "Please provide Last Name!" );
form.textnames.focus() ;
return;
}

if( form.fathername.value == "" )
{
alert( "Please provide your Father Name!" );
form.fathername.focus() ;
return;
}

if( form.paddress.value == "" )
{
alert( "Please provide your Postal Address!" );
form.paddress.focus() ;
return;
}
if( form.personaladdress.value == "" )
{
alert( "Please provide your Personal Address!" );
form.personaladdress.focus() ;
return;
}
if ( ( StudenSignupForm.sex[0].checked == false ) && ( StudenSignupForm.sex[1].checked == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
return false;
}
if( form.City.value == "-1" )
{
alert( "Please provide your City!" );
form.City.focus() ;
return;
}
if( form.Course.value == "-1" )
{
alert( "Please provide your Course!" );

return;
}
if( form.District.value == "-1" )
{
alert( "Please provide your Select District!" );

return;
}
if( form.State.value == "-1" )
{
alert( "Please provide your Select State!" );

return;
}
if( form.pincode.value == "" ||
isNaN( form.pincode.value) ||
form.pincode.value.length != 6 )
{
alert( "Please provide a pincode in the format ######." );
form.pincode.focus() ;
return;
}
var email = form.emailid.value;
atpos = email.indexOf("@");
dotpos = email.lastIndexOf(".");
if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
{
alert("Please enter correct email ID")
form.emailid.focus() ;
return;
}
if( form.dob.value == "" )
{
alert( "Please provide your DOB!" );
form.dob.focus() ;
return;
}
if( form.mobileno.value == "" ||
isNaN( form.mobileno.value) ||
form.mobileno.value.length != 10 )
{
alert( "Please provide a Mobile No in the format 123." );
form.mobileno.focus() ;
return;
}
return( true );
}