// Select the calculator screen
const screen = document.querySelector('.screen');
// Select all buttons
const buttons = document.querySelectorAll('button');

// Iterate through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the text of the clicked button
        const buttonPressed = button.textContent;

        // If screen shows "Error", reset it
        if (screen.textContent === 'Error') {
            screen.textContent = '';
        }

        // Clear all (button "C")
        if (button.id === 'c') {
            screen.textContent = '0';
            return;
        }

        // Backspace (button "←")
        if (button.id === 'clean') {
            if (screen.textContent.length === 1) {
                screen.textContent = '0';
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        // Equal button "="
        if (button.id === 'equal') {
            try {
                // Validate: only allow numbers and basic operators
                if (!/^[0-9+\-*/%.]+$/.test(screen.textContent)) {
                    screen.textContent = "Error";
                    return;
                }

                // Check division by zero
                if (/\/0(?!\d)/.test(screen.textContent)) {
                    screen.textContent = "Error";
                    return;
                }

                // Safely evaluate the expression
                const result = Function('"use strict";return (' + screen.textContent + ')')();
                screen.textContent = result;
            } catch (error) {
                screen.textContent = "Error";
            }
            return;
        }

        // Append numbers and operators to the screen
        if (screen.textContent === '0') {
            screen.textContent = buttonPressed;
        } else {
            screen.textContent += buttonPressed;
        }
    });
});
