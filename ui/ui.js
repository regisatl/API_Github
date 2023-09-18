import { dateDiffInDays, deleteCardIf } from '../utilities/utilities.js';

function showUser(user) {

      const username = user.login;
      const name = user.name;
      const repos = user.public_repos;
      const img = user.avatar_url;
      const link = user.html_url;
      const bio = user.bio;
      const created = user.created_at;
      const followers = user.followers;

      const dateLocale = new Date(created);
      const dateCreate = `Utilisateur crée le<span class="fw-bold"> ${dateLocale.toLocaleDateString()}</span> il y a<span class="fw-bold"> ${dateDiffInDays(created)} </span>jours`;

      // ou

      const create = `Utilisateur crée le <span class="fw-bold">${created.slice(0, 10).split('/').reverse().join('/')}</span> il y a <span class="fw-bold"> ${dateDiffInDays(created)}</span> jours`;

     document.getElementById('username').innerHTML = `<span class="fw-bold">Login</span> : ${username}`;
     document.getElementById('name').innerHTML = `<span class="fw-bold">Name</span> : ${name}`;
     document.getElementById('repos').innerHTML = `<span class="fw-bold">Repository</span> : <span class="text-warning">${repos}</span>`;
     document.getElementById("avatar").src = `${img}`;
     document.getElementById("link").href = `${link}`;
     document.getElementById('bio').innerHTML = `<span class="text-center fw-bold">Bio</span> : <br> ${bio}`;
     document.getElementById('created').innerHTML = `${dateCreate}`;
     document.getElementById('followers').innerHTML = `<span class="fas fa-heart"> </span> <span class="text-warning">${followers}</span>`;

}

export default showUser;
