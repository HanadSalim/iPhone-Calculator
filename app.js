//DOM Elements
const numEl = document.getElementsByClassName("number");
const funcEl = document.getElementsByClassName("function");
const operEl = document.getElementsByClassName("operator");
const decEl = document.querySelector(".decimal");
const screen = document.querySelector(".screen");
var point=false, previous_value=null, currentValue=null, numberClicked=null, operatorClick=false, previousOperation=null, currentOperation=null;
//Number EventListener
for(let i=0; i<numEl.length; i++){
    const num = numEl[i];
    num.addEventListener('click', () => {
        numclick(num.innerHTML);
    })
}

const numclick = (e) => {
    numberClicked=true;
    //If there's a 0 or operator previously clicked then resest number on screen
    if(screen.innerHTML=="0"||operatorClick==true){
        screen.innerHTML=e;
        operatorClick=false;
    }else{
        screen.innerHTML = screen.innerHTML + e ;
    }
}

//Decimal EventListener
decEl.addEventListener('click', () => {
    if (point == false)
    {
        screen.innerHTML=screen.innerHTML+".";
        point = true;
    }
})

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
        operator = null;
        previous_value = null;
        point = false;
    }
    if(func.innerHTML=="%"){
        screen.innerHTML = screen.innerHTML / 100;
    }
}

//Operator EventListener
for(let i=0; i<operEl.length; i++){
    const operator = operEl[i];
    operator.addEventListener('click', () => {
        operator_Clicked(operator);
    })
}

const operator_Clicked = (e) => {
    if(numberClicked==true){
        operatorClick=true;
        currentOperation=e.innerHTML;
        numberClicked=false;
        currentValue=parseFloat(screen.innerHTML);
        if(previous_value==null){
            previous_value=currentValue;
            previousOperation=currentOperation;
        }else{
            if(currentOperation!=previousOperation){
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
                updateScreen();
            }else{
                if(currentOperation=="+"){
                    add(currentValue);
                }
                if(currentOperation=="-"){
                    minus(currentValue);
                }
                if(currentOperation=="×"){
                    multiply(currentValue);
                }
                if(currentOperation=="÷"){
                    divide(currentValue);
                }
                updateScreen();
            }
        }
    }
}

const updateScreen = () => {
    screen.innerHTML=previous_value;
    if(currentOperation=="="){
        return
    }else{
        previousOperation=currentOperation;
    }
}

const add = (e) =>{
    previous_value=previous_value+e;
}
const minus = (e) =>{
    previous_value=previous_value-e;
}
const multiply = (e) =>{
    previous_value=previous_value*e;
}
const divide = (e) =>{
    previous_value=previous_value/e;
}
    





