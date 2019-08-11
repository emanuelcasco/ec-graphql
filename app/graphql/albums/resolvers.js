const albumsService = require('../../services/albums');
const logger = require('../../libs/logger');
const { formatAlbum } = require('./utils');

exports.getAlbum = async (root, { id: albumId }) => {
  logger.info(`Fetching album with id: ${albumId}`);
  const album = await albumsService.getAlbumById(albumId);
  const albumPhotos = await albumsService.getPhotosByAlbumId(albumId);
  return formatAlbum(album, albumPhotos);
};

exports.getAllAlbums = async (root, { offset, limit, sort, filter }) => {
  logger.info(`Fetching albums list. Params: ${JSON.stringify({ offset, limit, sort, filter })}`);
  const albums = await albumsService.getAllAlbums(offset, limit, sort, filter);
  const photos = await albumsService.getAllPhotos();
  return albums.map(album => {
    return formatAlbum(album, photos.filter(p => p.albumId === album.id));
  });
};
