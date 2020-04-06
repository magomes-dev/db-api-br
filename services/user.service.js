const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {User} = require('../models');


module.exports = {
    authenticate,
    create,
    getById
};

async function authenticate({ userName, password }) {

    return User.findOne({
        where: {userName: userName }
    })
    .then(user => {
        if (user && bcrypt.compareSync(password, user.hash)) {        
            
            const token = jwt.sign({ sub: user.id }, config.secret);
            
            return { success: true, body: token }
        }

        return { success: false, error: "Usuário/Senha incorreto!" };        
    })
    .catch(function (err) {
        return { success: false, error: err.toString() };
    })

    
}

async function getById(id){
    return User.findByPk(id)            
    .then( result => {
        return { success: true, body: result }
    })
    .catch( err => {
        return { success: false, error: err.toString() }
    })
}

async function create(createUser) {

    //Verifica se existe um planeta com este nome
    const testUnique = await User.findOne({
        where: { userName: createUser.userName }
    });

    if (testUnique != null) {
        return { success: false, error: "Usuario já registrado" };   
    }   
    
    if (createUser.password) {
        createUser.hash = bcrypt.hashSync(createUser.password, 10);
    }
    
    return User.create(createUser)
                .then( result => { 
                    return { success: true, body: result };
                })
                .catch(function (err) {
                    return { success: false, error: err.toString() };
                })
}

// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.userName !== userParam.userName && await User.findOne({ userName: userParam.userName })) {
//         throw 'Username "' + userParam.userName + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }
