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

function createPlaylistCards(playlists) {
    let playlistName;
    let playlistCreator;
    let playlistArt;
    let likeCount;


    // generaet empty 
    // iterate through each playlist
    // create a new elemeennt which 
    // add evenet listners to add songs
    // last line append to container

    // gets all attributes of playlist
    for(let playlist of playlists) {
        playlistName = playlist['playlist_name'];
        playlistCreator = playlist["playlist_creator"];
        playlistArt = playlist["playlist_art"];
        likeCount = playlist["likeCount"];
    }

    const newPlaylistCard = document.createElement('playlist-card'); // create the playlist card

}

createPlaylistCards(data.playlists);
