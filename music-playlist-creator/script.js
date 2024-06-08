// JavaScript for Opening and Closing the Modal
var modal = document.getElementById("music-modal");
const editModal = document.getElementById("edit-modal");
modal.style.display = 'none'; // Hide modal initially
editModal.style.display = 'none';
const close_modal = document.querySelector(".modal-banner-close img");

function createPlaylistCards(playlists) {

    const container = document.querySelector('.playlist-cards');
    container.innerHTML = ''; // Clear existing cards



    for (let playlist of playlists) {
        const newPlaylistCard = generatePlaylistCard(playlist);

        container.appendChild(newPlaylistCard);

        // const editButton = newPlaylistCard.querySelector('edit-button');

        
        // like and delete feature
        let liked = false;

        newPlaylistCard.addEventListener('click', (event) => {
            if(event.target.closest('.like-count img')) {
                const likeImage = event.target.parentNode.querySelector('img');
                if(!liked){
                    playlist.likeCount += 1;
                    likeImage.src = './assets/img/red-heart.png';
                } else if (playlist.likeCount > 0) {
                    playlist.likeCount -= 1;
                    likeImage.src = './assets/img/favicon.png'; 
                }             
                const likeDisplay = event.target.parentNode.querySelector('p');
                likeDisplay.textContent = playlist.likeCount;
                liked = !liked;
            } else if(event.target.closest('.trash img')) {
                const trashIcon = event.target.closest('.trash');
                const playlistCard = trashIcon.closest('.playlist-card');
                playlistCard.remove();

                const playIndex = playlists.findIndex(p => playlist_name === playlist.playlist_name);
                playlists.splice(playlistIndex, 1);

                createPlaylistCards(playlists);
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

        shuffleButton.addEventListener('click', () => {
            playlist.songs.sort(() => Math.random() - 0.5);
            updateSongs(playlist);
        });

       
    }  
    searchPlaylist(playlists);

    
    // event listendfer for creat playlist button to create playlist
    const form = document.querySelector("#playlist-form");

    //add playlist card
    form.addEventListener('submit', (event) => {
        // get form info
        event.preventDefault();

        const formInfo = getFormInfo();
        console.log(formInfo)
        
        const newCard = generatePlaylistCard(formInfo);
        console.log(newCard)

        container.appendChild(newCard);

        // like and delete feature
        let liked = false;

        // allow open modal on new playlist cards
        newCard.addEventListener('click', (event) => {
            if(event.target.closest('.like-count img')) {
                const likeImage = event.target.parentNode.querySelector('img');
                if(!liked){
                    formInfo.likeCount += 1;
                    likeImage.src = './assets/img/red-heart.png';
                } else if (formInfo.likeCount > 0) {
                    formInfo.likeCount -= 1;
                    likeImage.src = './assets/img/favicon.png'; 
                }             
                const likeDisplay = event.target.parentNode.querySelector('p');
                likeDisplay.textContent = formInfo.likeCount;
                liked = !liked;
            } else if(event.target.closest('.trash img')) {
                const trashIcon = event.target.closest('.trash');
                const playlistCard = trashIcon.closest('.playlist-card');
                playlistCard.remove();

                const playIndex = playlists.findIndex(p => p.playlist_name === playlist.playlist_name);
                playlists.splice(playlistIndex, 1);

                createPlaylistCards(playlists);
            } else {
                updateSongBanner(formInfo);
                updateSongs(formInfo);
            }
        });

    });
    

}

function likePlaylist() {
    let liked = false;

        newPlaylistCard.addEventListener('click', (event) => {
            if(event.target.closest('.like-count img')) {
                const likeImage = event.target.parentNode.querySelector('img');
                if(!liked){
                    playlist.likeCount += 1;
                    likeImage.src = './assets/img/red-heart.png';
                } else if (playlist.likeCount > 0) {
                    playlist.likeCount -= 1;
                    likeImage.src = './assets/img/favicon.png'; 
                }             
                const likeDisplay = event.target.parentNode.querySelector('p');
                likeDisplay.textContent = playlist.likeCount;
                liked = !liked;
            } else if(event.target.closest('.trash img')) {
                const trashIcon = event.target.closest('.trash');
                const playlistCard = trashIcon.closest('.playlist-card');
                playlistCard.remove();

                const playIndex = playlists.findIndex(p => playlist_name === playlist.playlist_name);
                playlists.splice(playlistIndex, 1);

                createPlaylistCards(playlists);
            } else {
                updateSongBanner(playlist);
                updateSongs(playlist);
            }
        });
}

//  open edit modal
function openEditModal() {

    // grab edit button
    const editButton = document.querySelector('.edit-button');

    // allow open modal on new playlist cards
        editButton.addEventListener('click', (event) => {
            if (event.target.closest('.edit-button')) {
                modal.style.display = 'block';
            }
        });


    // grab modal and content
    const editModal = document.querySelector('edit-modal-content');

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

    // adds close functionality to the card
    const closeModalIcon = document.querySelector('.modal-banner-close img'); // Ensure this selector matches the close icon in your modal
    closeModalIcon.onclick = function(event) { // Add event listener for closing the modal
        modal.style.display = "none";
    };
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
            <p>${song.duration}</p>
        </div>
        `;

        songsContainer.appendChild(songDiv);
    }

    modal.style.display = "block";

}

// add playlist

function getFormInfo () {
            // add new playlist
            const form = document.querySelector('#playlist-form');

                const playlistName = document.querySelector('#playlist-name').value;
                const playlistCreator = document.querySelector('#form-creator').value;
    
                const playlist = {
                    
                    "playlistID": 0,
                    "playlist_name": playlistName,
                    "playlist_creator": playlistCreator,
                    "playlist_art": "https://picsum.photos/id/36/200",
                    "likeCount": 0,
                    songs: []
                }
    
                // create songs and push to array
                const songInputs = document.querySelectorAll('form-song');
    
                for (let attribute of songInputs) {
                    const songTitle = attribute.querySelector('#form-song-title');
                    const songArtistName = attribute.querySelector('#form-song-artist-name');
                    const songDuration = attribute.querySelector('#form-song-duration');
    
                    const song = {
                        "songID": 0,
                        "title": songTitle,
                        "artist": songArtistName,
                        "duration": songDuration 
                    };
    
                    playlist.songs.push(song);
                
                }

                return playlist;
                    
}


close_modal.onclick = function(event) {
    modal.style.display = "none";
};


// supposed to close model when click outside , need to implament
window.onclick = function(event) {
    if (event.target ==  modal) {
        modal.style.display = "none";
    }
};

function generatePlaylistCard(playlist) {
        const newPlaylistCard = document.createElement('div');
        newPlaylistCard.classList.add('playlist-card');

        newPlaylistCard.innerHTML = `
        <img src="${playlist.playlist_art}" alt="" width="200">
        <h3>${playlist.playlist_name}</h3>
        <p>${playlist.playlist_creator}</p>
        <div class="bottom-actions">
            <div class="like-count">
                <img src="assets/img/favicon.png" alt="" width="25">
                <p>${playlist.likeCount}</p>
            </div>
            <div class="trash">
                <img src="assets/img/trash.png" alt="" width="25">
            </div>
        </div>`;

    return newPlaylistCard;
}

function searchPlaylist(playlists) {
    //search element
    const searchBar = document.querySelector('.search-bar input'); // Fixed the selector to target the input element inside the search bar

    //event lister for search
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const allCards = document.querySelectorAll('.playlist-card');

        //go through all playlist cards
        allCards.forEach(card => {
            const cardTitleElement = card.querySelector('h3');
            const cardCreatorElement = card.querySelector('p');

            let cardTitle = '';
            let cardCreator = '';

            //variables correect
            if(cardTitleElement && cardCreatorElement) {
                cardTitle = cardTitleElement.textContent.toLowerCase(); // Changed to assignment without redeclaration
                cardCreator = cardCreatorElement.textContent.toLowerCase(); // Changed to assignment without redeclaration
            }

            //compare to card elements (title and creator) to input value and hide if not equal
            if (cardTitle.includes(searchTerm) || cardCreator.includes(searchTerm)) {
                card.style.display = 'block'; // Show the card if it matches
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match
            }
        });
    });
}





createPlaylistCards(data.playlists);
// openEditModal();