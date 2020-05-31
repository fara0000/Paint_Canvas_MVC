(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function Controller(model, view) {
    this._model = model;
    this._view = view;
}

Controller.prototype.init = function() {
    this._view.init();
}

module.exports = Controller;




},{}],2:[function(require,module,exports){
function Model() {

}




module.exports = Model;
},{}],3:[function(require,module,exports){
function View() {
    this._root = document.querySelector('div#root');
}
View.prototype.init = function() {
    const container_first = createDiv({class: 'container_first'});
    const container_second = createDiv({class: 'container_second'});
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class','canvas');
    canvas.setAttribute('width', '1000px');
    canvas.setAttribute('height', '500px');
    const colorInput = createInput({
        id: 'color',
        name: 'color',
        type:'color',
    });
    const rangeInput = createInput({
        id: 'range',
        name: 'range',
        type:'range',
    });

    container_first.append(canvas);
    this._root.append(container_first);
    container_second.append(colorInput); 
    container_second.append(rangeInput);
    this._root.append(container_second);
}

const createDiv = params => {
    const div = document.createElement('div');
    div.setAttribute('class', params.class)
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.textContent && (div.textContent = params.textContent);
    params.inner && (div.innerHTML = params.inner);

    return div;
}

const createInput = params => {
    const input = document.createElement('input');
    input.setAttribute('type', params.type || 'text');
    params.id && input.setAttribute('id', params.id);
    params.name && input.setAttribute('name', params.name);
    params.placeholder && (input.placeholder = params.placeholder);

    return input;
}
module.exports = View;


// const canvas = document.createElement('canvas');
// canvas.setAttribute('class', 'canvas');
// canvas.setAttribute('height', '500px');
// canvas.setAttribute('width', '500px');

// root.append(canvas);

},{}],4:[function(require,module,exports){
const Model = require('./Model.js');
const View = require('./View.js');
const Controller = require('./Controller.js');

function initProject() { 
    const view = new View(); 
    const model = new Model(); 
    const controller = new Controller(model, view);

    controller.init();
}

initProject();
},{"./Controller.js":1,"./Model.js":2,"./View.js":3}]},{},[4]);
