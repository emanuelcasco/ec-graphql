const { gql } = require('apollo-server');
const albumsService = require('../../services/albums');

const parseAlbum = (album, photos) => ({ ...album, photos: photos.filter(p => p.albumId === album.id) });

module.exports = {
  queries: {
    getAlbum: async (_, { id: albumId }) => {
      const album = await albumsService.getAlbumById(albumId);
      const photos = await albumsService.getAllPhotos();

      return parseAlbum(album, photos);
    },
    getAllAlbums: async (_, { first, offset }) => {
      const albums = await albumsService.getAllAlbums(first, offset);
      const photos = await albumsService.getAllPhotos();

      return albums.map(album => parseAlbum(album, photos));
    }
  },
  schema: gql`
    extend type Query {
      getAlbum(id: ID!): Album!
      getAllAlbums(first: Int, offset: Int): [Album]
    }
  `
};
