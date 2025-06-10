document.addEventListener('DOMContentLoaded', function() {

    const changeColorBtn = document.getElementById('changeColorBtn');
    const introSection = document.querySelector('.intro');

    const colors = [
        '#f8f9fa',
        '#e0f7fa',
        '#fbe9e7',
        '#e8f5e9',
        '#f3e5f5'
    ];

    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        introSection.style.backgroundColor = colors[currentColorIndex];
    });

});