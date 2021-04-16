import axios from "axios";

// Ajouter le token que je vous ai donné ici
const token = 'OTc1MDMyNCAkMnkkMTAka3lBOGV5SjZ2Q1dYbUlNZ0pDRi9NLnRqZFpTMk9tZlE5ajJidnlzU0Riem9LM0FQWnh2TUc='

// En spécifiant le baseURL ici, vous n'avez plus besoin de l'ajouter
// à chaque fois, vous pouvez seulement inscrire la route dans l'url de
// votre appel avec Axios. Pour utiliser cette instance, vous devez ajouter
// l'import suivant dans le fichier où vous voulez l'utiliser.
// import Api from '../utils/Api';
// et ensuite utiliser Api au lieu de Axios. Il y a un exemple dans le 
// composant Header.
export default axios.create({
    baseURL: "https://obscure-bastion-46412.herokuapp.com",
    responseType: "json", 
    headers: {
        Authorization: "bearer " + token,
      }   
  });