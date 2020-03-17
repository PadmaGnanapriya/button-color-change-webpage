var all_buttons= document.getElementsByTagName('button');
var copyAllButton=[];
for(let i=0; i<all_buttons.length; i++){
    copyAllButton.push(all_buttons[i].classList[i]);
}

console.log(copyAllButton);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value==='red'){
        buttonRed();
    }
    else if(buttonThingy.value==='green'){
        buttonGreen();
    }
    else if(buttonThingy.value==='reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value==='random'){
        randomColors();
    }
}

function buttonRed(){
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function randomColors(){
    let choices=['btn-primary','btn-danger','btn-success','btn-warning'];

    for(let i=0;i<all_buttons.length;i++){
        let randomNumber=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}