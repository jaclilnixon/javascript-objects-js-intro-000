var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({ artistName: songTitle }, playlist)
}
