// function myScript(){
//     document.write("value submitted");
// }
// myScript();

// function myScript(){
// var animal=["cat","dog","fox"];
// var x=animal.length;
// // document.write(x);
// for(var i=0;i<x;i++)
// {
//     document.write(animal[i]+"<br>");
// }
// }



function validate(){

    debugger;
    var adminemail="anusreesajeev99@gmail.com";
    var adminpassword="Anusree123";
    var email=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;
    var reg=/\S+@\S+\.\S+/;
    var result=reg.test(email);
    if(email.value==""){
        alert("must have email");
        document.form1.email.focus();
        return false;
    }
    if(password.value==""){
        alert("must have password");
        document.form1.password.focus();
        return false;
    }
    if(result==false){
        alert("invalid email");
        return false
    }
    if(password.length<8){
        alert("must have 8 length");
        document.form1.password.focus();
        return false;

    }
    if(password.length>15){
        alert("not more than 15");
        document.form1.password.focus();
        return false;

    }
    if(email==adminemail&&password==adminpassword){
        alert("success");
        
    }
    else{
        alert("incorrect username or password");
    }
 
    
   }
