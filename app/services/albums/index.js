const api = require('./api');

const logger = require('../../libs/logger');
const constants = require('../../constants');
const utils = require('../../utils');

const { DEFAULT_LIMIT, DEFAULT_OFFSET } = constants;

exports.getAllAlbums = (offset = DEFAULT_OFFSET, limit = DEFAULT_LIMIT, sort, filter) => {
  return api
    .get('/albums')
    .then(res => res.data)
    .then(albums => (filter ? utils.filterBy(albums, filter.field, filter.value) : albums))
    .then(albums => (sort ? utils.sortBy(albums, sort.field, constants[sort.order]) : albums))
    .then(albums => albums.slice(offset, offset + limit))
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
