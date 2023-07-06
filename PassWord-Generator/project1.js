const inputSlider = document.querySelector("[data-lengthslider]");
const lengthDisplay = document.querySelector("[datalength-no]");
const passworddisplay = document.querySelector("[data-passwordDisplay]");

const copybtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");

const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");

const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generatebutton");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");

const symbuls = '~`!@#$%^&*()_+={}[];:"<,.>?/';

let password="";
let passwordLength = 10;
let checkCount=0;
handleslider();

setIndicator("#ccc");

function handleslider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
 
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndmInteger(min,max){
        return Math.floor(Math.random()*(max-min))+min;
}

function getRndmNumber(){
            
       return getRndmInteger(0,9);
}
function getLowerCase(){
    return String.fromCharCode(getRndmInteger(97,123));
}

function getUpperCase(){
    return String.fromCharCode(getRndmInteger(65,91));
}
  
function getSymbols(){
    const randNum=getRndmInteger(0,symbuls.length);
    return symbuls.charAt(randNum);
}
 
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper =true;
    if(lowercaseCheck.checked) hasLower =true;
    if(numberCheck.checked) hasNum =true;
    if(symbolCheck.checked) hasSym = true;

    if(hasLower && hasUpper && (hasNum || hasSym) && passwordLength>=8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym)&& passwordLength>=6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
    
}

async function copyContent(){
    try{

        
        await navigator.clipboard.writeText(passworddisplay.value);
        copyMsg.innerText="copied";
    }
    catch(e){
          copyMsg.innerText ="failed";
    }

        copyMsg.classList.add("active");

        setTimeout(()=>{
            copyMsg.classList.remove("active");

        },2000);
}
function handleCheckBoxChange(){
    checkCount =0 ;
    allCheckbox.forEach((checkbox) =>{
        if(checkbox.checked)
            checkCount++;
    });
     
    if(passwordLength< checkCount) {
        passwordLength = checkCount;
        handleslider();
    }

}
allCheckbox.forEach( (checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);

})
inputSlider.addEventListener('input', (e) =>{
        passwordLength = e.target.value;
        handleslider();
})
copybtn.addEventListener('click',()=>{
    if(passworddisplay.value)
       copyContent();
})

function shufflepassword(array){

    for( let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;
}



generateBtn.addEventListener('click',()=>{
     



      if(checkCount==0) 
      return;

      if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleslider();
      }
      // now set new psswrd
      password="";
      
      // put stuff mentioned by checkboxes

    //   if(uppercaseCheck.checked) {
    //      password += getUpperCase();
    //   }

    //   if(lowercaseCheck.checked) {
    //     password += getLowerCase();
    //  }

    //  if(numberCheck.checked) {
    //     password += getRndmNumber();
    //  }

    //  if(symbolCheck.checked) {
    //     password += getSymbols();
    //  }

    let funcArr =[];

    if(uppercaseCheck.checked)
      funcArr.push(getUpperCase );

      
    if(lowercaseCheck.checked)
    funcArr.push(getLowerCase );

    
    if(numberCheck.checked)
      funcArr.push(getRndmNumber );

      
    if(symbolCheck.checked)
    funcArr.push(getSymbols );


    // compulsory addition

    for(let i=0 ; i<funcArr.length; i++){
        password += funcArr[i]();
    }

    // remaining addition

    for(let i=0; i<passwordLength-funcArr.length; i++){
        let randIndex = getRndmInteger(0,funcArr.length);
        password+=funcArr[randIndex]();
    }

    // shuffle psswrd

    password = shufflepassword(Array.from(password));

    // show in UI
    passworddisplay.value = password;

    // strength

    calcStrength();


});



