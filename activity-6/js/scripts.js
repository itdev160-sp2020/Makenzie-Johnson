// Array to store message
var messages = [];

// Message Type lookup object. Similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed data
var data = [
    {
        type: messageType.out,
        user: 'Makenzie',
        message: 'Hey Julian, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Julian',
        message: 'Hi Makenzie! No, how about Cheesecake Factory?'
    },
    {
        type: messageType.out,
        user: 'Makenzie',
        message: "Okay, I'll meet you at 6!"
    },
    {
        type: messageType.in,
        user: 'Julian',
        message: 'Alright, see you then!'
    }
];

// Message constructor function.
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message.
function createMessageElement(message){
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );
    
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    
    messageEl.className = message.type;
    
    return messageEl;
}

// Button click event handler to add new message.
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');
    
    switch (event.target.id){
        case 'send-button':
            user = 'Makenzie';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }
    
    if (messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        message.push(message);
        
        var el = createMessageElement(message);
        
        messageContainerEl.appendChild(el);
        
        messageInput.value = 'hello';
    }
}

function loadSeedData(){
    for(var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    
    var messagesContainerEl = document.getElementById('message-container');
    
    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)
        
        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onlick = addMessageHandler;
    
    loadSeedData();
};

init();