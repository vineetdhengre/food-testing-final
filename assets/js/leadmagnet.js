// this form is for leadmagnets of top 5
 

$(document).ready(function () {
    $("#form_leadmagnet").on("submit", function (e) {
    e.preventDefault();
 
    });

});

function LeadCatch () {
    if(validLead()===false)
    {

        var name = $("#pdfname").val();
        var email = $("#pdfemail").val();
        var mobile = $("#pdfphone").val();
        var LEAD_SOURCE_ID = $("#LEAD_MAGNET_ID").val();
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
            url: "crm.equinoxlab.com/api/Lead_Management.svc/Insert_Lead",
            data: jsondata,
            async: false,
            processData: false,
            success: function (data) {
                //console.log(data);
                window.location.replace("../../deadly-organism-thankyou.html");
            },
            contentType: "application/json",
            dataType: "json",
        });
    }
}



// console.log("this is foodtesting working");

    function validLead(){
    var Name = document.LeadEnquiryForm.pdfname.value;
    var Email = document.LeadEnquiryForm.pdfemail.value;
    var Contact = document.LeadEnquiryForm.pdfphone.value;

    // console.log(name, email,  contact);

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = true;

    // Validate name field
    if(Name == ''){
        document.getElementById('nameErr').innerHTML = "Please enter a name";
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(Name) === false) {
            document.getElementById('nameErr').innerHTML = "Please enter a valid name";
        } else {
            document.getElementById('nameErr').innerHTML = "";
            nameErr = false;
        }
    }

    
    
    // Validate email address
    if(Email == "") {
        document.getElementById('emailErr').innerHTML = "Please enter your email address";
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(Email) === false) {
            document.getElementById('emailErr').innerHTML = "Please enter a valid email address" 
        } else{
            document.getElementById('emailErr').innerHTML = "";
            emailErr = false;
        }
    }


    // Validate mobile number
    if(Contact == "") {
        document.getElementById('mobileErr').innerHTML = "Enter your number";
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(Contact) === false) {
            document.getElementById('mobileErr').innerHTML = "Please enter a valid 10 digit number";
        } else {
            document.getElementById('mobileErr').innerHTML = "";
            mobileErr = false;
        }
    }


    // Checking all fields
    if((nameErr || emailErr || mobileErr) === false) {
        return false;
    } 
    // else { 
    //     window.location.href="deadly-organism-thankyou.html "
    // }
}

