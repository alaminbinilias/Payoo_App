///console.log("Connected");
document.getElementById('home_btn')
    .addEventListener('click',function(event){
        //console.log("Connected");
        event.preventDefault();
        //console.log("Home Page Connected");
        
        ///A/c number value
        const AcNumber=document.getElementById('ac_Number').value;
        //console.log(AcNumber.length);
        let arr=[];
        let flag=0;
        let corrct=0;
        for(let i of AcNumber){
            arr.push(i);
            let convertNum=parseInt(i);
            //console.log(convertNum);
            if(isNaN(convertNum)){
                flag=1;
                //console.log("Flag NUMBER");
            }
        }
        if(arr.length===11 && flag===0){
            corrct=1;
        }
        //console.log(corrct);


        //Pin Section
        let correct_Pin=0;
        const APin=document.getElementById('Add_for_Pin').value;
        //console.log(APin);
        if(APin==='123'){
            correct_Pin=1;
        }
        //console.log(correct_Pin);

        if(corrct==1&&correct_Pin==1){
            money=document.getElementById('add_money').value;
            //console.log(money);
            convertMoney=parseInt(money);
            totalTaka=document.getElementById('total').innerText;
            //console.log(totalTaka);
            convertTotalTaka=parseInt(totalTaka);
            convertTotalTaka+=convertMoney;
            document.getElementById('total').innerText=convertTotalTaka;
            //console.log(totalTaka);

            document.getElementById('add_money').value='';
            document.getElementById('Add_for_Pin').value='';
            document.getElementById('ac_Number').value='';
        }
        else{
            alert("Enter Your Correct Pin or A/C Number");
        }
    });



    ////CashOut option

    document.getElementById('cash_out')
        .addEventListener('click',function(){
            //console.log("Cashout Button Connected");
            document.getElementById('csh_out').style.display='block';
            document.getElementById('ad_money').style.display='none';
        });

        document.getElementById('mny')
        .addEventListener('click',function(){
            //console.log("Cashout Button Connected");
            document.getElementById('ad_money').style.display='block';
            document.getElementById('csh_out').style.display='none';
        });


        ///withdraw
        document.getElementById('withDrawBtn')
            .addEventListener('click',function(event){
                event.preventDefault();
                //console.log("WithDraw Button Connected");
                
                //Account number collect
                accunt_number=document.getElementById("withDrawAc").value;
                //console.log(accunt_number);

                if(accunt_number.length<11||isNaN(accunt_number)){
                    alert("Incorrect A/C Number");
                    return;
                }

                withDrawAmount=document.getElementById('withAmount').value;
                //console.log(withDrawAmount);

                totalTaka=document.getElementById('total').innerText;
                //console.log(totalTaka);

                //pin_Number_check
                WPin=document.getElementById('withdrawPin').value;
                //console.log(WPin);
                if(WPin!=='123'){
                    alert("please Enter Your Correct Pin");
                    document.getElementById("withDrawAc").value="";
                    document.getElementById('withAmount').value="";
                    document.getElementById('withdrawPin').value="";
                    return;
                }

                convertTotalTaka=parseInt(totalTaka);
                if(convertTotalTaka>=withDrawAmount){
                    convertTotalTaka-=withDrawAmount;
                    document.getElementById('total').innerText=convertTotalTaka;
                    document.getElementById("withDrawAc").value="";
                    document.getElementById('withAmount').value="";
                    document.getElementById('withdrawPin').value="";

                }
                else{
                    alert("Insufficient Balance. Please check your Balance First");
                    document.getElementById("withDrawAc").value="";
                    document.getElementById('withAmount').value="";
                    document.getElementById('withdrawPin').value="";
                }
            });