//DOM Elements
const numEl = document.getElementsByClassName("number");
const funcEl = document.getElementsByClassName("function");

const additionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtract");
const mulitplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");
const equalsEl = document.querySelector(".equals");

const decEl = document.querySelector(".decimal");
const screen = document.querySelector(".screen");


//Variables
var numberClicked=null, operatorClicked=false, point=false, previousValue=null, currentValue=null, previousOperation=null, currentOperation=null, equalsClicked=null;


//Number EventListener
for(let i=0; i<numEl.length; i++){
    numEl[i].addEventListener('click', () => {numclick(numEl[i].innerHTML);})
}

const numclick = (e) => {
    numberClicked=true;
    //If there's a 0 or operator previously clicked then resest number on screen
    if(point==true){
        screen.innerHTML = screen.innerHTML + e ;
        point=false;
        operatorClicked=false;
    }
    else if(parseFloat(screen.innerHTML)==0||operatorClicked==true){
        screen.innerHTML=e;
        operatorClicked=false;
    }else{
        screen.innerHTML = screen.innerHTML + e ;
    }
}


//Decimal EventListener
decEl.addEventListener('click', () => {
    if (point == false){
        if(operatorClicked==true){
            screen.innerHTML="0.";
        }else{
            screen.innerHTML=screen.innerHTML+"."; 
        }
        point=true;
        }}
)


//Function event listener
for(let i=0; i<funcEl.length; i++){
    const func = funcEl[i];
    func.addEventListener('click', () => {
        funcclick(func);
    })
}

const funcclick = (func) => {
    if(func.innerHTML=="AC"){
        screen.innerHTML=0;
        operatorClicked=null;
        previousOperation=null;
        previousValue=null;
        currentValue=null;
        point=false;
        currentOperation=null;
        numberClicked=null;
        equalsClicked=null;
    }
    if(func.innerHTML=="%"){
        screen.innerHTML = screen.innerHTML / 100;
    }
}


//Addition eventListener 
additionEl.addEventListener('click', () => {
    if(numberClicked==true){
        operatorClicked=true;
        currentOperation="+";
        numberClicked=false;
        currentValue=parseFloat(screen.innerHTML);
        if(previousValue==null){
            previousValue=currentValue;
            previousOperation=currentOperation;
        }
        else if(equalsClicked==true){
            previousValue=currentValue;
            previousOperation=currentOperation;
            equalsClicked=false;
        }
        else{
            if(currentOperation==previousOperation){
                add(currentValue);
                updateScreen();
            }else{
                result();
                updateScreen();
            }       
        }
    }
})

//subtract eventListener 
subtractionEl.addEventListener('click', () => {
    if(numberClicked==true){
        operatorClicked=true;
        currentOperation="-";
        numberClicked=false;
        currentValue=parseFloat(screen.innerHTML);
        if(previousValue==null){
            previousValue=currentValue;
            previousOperation=currentOperation;
        }
        else if(equalsClicked==true){
            previousValue=currentValue;
            previousOperation=currentOperation;
            equalsClicked=false;
        }
        else{
            if(currentOperation==previousOperation){
                minus(currentValue);
                updateScreen();
            }else{
                result();
                updateScreen();
            }       
        }
    }
})

//muliply eventListener 
mulitplyEl.addEventListener('click', () => {
    if(numberClicked==true){
        operatorClicked=true;
        currentOperation="×";
        numberClicked=false;
        currentValue=parseFloat(screen.innerHTML);
        if(previousValue==null){
            previousValue=currentValue;
            previousOperation=currentOperation;
        }
        else if(equalsClicked==true){
            previousValue=currentValue;
            previousOperation=currentOperation;
            equalsClicked=false;
        }
        else{
            if(currentOperation==previousOperation){
                multiply(currentValue);
                updateScreen();
            }else{
                result();
                updateScreen();
            }       
        }
    }
})

//division eventListener 
divideEl.addEventListener('click', () => {
    if(numberClicked==true){
        operatorClicked=true;
        currentOperation="÷";
        numberClicked=false;
        currentValue=parseFloat(screen.innerHTML);
        if(previousValue==null){
            previousValue=currentValue;
            previousOperation=currentOperation;
        }
        else if(equalsClicked==true){
            previousValue=currentValue;
            previousOperation=currentOperation;
            equalsClicked=false;
        }
        else{
            if(currentOperation==previousOperation){
                divide(currentValue);
                updateScreen();
            }else{
                result();
                updateScreen();
            }       
        }
    }
})

//Equals eventlistener
equalsEl.addEventListener('click', () => {
    equalsClicked=true; 
    currentValue=parseFloat(screen.innerHTML);   
    result();
    updateScreen();
})
const updateScreen = () => {
    screen.innerHTML=previousValue;
    previousOperation=currentOperation;
}
const result=()=>{
    if(previousOperation=="+"){
        add(currentValue);
    }
    if(previousOperation=="-"){
        minus(currentValue);
    }
    if(previousOperation=="×"){
        multiply(currentValue);
    }
    if(previousOperation=="÷"){
        divide(currentValue);
    }
}

//Operation methods
const add = (e) =>{
    previousValue=previousValue+e;
}
const minus = (e) =>{
    previousValue=previousValue-e;
}
const multiply = (e) =>{
    previousValue=previousValue*e;
}
const divide = (e) =>{
    previousValue=previousValue/e;
}