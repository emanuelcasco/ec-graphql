exports.formatAlbum = album => {
  const { userId: artist, ...data } = album;
  return { ...data, artist };
};
