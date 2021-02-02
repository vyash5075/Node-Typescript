"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var studentController_1 = require("../controllers/studentController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.studentController = new studentController_1.StudentController();
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.status(200).send("Hello Good World!");
        });
        // Get all students
        app.route("/api/students").get(this.studentController.getStudents);
        // Create a new student
        app.route("/api/students").post(this.studentController.addNewStudent);
        // get a specific student
        app
            .route("/api/students/:studentId")
            .get(this.studentController.getStudentById);
        // update a specific student
        app
            .route("/api/students/:studentId")
            .put(this.studentController.updateStudent);
        // delete a specific student
        app
            .route("/api/students/:studentId")
            .delete(this.studentController.deleteStudent);
        // generate dummy data
        app.route("/api/dummy").get(this.studentController.generateDummyData);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map