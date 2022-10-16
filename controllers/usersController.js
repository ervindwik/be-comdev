const usersService = require("../services/usersService");


// ------------------------- Handle Get All Users ------------------------- //

const handleGetAllUsers = async (req, res) => {
    
    const { status, status_code, message, data} = await usersService.handleGetAllUsers();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Users ------------------------- //



// ------------------------- Handle Get User By Id ------------------------- //

const handleGetUserById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await usersService.handleGetUserById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get User By Id ------------------------- //



// ------------------------- Handle Update Users ------------------------- //

const handleUpdateUsers = async (req, res, next) => {

    const { id } = req.params;
    const { name, username, email, position, about } = req.body;

    const { status, status_code, message, data} = await usersService.handleUpdateUsers({
        id,
        name,
        username,
        email,
        position,
        about,
        picture: req.file,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

// ------------------------- End Handle Update Users ------------------------- //


// ------------------------- Handle Delete  Users ------------------------- //

const handleDeleteUsers = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await usersService.handleDeleteUsers({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Users ------------------------- //



// ------------------------- Handle Get Product By User Id ------------------------- //

const handleGetUserByRoleId = async (req, res, next) => {

    const { id } = req.params;

    const { role_id } = req.query;

    const { status, status_code, message, data } =
        await usersService.handleGetUserByRoleId({ id, role_id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Product By User Id ------------------------- //

module.exports = { 
    handleUpdateUsers, 
    handleGetAllUsers, 
    handleGetUserById, 
    handleDeleteUsers,
    handleGetUserByRoleId 
};