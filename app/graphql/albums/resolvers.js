const albumsService = require('../../services/albums');
const logger = require('../../libs/logger');
const { formatAlbum } = require('./utils');

exports.getAlbum = (root, { id }) => {
  logger.info(`Fetching album with id: ${id}`);
  return albumsService.getAlbumById(id).then(formatAlbum);
};

exports.getAlbums = (root, { offset, limit, sort, filter }) => {
  logger.info(`Fetching albums list. Params: ${JSON.stringify({ offset, limit, sort, filter })}`);
  return albumsService.getAllAlbums(offset, limit, sort, filter).then(albums => albums.map(formatAlbum));
};

exports.getPhotos = (root, { id }) => {
  logger.info(`Fetching photos of album with id: ${id}`);
  return albumsService.getPhotosByAlbumId(id);
};

exports.typeResolvers = {
  Album: {
    photos: album => {
      logger.info(`Fetching photos of album with id: ${album.id}`);
      return albumsService.getPhotosByAlbumId(album.id);
    }
  }
};
