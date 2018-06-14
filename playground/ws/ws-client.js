const ws = new WebSocket("ws://locahost:3000");
ws.onopen = function(){
    setTitle("Connected to Cyber Chat")
};

ws.onclose = function(){
    setTitle("DISCONNECTED");
};

ws.onmessage = function(payload){
    printMessage(payload.data);
};

document.forms[0].onsubmit = function () {
    let input = document.getElementById('message');
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    let p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
