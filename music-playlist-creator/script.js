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

    const container = document.querySelector('.playlist-cards');

    // let playlistName;
    // let playlistCreator;
    // let playlistArt;
    // let likeCount;


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

        const newPlaylistCard = document.createElement('div'); // create the playlist card
        newPlaylistCard.classList.add('playlist-card');

        const img = document.createElement('img');
        img.src = playlist.playlist_art;
        img.alt = playlist.playlist_name;
        img.width = 200;

        const h3 = document.createElement('h3');
        h3.textContent = playlist.playlist_name;

        const creator = document.createElement('p');
        creator.textContent = playlist.playlist_creator;

        const likeCountDiv = document.createElement('div');
        likeCountDiv.classList.add('like-count');

        const likeIcon = document.createElement('img');
        likeIcon.src = '/assets/img/favicon.png';
        likeIcon.alt = 'like icon';
        likeIcon.width = 25;

        const likeCountP = document.createElement('p');
        likeCount.textContent = likeCount;

        // add like count and icon to div
        likeCountDiv.appendChild(likeIcon);
        likeCountDiv.appendChild(likeCountP);

        // append all elements to the card
        newPlaylistCard.appendChild(img);
        newPlaylistCard.appendChild(h3);
        newPlaylistCard.appendChild(creator);
        newPlaylistCard.appendChild(likeCountDiv);

        container.appendChild(newPlaylistCard);


    }
}

createPlaylistCards(data.playlists);
