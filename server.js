const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const uploadPicture = require("./utils/fileUpload");
const handleGoogleLoginOrRegister = require("./handleGoogleLoginOrRegister");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ------------------------- Public File Access ------------------------- //

app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ------------------------- End Public File Access ------------------------- //



// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");

const usersController = require("./controllers/usersController");

const rolesController = require("./controllers/rolesController");

const coursesController = require("./controllers/coursesController");


// const courseController = require("./controllers/productsController");

// const transactionsController = require("./controllers/transactionsController");
// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //

// ------------------------- Auth ------------------------- //

app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);
app.get("/v1/auth/me", middleware.authenticate, authController.handleCurrentUser);
app.post("/v1/auth/google", handleGoogleLoginOrRegister);

// ------------------------- End Auth ------------------------- //



// ------------------------- User System (complete users info) ------------------------- //

app.get("/v1/users", usersController.handleGetAllUsers);
app.get("/v1/users/:id", usersController.handleGetUserById);
app.put("/v1/users/update/:id", middleware.authenticate, uploadPicture.single("picture"), usersController.handleUpdateUsers);
app.delete("/v1/users/delete/:id", middleware.authenticate, usersController.handleDeleteUsers);
app.get("/v1/users/:id/roles", usersController.handleGetUserByRoleId);

// ------------------------- End User System ------------------------- //



// ------------------------- Role System  ------------------------- //
app.post("/v1/roles/create", rolesController.handleCreateRole);
app.get("/v1/roles", rolesController.handleGetAllRoles);
app.get("/v1/roles/:id", rolesController.handleGetRoleById);
app.put("/v1/roles/update/:id", rolesController.handleUpdateRoles);
app.delete("/v1/roles/delete/:id", rolesController.handleDeleteRoles);

// ------------------------- End Role System ------------------------- //



// ------------------------- Courses System ------------------------- //

app.get("/v1/courses", coursesController.handleGetAllCourses);
app.post("/v1/courses/create", middleware.authenticate, uploadPicture.fields([{name: "picture"}]), coursesController.handleCreateCourse);
app.get("/v1/courses/:id", middleware.authenticate, coursesController.handleGetCourseById);
app.put("/v1/courses/update/:id", middleware.authenticate, uploadPicture.fields([{name: "picture"}]), coursesController.handleUpdateCourseById);
app.delete("/v1/courses/delete/:id", middleware.authenticate, coursesController.handleDeleteCourseById);
app.get("/v1/courses/user_id/:user_id", middleware.authenticate, coursesController.handleGetCourseByUserId);
app.get("/v1/courses/created_at/:createdAt", middleware.authenticate, coursesController.handleGetCourseByCreatedAt);

// ------------------------- End Courses System ------------------------- //


// ------------------------- Transaction System ------------------------- //

// app.post("/v1/transactions/create", middleware.authenticate, transactionsController.handleCreateTransaction);
// app.get("/v1/transactions/user/:id", middleware.authenticate, transactionsController.handleGetTransactionByUserId);
// app.get("/v1/transactions/owner/:id", middleware.authenticate, transactionsController.handleGetTransactionByOwnerId);
// app.put("/v1/transactions/update/:id", middleware.authenticate, transactionsController.handleUpdateTransactionById);
// app.get("/v1/transactions/:id", middleware.authenticate, transactionsController.handleGetTransactionById);
// app.get("/v1/transactions/notification/:id", middleware.authenticate, transactionsController.handleGetTransactionNotification);

// ------------------------- End Transaction System ------------------------- //

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});