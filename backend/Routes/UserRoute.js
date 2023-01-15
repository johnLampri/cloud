const express=require('express');
const router = express.Router();


const user = require('../Controllers/user');

router.route('/users').get( user.getUsers);
router.route('/users/:id').get( user.getUserById);
router.route('/users').post( user.createUser);
router.route('/users/:id').patch( user.updateUser);
router.route('/users/:id').delete( user.deleteUser);

module.exports = router;