document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let deleteBtn = document.querySelector('.btn-delete');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
    
            if (value !== undefined) {
                screen.value += value;
            } else if (e.target.innerText === '=') {
                try {
                    let answer = eval(screen.value);
                    screen.value = answer;
                } catch (error) {
                    console.error('Error during evaluation:', error);
                    screen.value = 'Invalid Expression';
                }
            }
        });
    });    

    clear.addEventListener('click', function (z) {
        screen.value = '';
    });

    deleteBtn.addEventListener('click', function (y) {
        screen.value = screen.value.slice(0, -1);
    });
});



