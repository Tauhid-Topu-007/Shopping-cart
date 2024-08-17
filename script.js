document.getElementById("case-increase").addEventListener('click',function(){
    handleProductChange('case',true);
});

document.getElementById("case-decrese").addEventListener('click',function(){
    handleProductChange('case',false);
});


function handleProductChange(product,isIncrease){
    const productInput=document.getElementById(product+'-count');
    const productCount= parseInt(productInput.value);
    // const caseNewCount= caseCount-1;
    let productNewCount= productCount;
    if(isIncrease==true){
        productNewCount= productCount+1;
    }
    if(isIncrease==false && productCount > 0){
        productNewCount=productCount-1;
    }
    productInput.value=productNewCount;
    // const caseTotal= productNewCount*59;
    
    let productTotal=0;
    if(product=='phone'){
        productTotal=productNewCount*1219;
    }
    if(product=='case'){
        productTotal=productNewCount*59;
    }
    
    document.getElementById(product+'-total').innerHTML='$' + productTotal;
    calculateTotal();
}


function calculateTotal(){
    // const phoneInput=document.getElementById('phone-count');
    // const phoneCount=parseInt(phoneInput.value);

    // const caseInput=document.getElementById('case-count');
    // const caseCount=parseInt(caseInput.value);

    const caseCount= getInputValue('case');
    const phoneCount= getInputValue('phone');

    const totalPrice= phoneCount*1219 + caseCount*59;

    document.getElementById('total-price').innerText='$'+ totalPrice;

    const tax=Math.round(totalPrice*0.1);
    document.getElementById('tax-amount').innerText='$'+tax;

    const grandTotal=totalPrice+tax;
    document.getElementById('grand-total').innerText='$'+grandTotal;
}

function getInputValue(product){
    const productInput=document.getElementById(product+'-count');
    const productCount=parseInt(productInput.value);

    return productCount;
}
// function handlePhoneChange(isIncrease){
//     const phoneInput=document.getElementById('phone-count');
//     const phoneCount= parseInt(phoneInput.value);
//     // const caseNewCount= caseCount-1;
//     let phoneNewCount= phoneCount;
//     if(isIncrease==true){
//         phoneNewCount= phoneCount+1;
//     }
//     if(isIncrease==false && phoneCount > 0){
//         phoneNewCount=phoneCount-1;
//     }
//     phoneInput.value=phoneNewCount;
//     const phoneTotal= phoneNewCount*1219;
//     document.getElementById('phone-total').innerHTML='$' + phoneTotal;
// }




// document.getElementById('case-decrese').addEventListener('click',function(){
//     const caseInput= document.getElementById('case-count');
//     const caseCount=caseInput.value;
//     const caseNewCount= caseCount-1;
//     caseInput.value= caseNewCount;
//     const caseTotal= caseNewCount*59;
//     document.getElementById('case-total').innerHTML='$'+caseTotal;
// });