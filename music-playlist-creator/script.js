// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("music-modal");
var close_modal = document.getElementsByClassName("modal-banner-close")[0];

function openModal(festival) {
   document.getElementById('festivalName').innerText = festival.name;
   document.getElementById('festivalImage').src = festival.imageUrl;
   document.getElementById('festivalDates').innerText = `Dates: ${festival.dates}`;
   document.getElementById('festivalLocation').innerText = `Location: ${festival.location}`;
   document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
   modal.style.display = "block";
}

// closes model by clicking x
close_modal.onclick = function() {
   modal.style.display = "none";
}
 // supposed to close model when click outside , need to implament
window.onclick = function(event) {
   if (event.target==  modal) {
      modal.style.display = "none";
   }
}

function createPlaylist(playlists) {
}
