const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button[data-value]');
    const equals = document.getElementById('equals');
    const clearBtn = document.getElementById('clear');
    const allClearBtn = document.getElementById('all-clear');

    let currentInput = '';

    function updateDisplay() {
      display.textContent = currentInput || '0';
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        // Prevent multiple operators in a row
        const operators = ['+', '-', '*', '/'];
        const lastChar = currentInput.slice(-1);

        if (operators.includes(value)) {
          if (currentInput === '') {
            // Don't allow operator as first char except minus for negative numbers
            if (value !== '-') return;
          }
          if (operators.includes(lastChar)) {
            // Replace last operator with new one
            currentInput = currentInput.slice(0, -1);
          }
        }

        currentInput += value;
        updateDisplay();
      });
    });

    equals.addEventListener('click', () => {
      try {
        let expression = currentInput;

        if (/^[0-9+\-*/(). ]+$/.test(expression)) {
          let result = Function('"use strict";return (' + expression + ')')();
          if (result === Infinity || result === -Infinity || isNaN(result)) {
            currentInput = 'Error';
          } else {
            currentInput = String(result);
          }
        } else {
          currentInput = 'Error';
        }
      } catch {
        currentInput = 'Error';
      }
      updateDisplay();
    });

    clearBtn.addEventListener('click', () => {
      // Remove last character
      if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
      }
      updateDisplay();
    });

    allClearBtn.addEventListener('click', () => {
      currentInput = '';
      updateDisplay();
    });