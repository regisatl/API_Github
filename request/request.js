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
