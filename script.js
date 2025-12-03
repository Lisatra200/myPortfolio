const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// Function to activate one button and deactivate the other
function activateButton(activeBtn, inactiveBtn) {
    activeBtn.style.backgroundColor = 'darkblue';
    activeBtn.style.color = 'white';

    inactiveBtn.style.backgroundColor = 'grey';
    inactiveBtn.style.color = 'white';
}

// Add click event listeners
btn1.addEventListener('click', () => activateButton(btn1, btn2));
btn2.addEventListener('click', () => activateButton(btn2, btn1));
