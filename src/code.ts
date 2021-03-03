import {fromEvent} from 'rxjs';

// fromEvent(document, 'click').subscribe(() => addItem('clicked'));


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

// [3,4,5,6].map(x => addItem(x))




