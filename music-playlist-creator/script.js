// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("music-modal");
modal.style.display = 'none'; // Hide modal initially
var close_modal = document.getElementsByClassName("modal-banner-close")[0];

function createPlaylistCards(playlists) {

    const container = document.querySelector('.playlist-cards');
    container.innerHTML = ''; // Clear existing cards

    for (let playlist of playlists) {
        const newPlaylistCard = document.createElement('div');
        newPlaylistCard.classList.add('playlist-card');

        newPlaylistCard.innerHTML = `
        <img src="${playlist.playlist_art}" alt="" width="200">
        <h3>${playlist.playlist_name}</h3>
        <p>${playlist.playlist_creator}</p>
        <div class="like-count">
            <img src="assets/img/favicon.png" alt="" width="25">
            <p>${playlist.likeCount}</p>
        </div>`;

        container.appendChild(newPlaylistCard);

        newPlaylistCard.addEventListener('click', () => {
            console.log("Playlist card clicked");  // Test if this logs when a card is clicked
            updateSongBanner(playlist);
            updateSongs(playlist);
        });

    }

}

function updateSongBanner (playlist) {
    const bannerContainer = document.querySelector('.modal-banner');
    bannerContainer.innerHTML = ``;

    bannerContainer.innerHTML = `
    <div class="modal-banner-img">
        <img src="${playlist.playlist_art}" alt="" width="350">
    </div>
    <div class="modal-banner-titles">
        <h1>${playlist.playlist_name}</h1>
        <h3>${playlist.playlist_creator}</h3>
    </div>
    <div class="modal-banner-close">
        <img src="assets/img/close.png" alt="" width="25">
    </div>`;

    modal.style.display = "block";

}

function updateSongs(playlist) {

    const songsContainer = document.querySelector('.modal-songs');
    songsContainer.innerHTML = ``;

    for (let song of playlist.songs) {
        const songDiv = document.createElement('div');
        songDiv.classList.add('modal-songs');

        songDiv.innerHTML = `
        <div class="modal-song-left">
        <div class="modal-song-left-img">
            <img src="${song.cover_art}" alt="" width="110px">
        </div>
        <div class="modal-song-right-text">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p>${song.album}</p>
        </div>`;

        songsContainer.appendChild(songDiv);
    }

    modal.style.display = "block";

}


// closes model by clicking x
close_modal.onclick = function() {
    modal.style.display = "none";
};

// supposed to close model when click outside , need to implament
window.onclick = function(event) {
    if (event.target==  modal) {
        modal.style.display = "none";
    }
};

createPlaylistCards(data.playlists);