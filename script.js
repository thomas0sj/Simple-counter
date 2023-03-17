//Set initial count
let count = 0;

let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

/*
btns.forEach(function(item){ //calls every item
    console.log(item); //shows all three buttons
})
*/

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        if(styles.contains('reset')){
            count = 0;
        }
        if(styles.contains('increase')){
            count++;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count == 0){
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})