const form= document.querySelector("form");
const result= document.querySelector("h2");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const income= parseFloat(document.getElementById("income").value.trim());
    let tax=0;
    if(income<=250000){
        tax=0;
    }
    else if(income>250000 && income<=500000){
        tax= (income-250000)*0.05;
    }   
    else if(income>500000 && income<=1000000){
        // income-500000 is taxed at 20% + (250000 is taxed at 5% or + 12500)
        tax= (250000*0.05) + (income-500000)*0.2;
    }
    else{
        tax= (250000*0.05) + (500000*0.2) + (income-1000000)*0.3;
    }
    result.textContent= `Your income tax is Rs. ${tax.toFixed(2)}`;
    form.reset();
});