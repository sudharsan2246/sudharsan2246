function validate(){
// for name
       let name=document.getElementById("name").value;
       if(name==""){
              document.getElementById("error1").innerHTML="*Enter Your UserName*";
       }
       else{
              document.getElementById("error1").innerHTML=""
       }
// for mobilenumber
       var mobile=document.getElementById("mobilenumber").value;
       if(mobile.length==10){
              document.getElementById("error2").innerHTML=""
       }else{
              document.getElementById("error2").innerHTML="*Enter Your Mobile Number*"
       }
//for email
       var call=document.getElementById("email").value;
       var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!filter.test(call)){
              document.getElementById("error3").innerHTML="*Enter Valid Email*"
       }
       else{
              document.getElementById("error3").innerHTML=""
       }
// for password
       var pass=document.getElementById("password").value;
       var reg=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,15})/
       if(!reg.test(pass)){
              document.getElementById("error4").innerHTML="*Enter Valid Password*"
       }
       else{
              document.getElementById("error4").innerHTML=""
       }
 // for confirm password
       var pass1=document.getElementById("cpassword").value;
       var pass2=document.getElementById("password").value;
       if(pass1!==pass2){
              document.getElementById("error5").innerHTML="Password doesn't match"
       }
       else if(pass1==""){
              document.getElementById("error5").innerHTML="*Please enter password*"
       }
       else{
              document.getElementById("error51").innerHTML=""
       }
// for check box
       var box1=document.getElementById("box1");
       var box2=document.getElementById("box2");
       if(!box1.checked & !box2.checked){
              document.getElementById("error7").innerHTML="*please select any one*"
       }
       else if(box1.checked & box2.checked){
              document.getElementById("error7").innerHTML="*please select one*"
       }
       else if(box1.checked | !box2.checked){
              document.getElementById("error7").innerHTML=""
       }
       else if(!box1.checked | box2.checked){
              document.getElementById("error7").innerHTML="*Please Select Accepted"
       }
       else{
              
       }
//for radio button
       
       var rad1=document.getElementById("Location1");
       var rad2=document.getElementById("Location2");
       var rad3=document.getElementById("Location3");
       var rad4=document.getElementById("Location4");
      if(!rad1.checked &  !rad2.checked & !rad3.checked & !rad4.checked){
       document.getElementById("error6").innerHTML="*Please Select Any one*";
      }
      else{
      }
// date of birth validation

      var date=document.getElementById("date").value;
      if(date==""){
       document.getElementById("error8").innerHTML="*Please select DOB*"
      }


}


       
