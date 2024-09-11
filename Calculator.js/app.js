let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '' //when we enter any button  each value append on this 

buttons.forEach(element => { // we pass element as a parameter in forEach loop 
    element.addEventListener('click',(b)=>{ // we pass b as a parameter in eventListener  
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0, string.length-1); // this substring inbuild function help to delete
            inputBox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string));
            inputBox.value = string;
        }
        else{
            string += b.target.innerText;
            inputBox.value = string;
        }
    })
})