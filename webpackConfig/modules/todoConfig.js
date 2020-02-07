const path = require("path");

exports.config = {
    entry: {
        myApp: "../src/js/todo.jsx",
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "../../Modules/myApp/Assets/reactBuild/"),
    }
};
