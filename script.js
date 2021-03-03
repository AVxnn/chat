let socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");

// отправка сообщения из формы
document.forms.publish.onsubmit = function() {
    let outgoingMessage = this.message.value;
    console.log('Сообщение сохранено')
    socket.send(outgoingMessage);
    return false;
};

// получение сообщения - отобразить данные в div#messages
socket.onmessage = function(event) {
    let message = event.data;
    console.log('Сообщение добавлено')
    let messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('messages').prepend(messageElem);
}