var playlist = {
  artistName:'songTitle'
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist [artistName] = ["Here's to the State of Mississippi"]
}

function removeFromPlaylist (playlist, artistName){
  delete playlist [artistName];
  return playlist;
}
