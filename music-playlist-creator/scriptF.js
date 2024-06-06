
function getRandomPlaylist(playlists) {
    const randomIndex = Math.floor(Math.random() * playlists.length);
    return data.playlists[randomIndex];
}


// update Song
function updateSongs(playlist) {

    const songsContainer = document.querySelector('.featured-songs');
    songsContainer.innerHTML = `<h1>Songs</h1>`;

    for (let song of playlist.songs) {
        const songDiv = document.createElement('div');
        songDiv.classList.add('featured-songs');

        songDiv.innerHTML = `
        <div class="featured-song-left">
        <div class="featured-song-left-img">
            <img src="${song.cover_art}" alt="" width="110px">
        </div>
        <div class="featured-song-right-text">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p>${song.album}</p>
        </div>`;

        songsContainer.appendChild(songDiv);
    }

}

function updateFeaturedPlaylist(playlist) {
    const containerLeft = document.querySelector('.featured-container-left');
    containerLeft.innerHTML = ``;

    containerLeft.innerHTML = `
    <img src="${playlist.playlist_art}" alt="" id="featured-img">
    <h1>${playlist.playlist_name}</h1>
    <h1>${playlist.playlist_creator}</h1>`;

}


const randomPlaylist = getRandomPlaylist(data.playlists);
updateSongs(randomPlaylist);
updateFeaturedPlaylist(randomPlaylist);
