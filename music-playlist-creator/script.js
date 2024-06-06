// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("music-modal");
var close_modal = document.getElementsByClassName("modal-banner-close")[0];

function openModal(playlist) {
    // populate modal with playlist data
    const modalImg = modal.querySelector('.modal-banner-img img');
    const modalTitle =  modal.querySelector('.modal-banner-titles h1');
    const modalCreatorName =  modal.querySelector('.modal-banner-titles h3');
    const modalSongs =  modal.querySelector('.modal-songs');

    modalImg.src = playlist.playlistArt;
    modalTitle = textContent = playlist.playlist_name;
    modalCreatorName = playlist.playlist_creator

    // clear previous songs
    modalSongs.innerHTML = '';

    // add new songs
    playlist.songs.forEach( song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('modal-song');

        const songLeft = document.createElement('div');
        songLeft.classList.add('modal-song-left');

        const songLeftImgDiv = document.createAttribute('div');
        songLeftImgDiv.classList.add('modal-song-left-img');

        const songLeftImg = document.createElement('img');
        songLeftImg.src = song.cover_art;
        songLeftImg.width = 30;

        songLeftImgDiv.appendChild(songLeftImg);

        const modalSongRightText = document.createElement('div');
        modalSongRightText.classList.add('modal-song-right-text');
        const songTitle = document.createElement('h3');
        songTitle.textContent = song.title;
        const artistName = document.createElement('p');
        artistName.textContent = song.artist;
        const albumName = document.createElement('p');
        albumName.textContent = song.album;

        modalSongRightText.appendChild(songTitle);
        modalSongRightText.appendChild(artistName);
        modalSongRightText.appendChild(albumName);

        songLeft.appendChild(songLeftImgDiv);
        songLeft.appendChild(modalSongRightText);

        const songRightDiv = document.createElement('div');
        songRightDiv.classList.add('modal-song-right');

        const songDuration = document.createElement('p');
        songDuration.textContent = song.duration;

        songRightDiv.appendChild(songDuration);

        songDiv.appendChild(songLeftDiv);
        songDiv.appendChild(songRightDiv);

        modalSongs.appendChild(songDiv);
        


    });

    // display modal
    modal.style.display = block;
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
        likeIcon.src = 'site-unit2-project1-music-playlist-explorer-starter/music-playlist-creator/assets/img/favicon.png';
        likeIcon.width = 25;

        const likeCountP = document.createElement('p');
        likeCountP.textContent = likeCount;

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
