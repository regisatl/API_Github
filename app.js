import getUser from './request/request.js';
import showError from './error/error.js';
import showUser from './ui/ui.js';

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    document.getElementById('cardShow').style.display = "block";

    getUser(username)
        .then(user => showUser(user))
        .catch(err => showError(new Error(err)));
});
