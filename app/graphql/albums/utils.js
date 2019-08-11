exports.formatAlbum = (album, photos) => {
  const { userId: artist, ...data } = album;
  return { ...data, artist, photos };
};
