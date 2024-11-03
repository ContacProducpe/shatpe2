const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let userCount = 0;

function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        userCount++;
        addMessage(`Anonimo ${userCount}: ${message}`);
        messageInput.value = ''; // Clear input
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
