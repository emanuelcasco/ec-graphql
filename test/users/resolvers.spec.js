const userFactory = require('../factories/user');
const { mutations } = require('../../app/graphql/users/mutations');

describe('users', () => {
  describe('resolvers', () => {
    describe('createUser', () => {
      it('should create an user successfuly', async done => {
        const user = await userFactory.build();
        return mutations.createUser({}, { user: user.dataValues }).then(res => {
          expect(res.dataValues).toHaveProperty('id');
          expect(res.dataValues).toHaveProperty('firstName');
          expect(res.dataValues).toHaveProperty('lastName');
          expect(res.dataValues).toHaveProperty('email');
          expect(res.dataValues).toHaveProperty('username');
          expect(res.dataValues).toHaveProperty('password');
          expect(res.dataValues).toHaveProperty('updatedAt');
          expect(res.dataValues).toHaveProperty('createdAt');
          done();
        });
      });

      it('should fail to create an user with malformed parameters', done => {
        mutations
          .createUser({}, { user: { a: 'b' } })
          .then(res => {
            done(res);
          })
          .catch(err => {
            expect(typeof err.errors).toBe('object');
            expect(err.errors).toHaveLength(5);
            done();
          });
      });
    });
  });
});
