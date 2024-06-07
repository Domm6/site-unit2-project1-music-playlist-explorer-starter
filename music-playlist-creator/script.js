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

        // like feature
        let liked = false;

        newPlaylistCard.addEventListener('click', (event) => {
            if(event.target.closest('.like-count img')) {
                if(!liked){
                    playlist.likeCount += 1;
                    //likeCount.src = 'site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/red-heart.png'; 
                } else if (playlist.likeCount > 0) {
                    playlist.likeCount -= 1;
                    //likeCount.src = 'site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/favicon.png';
                }             
                const likeDisplay = event.target.parentNode.querySelector('p');
                likeDisplay.textContent = playlist.likeCount;
                liked = !liked;
            } else {
                updateSongBanner(playlist);
                updateSongs(playlist);
            }
        });


        // shuffle feature
        const shuffleButton = document.querySelector(".shuffle-btn");

        shuffleButton.addEventListener('click', () => {
            playlist.songs.sort(() => Math.random() - 0.5);
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
        <div class="modal-song">
        <div class="modal-song-left">
            <div class="modal-song-left-img">
                <img src="${song.cover_art}" alt="" width="110px">
            </div>
            <div class="modal-song-right-text">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <p>${song.album}</p>
            </div>
        </div>
        <div class="modal-song-right">
            <p>0:00</p>
        </div>`;

        songsContainer.appendChild(songDiv);
    }

    modal.style.display = "block";

}

// function I am trying to implament
function addNewPlaylist(playlist) {
    
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
