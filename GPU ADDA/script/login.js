//linked at login.html
$(function(){
    let namenode=$("#name")
    let email=$("#email")
    let mob=$("#mobile")
    let pass=$("#password")
    let cpass=$("#cpassword")
    let spass=$("#showp")
    let form=$("#sub")
    let res=$("#reset")

    //span
    let nspan=$("#sp1")
    let espan=$("#sp2")
    let mspan=$("#sp3")
    let pspan=$("#sp4")
    let cspan=$("#sp5")

    namenode.blur(function(){
        validate1()
    })
    email.blur(function(){
        validate2()
    })
    mob.blur(function(){
        validate3()
    })
    pass.blur(function(){
        validate4()
    })
    cpass.blur(function(){
        validate5()
    })
    spass.click(function(){
        validate6()
    })
    res.click(function(){
        namenode.value("")
        email.value("")
        mob.value("")
        pass.value("")
        cpass.value("")
    })
    form.submit(function(){
        return onSubmit()
    })
    //name
    function validate1(){
        nspan.html("")
        let fname=namenode.val();
        if(fname==""){
            nspan.html("this field is req")
            namenode.css("border","3px solid red")
            return false
        }
        else if(fname.length<3){
            nspan.html("length should be more than 3")
            namenode.css("border","3px solid red")
            return false
        }
        else{
            namenode.css("border","3px solid green")
            return true
        }
    }
    //email
    function validate2(){
        espan.html("")
        let emailid=email.val();
        if(emailid==""){
            espan.html("this field is req")
            email.css("border","3px solid red")
            return false
        }
        else if(!emailid.includes("@")){
            espan.html("Not valid email")
            email.css("border","3px solid red")
            return false
        }
        else{
            email.css("border","3px solid green")
            return true
        }
    }
    //password
    function validate4(){
        pspan.html("")
        let password=pass.val();
        let regexp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
        if(password==""){
            pspan.html("this field is req")
            pass.css("border","3px solid red")
            return false
        }
        else if(regexp.test(password)!=true){
            pspan.html("Password should be alphanumeric")
            pass.css("border","3px solid red")
            return false
        }
        else if(password.length<5||password.length>8){
            pspan.html("Password should be min 5 or max 8")
            return false
        }
        else{
            pass.css("border","3px solid green")
            return true
        }
    }
    //mobile no
    function validate3(){
        mspan.html("")
        let mobile=mob.val();
        if(mobile==""){
            mspan.html("this field is req")
            mob.css("border","3px solid red")
            return false
        }
        else if(isNaN(mobile)){
            mspan.html("Chars not allowed")
            mob.css("border","3px solid red")
            return false
        }
        else if(mobile.length!=10){
            mspan.html("only 10 digits allowed")
            mob.css("border","3px solid red")
            return false
        }
        else{
            mob.css("border","3px solid green")
            return true
        }
    }
    //confirm password
    function validate5(){
        cspan.html("")
        let password=pass.val();
        let cp=cpass.val();
        if(cp==""){
            cspan.html("this field is req")
            cpass.css("border","3px solid red")
            return false
        }
        else if(cp!=password){
            cspan.html("Password doesn't match")
            cpass.css("border","3px solid red")
            return false
        }
        else{
            cpass.css("border","3px solid green")
            return true
        }
    }
    //show password
    function validate6(){   
        if(spass.prop('checked')){
            pass.attr("type","text")
        }
        else{
            pass.attr("type","password")
        }
    }
    function onSubmit(){
        let v1=validate1()
        let v2=validate2()
        let v3=validate3()
        let v4=validate4()
        let v5=validate5()
        return (v1&&v2&&v3&&v4&&v5)
    }

})