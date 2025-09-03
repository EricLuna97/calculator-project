// Selects the calculator's screen element from the DOM
const screen = document.querySelector('.screen');
// Selects all button elements in the document
const buttons = document.querySelectorAll('button');

// Iterates through each button and adds a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // Gets the text content of the clicked button
        const buttonPressed = button.textContent;

        // If the screen shows an 'Error', clear it to allow new input
        if (screen.textContent === 'Error') {
            screen.textContent = '';
        }

        // Handles the 'C' (clear) button functionality
        if(button.id === 'c') {
            screen.textContent = '0';
            return;
        }

        // Handles the '←' (backspace) button functionality
        if(button.id === 'clean') {
            // If there's only one character or the screen is '0', reset to '0'
            if(screen.textContent.length === 1) {
                screen.textContent = '0';
            } else {
                // Otherwise, remove the last character
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        // Handles the '=' (equals) button functionality
        if(button.id === 'equal') {
            try {
                // Evaluates the expression on the screen
                screen.textContent = eval(screen.textContent);
            } catch (error) {
                // If there's an error in the expression, show 'Error'
                screen.textContent = 'Error';
            }
            return;
        }
        
        // Handles adding numbers and operators to the screen
        // If the screen is '0', replace it with the button pressed
        if(screen.textContent === '0') {
            screen.textContent = buttonPressed;
        } else {
            // Otherwise, append the button's text to the current content
            screen.textContent += buttonPressed;
        }
    });
});
