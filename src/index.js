import _ from 'lodash';

function component() {
    var e = document.createElement('div');

    e.innerHTML = _.join(["hello", "world"], " ");

    return e;
}

document.body.appendChild(component());
