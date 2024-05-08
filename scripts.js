const wheel = document.querySelector('.inner-wheel');
const pointer = document.querySelector('.pointer');
const spinBtn = document.getElementById('spin-btn');
const addItemForm = document.getElementById('add-item-form');
const newItemInput = document.getElementById('new-item');

let spinning = false;
const items = []; // Initialize as empty array

function updateWheel() {
  wheel.innerHTML = '';
  items.forEach(item => {
    const wheelItem = document.createElement('div');
    wheelItem.classList.add('wheel-item');
    wheelItem.textContent = item;
    wheel.appendChild(wheelItem);
  });

  // Update CSS variable for item count
  document.documentElement.style.setProperty('--item-count', items.length);
}

updateWheel();

function spinWheel() {
  if (!spinning && items.length > 0) { // Only spin if there are items on the wheel
    spinning = true;
    const randomDegrees = Math.floor(Math.random() * 360) + 3600; // Spin between 1 and 10 full rotations
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${randomDegrees}deg)`;
    setTimeout(() => {
      const selectedItemIndex = Math.floor(Math.random() * items.length);
      alert(`You landed on: ${items[selectedItemIndex]}`);
      spinning = false;
      wheel.style.transition = 'none';
    }, 3500); // Adjust time based on the wheel spinning duration
  }
}

spinBtn.addEventListener('click', spinWheel);

addItemForm.addEventListener('submit', e => {
  e.preventDefault();
  const newItem = newItemInput.value.trim();
  if (newItem) {
    items.push(newItem);
    updateWheel();
    newItemInput.value = '';
  }
});
