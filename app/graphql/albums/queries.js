const { gql } = require('apollo-server');
const albumsService = require('../../services/albums');

const parseAlbum = (album, photos) => {
  const { userId: artist, ...data } = album;
  return { ...data, artist, photos: photos.filter(p => p.albumId === album.id) };
};

module.exports = {
  queries: {
    getAlbum: async (_, { id: albumId }) => {
      const album = await albumsService.getAlbumById(albumId);
      const photos = await albumsService.getAllPhotos();

      return parseAlbum(album, photos);
    },
    getAllAlbums: async (_, { offset, limit, sort, filter }) => {
      const albums = await albumsService.getAllAlbums(offset, limit, sort, filter);
      const photos = await albumsService.getAllPhotos();

      return albums.map(album => parseAlbum(album, photos));
    }
  },
  schema: gql`
    extend type Query {
      getAlbum(id: ID!): Album!
      getAllAlbums(offset: Int, limit: Int, sort: SortingInput, filter: FilterInput): [Album]
    }
  `
};
