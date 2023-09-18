function showError(error) {

      // if (error) {
            const errorMsg = `Erreur de requête Fetch ${error}`;
            document.getElementById('error').innerHTML = errorMsg;
      // }else if (error === null) {
      //       document.getElementById('error').style.display = "none";
      //       document.getElementById('error').classList.remove = "alert alert-danger py-5";
      // }

}

export default showError;
