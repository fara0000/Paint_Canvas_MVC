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




// const inputDiv = document.createElement('div');
// root.appendChild(inputDiv);

// const input = document.createElement('input');
// input.setAttribute('id', 'color');
// input.value = '00000';
// input.type = 'color';
// inputDiv.appendChild(input); 

// const rangeDiv = document.createElement('div');
// root.appendChild(rangeDiv);

// const range = document.createElement('input');
// range.setAttribute('id', 'range');
// range.type = 'range';
// rangeDiv.appendChild(range);

// const ctx = canvas.getContext('2d');

// let isPressed = false;
// let newColor = 'black';

// document.getElementById('color').oninput = function() {
//     newColor = this.value;
// }
// canvas.addEventListener('mousedown', () => {
//     isPressed = true;
// })

// canvas.addEventListener('mouseup', () => {
//     isPressed = false;
// })

// canvas.addEventListener('mousemove', (e) => {
//     if(isPressed) {
//         ctx.beginPath();
//         ctx.arc(e.clientX, e.clientY, 10, 0, 2*Math.PI);
//         ctx.fillStyle = newColor;
//         ctx.fill();
//     }
// })