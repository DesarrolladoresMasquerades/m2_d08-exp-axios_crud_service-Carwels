const express = require("express");
const router = express.Router();

const CharactersApi = require("./../services/charactersApi");
const charactersApiHandler = new CharactersApi();

// Characters list
router.get("/list", (req, res) => {
  charactersApiHandler
    .getAllCharacters()
    .then((response) => res.render("pages/characters-list", { characters: response.data }))
    .catch((error) => console.log(error));
});

router.get("/:id", (req, res) => {
  charactersApiHandler.getOneCharacter(req.params.id)
  .then((response) => res.render("pages/character-details", response.data))
  .catch(error => console.log(error)) 
})


module.exports = router;
