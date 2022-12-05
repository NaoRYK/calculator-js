const buttons = document.querySelector("button");
const btn0 = document.querySelector("#number0");
const btn1 = document.querySelector("#number1");
const btn2 = document.querySelector("#number2");
const btn3 = document.querySelector("#number3");
const btn4 = document.querySelector("#number4");
const btn5 = document.querySelector("#number5");
const btn6 = document.querySelector("#number6");
const btn7 = document.querySelector("#number7");
const btn8 = document.querySelector("#number8");
const btn9 = document.querySelector("#number9");


const btnDiv = document.getElementById("symbol/")
const btnSum= document.getElementById("symbol+")
const btnRest= document.getElementById("symbol-")
const btnMult = document.getElementById("symbolx")
const btnClear = document.getElementById("symbolCl")
const btnEquals = document.getElementById("symbol=")


const screen = document.querySelector(".screen");
const value = document.querySelector(".value");
const value_2 = document.querySelector(".value2");
const resultValue = document.querySelector(".result");
const wordResult = document.querySelector(".wordResult");


var numbersList = [];

let sumador = "";

let value1 = "";
let modificationResult = "";
let symbolValues = "";
let value2 = "";
let translate = -10;
let activeSymbol = false



btn0.addEventListener("click", OnClickButton0)
function OnClickButton0(){
    const buttonValue = btn0.innerText;
    numbersList.push(Number(buttonValue));

    if(value1.length >= 6 ){
        value1 = value1;
        if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }



}


btn1.addEventListener("click", ()=>{
    const buttonValue = btn1.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }

})

btn2.addEventListener("click", ()=>{
    const buttonValue = btn2.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
    // value.innerText = numbersList;

})

btn3.addEventListener("click", ()=>{
    const buttonValue = btn3.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
    // value.innerText = numbersList;

})

btn4.addEventListener("click", ()=>{
    const buttonValue = btn4.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
    // value.innerText = numbersList;

})

btn5.addEventListener("click", ()=>{
    const buttonValue = btn5.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
    // value.innerText = numbersList;

})

btn6.addEventListener("click", ()=>{
    const buttonValue = btn6.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }

})

btn7.addEventListener("click", ()=>{
    const buttonValue = btn7.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
        if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
        // value.innerText = numbersList;
})

btn8.addEventListener("click", ()=>{
    const buttonValue = btn8.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
        // value.innerText = numbersList;
})

btn9.addEventListener("click", ()=>{
    const buttonValue = btn9.innerText;
    numbersList.push(Number(buttonValue));
    if(value1.length >= 6){
        value1 = value1;
                if(activeSymbol == true){
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            };
        };
    }
    else{
        if(activeSymbol == true){

            console.log("Se activo")
            if(value2.length >= 6){
                value2 = value2;
            }else{
                value2 = value2 +String(buttonValue);
                value_2.innerText = value2;
                value_2.style.transform = "translateX(" + String(translate) +"px)";
                translate = translate - 10;
                console.log(value1, "+", value2);
            }
        }else{
            value1 = value1 + String(buttonValue);
            value.innerText = value1;

            value.style.transform = "translateX(" + String(translate) +"px)";
            translate = translate - 10;
        }

    }
        // value.innerText = numbersList;
})

btnSum.addEventListener("click", ()=>{
    const symbolButton = btnSum.innerText;
    console.log(symbolButton);
    if(symbolValues.length == 1){
        symbolValues = symbolValues;
    }else{
        translate = 0;
        value.innerText = value.innerText + "+";
        symbolValues = symbolButton;
        activeSymbol = true;
        value.style.left = "200px";
        value.style.bottom = "35px";
    
        translate = translate - 10;
    };

});

btnRest.addEventListener("click", ()=>{
    const symbolButton = btnRest.innerText;
    if(symbolValues.length == 1){
        symbolValues = symbolValues;
    }else{
        translate = 0;
        value.innerText = value.innerText + "-";
        symbolValues = symbolButton;
        activeSymbol = true;
        value.style.left = "200px";
        value.style.bottom = "35px";
    
        translate = translate - 10;
    };
});
btnMult.addEventListener("click", ()=>{
    const symbolButton = btnMult.innerText;
    if(symbolValues.length == 1){
        symbolValues = symbolValues;
    }else{
        translate = 0;
        value.innerText = value.innerText + "x";
        symbolValues = symbolButton;
        activeSymbol = true;
        value.style.left = "200px";
        value.style.bottom = "35px";
    
        translate = translate - 10;
    };
});
btnDiv.addEventListener("click", ()=>{
    const symbolButton = btnDiv.innerText;
    if(symbolValues.length == 1){
        symbolValues = symbolValues;
    }else{
        translate = 0;
        value.innerText = value.innerText + "/";
        symbolValues = symbolButton;
        activeSymbol = true;
        value.style.left = "200px";
        value.style.bottom = "35px";
    
        translate = translate - 10;
    };
});
btnEquals.addEventListener("click", ()=>{
    
    switch(symbolValues){
        case "+":
            suma();
            break;
        case "-":
            resta();
            break;
        case "x":
            multiplication();
            break;
        case "/":
            division();
            break;
    }
    function suma(){    
        let result = Number(value1) + Number(value2);
        value.style.bottom = "65px";
        value.style.left ="240px"
        value.style.fontSize = "20px";
        value_2.style.bottom = "45px";
        value_2.style.left ="240px"
        value_2.style.fontSize = "20px";
        modificationResult = String(result);
        resultValue.innerText = modificationResult;
        wordResult.innerText = "Resultado: ";
    };
    function resta(){    
        let result = Number(value1) - Number(value2);
        value.style.bottom = "65px";
        value.style.left ="240px"
        value.style.fontSize = "20px";
        value_2.style.bottom = "45px";
        value_2.style.left ="240px"
        value_2.style.fontSize = "20px";
        modificationResult = String(result);
        resultValue.innerText = modificationResult;
        wordResult.innerText = "Resultado: ";
    };
    function multiplication(){    
        let result = Number(value1) * Number(value2);
        value.style.bottom = "65px";
        value.style.left ="240px"
        value.style.fontSize = "20px";
        value_2.style.bottom = "45px";
        value_2.style.left ="240px"
        value_2.style.fontSize = "20px";
        modificationResult = String(result);
        resultValue.innerText = modificationResult;
        wordResult.innerText = "Resultado: ";
    };
    function division(){    
        let result = Number(value1) / Number(value2);
        value.style.bottom = "65px";
        value.style.left ="240px"
        value.style.fontSize = "20px";
        value_2.style.bottom = "45px";
        value_2.style.left ="240px"
        value_2.style.fontSize = "20px";
        modificationResult = String(result);
        resultValue.innerText = modificationResult;
        wordResult.innerText = "Resultado: ";
    };

})
btnClear.addEventListener("click", ()=>{
    value.innerText = "";
    value_2.innerText = "";
    value1 = "";
    value2 = "";
    symbolValues = "";
    wordResult.innerText ="";
    modificationResult = "";
    resultValue.innerText ="";
    translate = -10;
    activeSymbol = false

    // decoration
    value.style.bottom = "10px";
    value.style.left ="220px"
    value.style.fontSize = "30px";
    value_2.style.bottom = "10px";
    value_2.style.left ="220px"
    value_2.style.fontSize = "30px";
    
})
