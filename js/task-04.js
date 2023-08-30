const counterValue = 0;
const valueSpan = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

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