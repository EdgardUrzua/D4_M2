document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Selecciona todos los botones que abren el modal
    const openModalButtons = document.querySelectorAll('.open-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const description = button.getAttribute('data-description');

            modalTitle.textContent = name;
            modalDescription.textContent = description;

            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
