///console.log("Connected");

// for button toggling

function toggling(id){

    allForms=document.getElementsByClassName('forms');
        //console.log(allForms);
        for( forms of allForms){
            //console.log(forms);
            forms.style.display='none';
        }
     document.getElementById(id).style.display='block';
     //console.log(dis);
}


// selectedDisplayButton

function selectedBtn(id){
    allBtn=document.getElementsByClassName('btnclass');
    //document.getElementById('id').classList.add('border-gray-200');
            for(Btn of allBtn){
                //console.log(Btn);
                Btn.classList.remove('border[#0874f2]','bg-[#0874f20d]');
                Btn.classList.add('border-gray-200');
            }
            document.getElementById(id).classList.remove('border-gray-200');
            document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]');

}

///for AccountNumber Function

function ac(id){
    
    
    const tns=document.getElementById(id).value;
    //console.log(tns);
    if(tns.length<11||isNaN(tns)){
        alert("Incorrect A/C Number");
        return;
    }
}


// for Amount Function

function amount(id){
    const tAC=document.getElementById(id).value;
    //console.log(tAC);
    return convrtAC=parseInt(tAC);
}

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
            //selectedBtn(cash_out);
            //console.log("Cashout Button Connected");
            // document.getElementById('csh_out').style.display='block';
            // document.getElementById('ad_money').style.display='none';
            // document.getElementById('snd_money').style.display='none';
            // document.getElementById('bonus').style.display='none';
            // document.getElementById('payBill').style.display='none';
            // allForms=document.getElementsByClassName('forms');
            // //console.log(allForms);
            // for( forms of allForms){
            //     //console.log(forms);
            //     forms.style.display='none';
            // }
            // document.getElementById('csh_out').style.display='Block'
            // allBtn=document.getElementsByClassName('btnclass');
            // for(Btn of allBtn){
            //     //console.log(Btn);
            //     Btn.classList.remove('border[#0874f2]','bg-[#0874f20d]');
            // }
            // document.getElementById('cash_out').classList.remove('border-gray-200');
            // document.getElementById('cash_out').classList.add('border-[#0874f2]','bg-[#0874f20d]');
            toggling("csh_out");
            selectedBtn('cash_out');
        });

        document.getElementById('mny')
        .addEventListener('click',function(){
            //console.log("Cashout Button Connected");
            // document.getElementById('ad_money').style.display='block';
            // document.getElementById('csh_out').style.display='none';
            // document.getElementById('snd_money').style.display='none';
            // document.getElementById('bonus').style.display='none';
            // document.getElementById('payBill').style.display='none';
            toggling('ad_money');
            selectedBtn('mny');
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

            //Tranfer Money

            document.getElementById("transferMoney")
                .addEventListener('click',function(){
                    // document.getElementById('ad_money').style.display='none';
                    // document.getElementById('csh_out').style.display='none';
                    // document.getElementById('snd_money').style.display='block';
                    // document.getElementById('bonus').style.display='none';
                    // document.getElementById('payBill').style.display='none';
                    toggling('snd_money');
                    selectedBtn('transferMoney');
                    document.getElementById('TBtn')
                        .addEventListener('click',function(){
                            ac('TAccountNumber');
                            kp=amount('Tamount');
                            //console.log(kp);
                            
                            totalTaka=document.getElementById('total').innerText;
                            //console.log(totalTaka);
                            convertTotalTaka=parseInt(totalTaka);

                    WPin=document.getElementById('Tpin').value;
                            //console.log(WPin);
                        if(WPin!=='123'){
                            alert("please Enter Your Correct Pin");
                            document.getElementById('TAccountNumber').value='';
                            document.getElementById('Tamount').value='';
                            document.getElementById('Tpin').value="";
                            return;
                        }
                    if(convertTotalTaka>=kp){
                        convertTotalTaka-=kp;
                        document.getElementById('total').innerText=convertTotalTaka;
                        document.getElementById('TAccountNumber').value='';
                        document.getElementById('Tamount').value='';
                        document.getElementById('Tpin').value="";


                    }
                    else{
                        alert("Insufficient Balance. Please check your Balance First");
                        document.getElementById('TAccountNumber').value='';
                        document.getElementById('Tamount').value='';
                        document.getElementById('Tpin').value="";
                    }

                    });
                });

            ///Get Bonus
            document.getElementById('GetBonus')
                .addEventListener('click',function(){
                    // document.getElementById('bonus').style.display='Block';
                    // document.getElementById('ad_money').style.display='none';
                    // document.getElementById('csh_out').style.display='none';
                    // document.getElementById('snd_money').style.display='none';
                    // document.getElementById('payBill').style.display='none';
                    toggling('bonus');
                    selectedBtn('GetBonus');
                    document.getElementById('bonusBtn')
                        .addEventListener('click',function(){
                            //kp=ac(inpCupons);
                            cupons=document.getElementById('inpCupons').value;
                            convrtcupons=parseInt(cupons);
                            //console.log(convrtcupons);
                            if(isNaN(cupons)||cupons==''){
                                alert("Please Enter your Coupons Only Number");
                                return;
                            }
                            convrtcupons/=100;
                            //console.log(convrtcupons);
                            totalTaka=document.getElementById('total').innerText;
                            convertTotalTaka=parseInt(totalTaka);
                            //console.log(totalTaka);
                            sub=convertTotalTaka*convrtcupons;
                            convertTotalTaka+=sub;
                            document.getElementById('total').innerText=convertTotalTaka;
                            document.getElementById('inpCupons').value='';
                        });
                });

            ///Pay Bill
            document.getElementById('Bill')
                .addEventListener('click',function(){
                    // document.getElementById('bonus').style.display='none';
                    // document.getElementById('ad_money').style.display='none';
                    // document.getElementById('csh_out').style.display='none';
                    // document.getElementById('snd_money').style.display='none';
                    // document.getElementById('payBill').style.display='block';
                    toggling('payBill');
                    selectedBtn('Bill');
                    document.getElementById('BillButton')
                        .addEventListener('click',function(){
                            ac('BillAc_Number');
                            kp=amount('BillAdd_money');
                            //console.log(kp);
                            
                            totalTaka=document.getElementById('total').innerText;
                            //console.log(totalTaka);
                            convertTotalTaka=parseInt(totalTaka);

                    WPin=document.getElementById('BillAdd_for_Pin').value;
                            //console.log(WPin);
                        if(WPin!=='123'){
                            alert("please Enter Your Correct Pin");
                            document.getElementById('BillAc_Number').value='';
                            document.getElementById('BillAdd_money').value='';
                            document.getElementById('BillAdd_for_Pin').value="";
                            return;
                        }
                    if(convertTotalTaka>=kp){
                        convertTotalTaka-=kp;
                        document.getElementById('total').innerText=convertTotalTaka;
                        document.getElementById('BillAc_Number').value='';
                        document.getElementById('BillAdd_money').value='';
                        document.getElementById('BillAdd_for_Pin').value="";


                    }
                    else{
                        alert("Insufficient Balance. Please check your Balance First");
                        document.getElementById('BillAc_Number').value='';
                        document.getElementById('BillAdd_money').value='';
                        document.getElementById('BillAdd_for_Pin').value="";
                    }
                    });
                    
                });