const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {User} = require('database/models');
const BusinessLogicError = require('utils/BusinessLogicError')


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
            const data = {
                id: user.id, 
                userName: user.userName, 
                email: user.email, 
                firstName: user.firstName
            }            
            const token = jwt.sign(data, config.secret, {expiresIn: "6h"} )            
            return { token }
        }
        throw new BusinessLogicError("Usuário/Senha incorreto!");        
    })   
}

async function getById(id){
    return User.findByPk(id)            
    .then( user => {
        return { 
            id: user.id, 
            userName: user.userName, 
            email: user.email, 
            firstName: user.firstName 
        }
    })
}

async function create(createUser) {
    const testUnique = await User.findOne({
        where: { userName: createUser.userName }
    });
    if (testUnique != null) {
        throw new BusinessLogicError("Usuario já registrado")   
    }       
    if (createUser.password) {
        createUser.hash = bcrypt.hashSync(createUser.password, 10);
    }    
    return User.create(createUser)
        .then( user => { 
            return { 
                id: user.id, 
                userName: user.userName, 
                email: user.email, 
                firstName: user.firstName 
            };
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
