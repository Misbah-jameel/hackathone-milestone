const toggleButton1 = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills1 = document.getElementById('skills') as HTMLElement;

toggleButton1.addEventListener('click', () => {
  if (skills1.style.display === 'none') {
    skills1.style.display = 'block';
    toggleButton1.textContent = 'Hide Skills';
  } else {
    skills1.style.display = 'none'; 
  }
});


