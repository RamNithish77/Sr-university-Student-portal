document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdownContent = document.getElementById('dropdown-content');

    menuButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
});
