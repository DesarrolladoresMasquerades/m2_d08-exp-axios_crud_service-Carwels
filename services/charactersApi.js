const axios = require("axios");

// adios is the nice fetch()

class CharactersApi {
    constructor(
        baseURL = process.env.API_URL,
        API_KEY = process.env.API_KEY,
        API_USER = process.env.API_USER
      ) {
        this.API_KEY = API_KEY; // || "default key"
        this.API_USER = API_USER; // || "default user";
        this.baseURL = baseURL; // || "https://ih-crud-api.herokuapp.com";
        //creates a connection to the service
        this.api = axios.create({ baseURL: this.baseURL }); // Typical connection string requires keys etc... `${this.baseURL}/?key=${API_KEY}`
      }

 //Name should be descriptive to your server
    getAllCharacters = () => this.api.get("/characters") 
    getOneCharacter = (id) => {
        this.api.get(`/characters/${id}`)
    }
    createOneCharacter = () => {}
    updateOneCharacter = () => {}
    deleteOneCharacter = () => {}
}

module.exports = CharactersApi;
