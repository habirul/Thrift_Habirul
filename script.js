const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim data ke server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Redirect ke halaman utama
            window.location.href = '/home';
        } else {
            alert('Login gagal');
        }
    })
    .catch((error) => {
        console.error(error);
    });
});