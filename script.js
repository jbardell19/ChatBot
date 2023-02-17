const messageList = document.querySelector('.message-list');
const inputField = document.querySelector('.chat-input input[type="text"]');
const sendButton = document.querySelector('.chat-input button');

const net = new brain.recurrent.LSTM();

// Train the network on sample data
net.train([
  { input: 'Hello', output: 'Hi there!' },
  { input: 'How are you?', output: "I'm doing well, thank you." },
  { input: 'What is your name?', output: "My name is AI Bot." },
  { input: 'What can you do?', output: "I can assist you with anything you need!" },
  { input: 'Goodbye', output: 'See you later!' }
]);

// Respond to user input
function respondToUserInput(userInput) {
  const output = net.run(userInput);
  return output;
}

// Handle user input and bot response
function handleInput() {
  const userInput = inputField.value;
  const botResponse = respondToUserInput(userInput);
  const message = document.createElement('li');
  message.classList.add('message', 'user');
  message.innerHTML = `
    <div class="message-text">
      ${userInput}
    </div>
  `;
  messageList.appendChild(message);
  inputField.value = '';
  const botMessage = document.createElement('li');
  botMessage.classList.add('message', 'bot');
  botMessage.innerHTML = `
    <div class="message-text">
      ${botResponse}
    </div>
  `;
  messageList.appendChild(botMessage);
  messageList.scrollTop = messageList.scrollHeight;
}

// Event listeners
sendButton.addEventListener('click', handleInput);
inputField.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleInput();
  }
});
