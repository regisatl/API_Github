async function getUser(username) {

      const accesToken = "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";
      const apiUrl = `https://api.github.com/users/${username}`;

      // créer un objet d'en-têtes avec le jeton d'authentification
      const headers = {
            "authorization": `Bearer ${accesToken}`
      }

      const response = await fetch(apiUrl, { headers });
      const data = await response.json();
      // Traitez ici les données renvoyées

      return data;


}

export default getUser;
