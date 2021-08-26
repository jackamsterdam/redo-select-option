//TODO onchange how did theey all do that 
//TODO read window.location hreff free codecamp and try it with modules to see if works.
// The break statement is not required if a return statement precedes it.



let select = document.querySelector('#fruit')
let quantityBox = document.querySelector('.quantity-box')
let inputAnswer = document.querySelector('#answer')

function calculate() {
    console.log('you clicked a button')
    console.log(select.value)

    let price = 0;
    switch (select.value) {
        case 'smithApples':
            price = 9.90
            break;
        case 'pinkLadyApples':
            console.log(19.90)
            price = 19.90
            break;
        case 'hermanApples':
            price = 14.90
            break;
        case 'bananas':
            price = 6.50
            break;
        case 'watermelon':
            price = 4.90
            break;
        case 'mango':
            price = 24.90
            break;
        default:
            console.log('none')
    }

    pq()

    function pq() {
        console.log('inputanswer', inputAnswer)
        let quantity = +quantityBox.value
        console.log(quantity)


        inputAnswer.value = quantity * price
        console.log(inputAnswer.value)

    }
}