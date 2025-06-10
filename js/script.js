document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    let isBlue = false;
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', function() {
            if (isBlue) {
                document.body.style.backgroundColor = '#fff';
            } else {
                document.body.style.backgroundColor = '#0074D9';
            }
            isBlue = !isBlue;
        });
    }
});