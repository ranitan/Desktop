function validate() {
    var username = document.f1.username.value;
    var email = document.f1.email.value;
    var phonenum = document.f1.phonenum.value;
    var comments = document.f1.comments.value;
    var status = false;

    if (username.length < 1)
     {
        document.write("please enter username with maximum 10 words");
        status = false;
    }
    elseif(email == null)
    {
        document.write("please enter the email address");
        status = false;
    }
    elseif(phonenum.length == null)
    {
        document.write("please enter the phone number");
        status = false;
    }
    elseif(comments == null)
    {
        document.write("please give your valuable comments");
        status = false;
    } 
    elseif(username,email,phonenum,comments!=null)
    {
        document.write("THANK YOU FOR VISITING OUR WEBSITE!..");
    }
    return status;
}  