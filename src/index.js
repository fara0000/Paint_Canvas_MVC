let Model = require("./Model.js");
let View = require("./View.js");
let Controller = require("./Controller.js");

function initProject() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
}

initProject()