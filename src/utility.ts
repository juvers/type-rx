export default function out(val:any):any{
    let d = document;
    let node = d.createElement("li");
    let textNode = d.createTextNode(val);
    node.appendChild(textNode);
    d.querySelector("#output").appendChild(node)
}