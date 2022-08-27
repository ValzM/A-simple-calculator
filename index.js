const screen = document.getElementById("calculator");
const button = document.querySelectorAll(".button");
const arrayOfCalculator = [1,2,3,4,5,6,7,8,9,0,"+","-","/","*","."];

function displayNumber(number){
    arrayOfCalculator.forEach(element => {
        if (number == element){
            screen.value += number;
        };
    });
};

function deleteElement(){
    screen.value = screen.value.slice(0,-1);
}


function resultDisplay(){
    screen.value = eval(screen.value);
}
button.forEach( element => {element.addEventListener('click', function (){
    if (element.innerHTML == 'C'){
        deleteElement()
    };
    
    if (element.innerHTML == '='){
        resultDisplay();
    };

    if (element.innerHTML == 'AC'){
        screen.value = '';
    };
    displayNumber(element.innerHTML);

} )});

screen.addEventListener('keydown', keyElement => {
    if (keyElement.key == 'Enter'){
        resultDisplay();
    }
})