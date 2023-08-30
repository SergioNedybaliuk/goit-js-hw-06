let counterValue = 0;
let valueSpan = document.querySelector('#value');
let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');

function updateValue(newValue) {
  valueSpan.textContent = newValue;
}

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateValue(counterValue);
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateValue(counterValue);
});

updateValue(counterValue);