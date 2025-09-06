//console.log('connected');

//none of borderLine
document.getElementById('pin_number').style.outline='none';
document.getElementById('mobile_number').style.outline='none';

//connected login_Form

document.getElementById('login_btn')
    .addEventListener('click',function(event){
        event.preventDefault();
        ///console.log("connected");


        const PhoneNumber=document.getElementById('mobile_number').value;
        const PinNumber=document.getElementById('pin_number').value;
        //console.log(typeof(PhoneNumber),typeof(PinNumber));
        //convert_phoneNum=parseInt(PhoneNumber);
        convert_PinNum=parseInt(PinNumber);
        //console.log(typeof(convert_phoneNum),typeof(convert_PinNum));

        //const phone_number&& pin_number
        const phone='01728481692';
        const pin=123;
        if(phone==PhoneNumber&&convert_PinNum===pin){
            window.location.href="./home.html"
        }
        else{
            alert("Please Enter Your Correct Credential");
            //console.log("Accept");
            document.getElementById('mobile_number').value="";
            document.getElementById('pin_number').value="";
            //PhoneNumber="";
            //PinNumber="";
        }
    });