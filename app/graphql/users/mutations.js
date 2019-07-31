const bcrypt = require('bcrypt');
const { gql } = require('apollo-server');

// const logger = require('../../logger');

const { user: User } = require('../../models');
const { userLoggedIn } = require('../events');

const hashPassword = (plainPass, saltRounds) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainPass, saltRounds, (err, hash) => {
      return err ? reject(err) : resolve(hash);
    });
  });
};

module.exports = {
  mutations: {
    signin: async (_, { user }) => {
      const password = await hashPassword(user.password, 10);
      const newUser = await User.create({ ...user, password });

      return newUser.toJSON();
    },
    login: (_, { credentials }) => {
      // IMPORTANT: Not a functional login, its just for illustrative purposes
      userLoggedIn.publish(credentials.username);
      return {
        accessToken: 'example_token',
        refreshToken: 'example_refresh_token',
        expiresIn: 134567899123
      };
    }
  },
  schema: gql`
    extend type Mutation {
      signin(user: UserInput!): UserResponse!
      login(credentials: LoginInput!): AccessToken
    }
  `
};
