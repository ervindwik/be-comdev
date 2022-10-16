const { Users, Roles } = require("../models");

class UsersRepository {


    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers(){
        const handleGetAllUsers = await Users.findAll();

        return handleGetAllUsers;
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- End Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }){
        const handleGetUserById = await Users.findOne({
            where: { id }
        });

        return handleGetUserById;
    }

    // ------------------------- End Handle Get User By Id ------------------------- //



    // ------------------------- Get User By Email  ------------------------- //

    static async getUserByEmail({ email }) {
        const getUserEmail = await Users.findOne({
            where: {
                email: email
            }
        });

        return getUserEmail;
    };

    // ------------------------- End Get User By Email  ------------------------- //

    // ------------------------- Get User By Username  ------------------------- //

    static async getUserByUsername({ username }) {
        const getUserUsername = await Users.findOne({
            where: {
                username: username
            }
        });

        return getUserUsername;
    };

    // ------------------------- End Get User By Username  ------------------------- //


    // ------------------------- Register User  ------------------------- //
    
    static async createNewUser({ name, email, username, password, role_id }) {
        const createdUser = Users.create({
            name,
            username,
            email,
            password,
            role_id
        });

        return createdUser;
    };
    
    // ------------------------- End Register User  ------------------------- //


    
    // ------------------------- Update User (Complete Account Info)  ------------------------- //
    
    static async handleUpdateUsers({ id, name, username, email, position, about, picture, role_id }) {

        const updatedUser = await Users.update({
            name,
            username,
            email,
            position,
            about,
            picture,
            role_id
        }, {
            where: { id },
        });

        return updatedUser;
        
    };

    // ------------------------- End Update User (Complete Account Info)  ------------------------- //


    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {
        
        const deletedUsers = await Users.destroy({ where: { id } });

        return deletedUsers;
    }

    // ------------------------- End Handle Delete Users ------------------------- //


    
    // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleUserByRoleId({ id, role_id }){

        const query = {
            where: {}
        }

        if (id) {
            query.where = { ...query.where, role_id: id }
        }

        if (role_id) {
            query.where = { ...query.where, role_id }
        }

        const handleGetUserByRoleId = await Users.findAll(query);

        return handleGetUserByRoleId;
    }

    // ------------------------- End Handle Get Product By User Id ------------------------- //
};

module.exports = UsersRepository;