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
        }
        else{
            alert("Enter Your Correct Pin or A/C Number");
        }
    });