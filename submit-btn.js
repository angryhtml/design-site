const button = document.querySelector('.form-submit');
const checkbox = document.querySelector('.checkboxbtn')

checkbox.addEventListener('change', function () {
    button.disabled = !checkbox.checked;
})
