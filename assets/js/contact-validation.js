// this form is for open form and also for nav bar contact form


$(document).ready(function () {
    $("#form_lead2").on("submit", function (e) {
    e.preventDefault();

    var name = $("#name1").val();
    var email = $("#email1").val();
    var mobile = $("#number1").val();
    var LEAD_SOURCE_ID = $("#LEAD_ID1").val();
    var data = {
        NAME: name,
        EMAIL: email,
        MOBILE: mobile,
        LEAD_SOURCE_ID: LEAD_SOURCE_ID,
    };

    var jsondata = JSON.stringify(data);

    // console.log(jsondata);

        $.ajax({
        type: "POST",
        url: "http://crm.equinoxlab.com/api/Lead_Management.svc/Insert_Lead",
        data: jsondata,
        async: false,
        processData: false,
        success: function (data) {
            // console.log(data.response);
            window.location.replace("../../thank-you.html");
        },
        contentType: "application/json",
        dataType: "json",
        });
    });
});


function Validate(){
    var Name = document.EnquiryForm2.name1.value;
    var Email = document.EnquiryForm2.email1.value;
    var Number = document.EnquiryForm2.number1.value;
    
    // console.log(Name, Email, Number);

    // Defining error variables with a default value
    var NameErr = EmailErr = NumberErr = true;

    // Validate name field
    if(Name == ''){
        document.getElementById('NameErr').innerHTML = "Please enter a name";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(Name) === false) {
            document.getElementById('NameErr').innerHTML = "Please enter a valid name";
        } else {
            document.getElementById('NameErr').innerHTML = "";
            NameErr = false;
        }
    }

    // Validate email address
    if(Email == "") {
        document.getElementById('EmailErr').innerHTML = "Please enter your email address";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(Email) === false) {
            document.getElementById('EmailErr').innerHTML = "Please enter a valid email address" 
        } else{
            document.getElementById('EmailErr').innerHTML = "";
            EmailErr = false;
        }
    }

    // Validate mobile number
    if(Number == "") {
        document.getElementById('NumberErr').innerHTML = "Enter your number";
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(Number) === false) {
            document.getElementById('NumberErr').innerHTML = "Please enter a valid 10 digit number";
        } else {
            document.getElementById('NumberErr').innerHTML = "";
            NumberErr = false;
        }
    }

    // Checking all fields
    if((NameErr || EmailErr || NumberErr)  == true) {
        return false;
    } else { 
        window.location.href="thank-you.html"
    }

}


