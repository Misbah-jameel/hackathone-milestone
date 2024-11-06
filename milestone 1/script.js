// const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
// const skills = document.getElementById('skills') as HTMLElement 
// toggleButton.addEventListener('click', () => {
// if (skills.style.display === 'none') {
//     skills.style.display = 'block'
//     toggleButton.textContent = 'Hide Skills'}
//     else{skills.style.display === 'none'}
//  })
// const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
// const skills = document.getElementById('skills') as HTMLElement;
// toggleButton.addEventListener('click', () => {
//     if (skills.style.display === 'none') {
//         skills.style.display = 'block';
//         toggleButton.textContent = 'Hide Skills';
//     } else {
//         skills.style.display = 'none';
//         toggleButton.textContent = 'Show Skills'; // Updated to change button text
//     }
// });
// const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
// const skills = document.getElementById('skills') as HTMLElement | null;
// if (toggleButton && skills) { // Checking if elements exist
//     toggleButton.addEventListener('click', () => {
//         if (skills.style.display === 'none') {
//             skills.style.display = 'block';
//             toggleButton.textContent = 'Hide Skills';
//         } else {
//             skills.style.display = 'none';
//             toggleButton.textContent = 'Show Skills';
//         }
//     });
// } else {
//     console.error("Toggle button or skills section not found.");
// }
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
    }
});
