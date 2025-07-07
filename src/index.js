document.addEventListener("DOMContentLoaded", function () {
  Painting.loadPaintings();
  Painting.listenForClick();
  Artist.loadArtists();
  Artist.addListenerToArtistForm() 
});

const getArtistForm = () => document.querySelector("#artist-form");
const getPaintingForm = () => document.querySelector("#insert-painting");
const getDeleteArtistButton = () => document.querySelectorAll('.artist-card button');
const getDeletePaintingButton = () => document.querySelectorAll('.painting-card button');
const getPaintings = () => document.querySelector('#paintings');
const getArtists = () => document.querySelector('#artists');
// const getSubmitButton = () => document.querySelector('#submit-button').value.reset()

const getTitle = () => getPaintingForm().querySelector("#title").value;
const getStyle = () => getPaintingForm().querySelector("#style").value;
const getPrice = () => getPaintingForm().querySelector("#price").value;
const getPaintingImage = () => getPaintingForm().querySelector("#painting_image").value;


const getName = () => getArtistForm().querySelector('#name').value;
const getAge = () => getArtistForm().querySelector('#age').value;
const getGender = () => getArtistForm().querySelector('#gender').value;


// Legacy fetch logic moved to archive/old_fetch_logic.js

