//////////////submit form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.php');
    xhr.onload = function() {
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = this.responseText;
        formMessage.style.display = 'block';
        if (xhr.status === 200) {
            formMessage.classList.add('success');
        } else {
            formMessage.classList.add('error');
        }
    };
    xhr.send(formData);
});
// //////submit form
