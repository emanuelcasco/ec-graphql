const api = require('./api');

const logger = require('../../logger');

exports.getAllAlbums = (first = 0, offset = 100) => {
  return api
    .get('/albums')
    .then(res => res.data)
    .then(albums => albums.slice(first, first + offset))
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot retrieve albums from external API');
    });
};

exports.getAlbumById = albumId => {
  return api
    .get(`/albums/${albumId}`)
    .then(res => res.data)
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot retrieve album from external API');
    });
};
exports.getAllPhotos = () => {
  return api
    .get('/photos')
    .then(res => res.data)
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot retrieve photos from external API');
    });
};

exports.getPhotoById = photoId => {
  return api
    .get(`/photos/${photoId}`)
    .then(res => res.data)
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot retrieve photo from external API');
    });
};

exports.getPhotosByAlbumId = albumId => {
  return exports
    .getAllPhotos()
    .then(photos => photos.filter(p => p.albumId === albumId))
    .catch(err => {
      logger.error(err);
      throw new Error('Cannot retrieve album photos from external API');
    });
};
