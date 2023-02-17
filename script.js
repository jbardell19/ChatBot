// Define the bot's personality
const personality = {
  greetings: [
    "Hello there! How can I assist you today?",
    "Greetings! How may I be of service?",
    "Hey there! What can I do for you?"
  ],
  questions: [
    "I'm not sure. What do you think?",
    "That's a great question. Let me think about it for a moment...",
    "Hmm, let me check my database and get back to you."
  ],
  statements: [
    "Interesting. Can you tell me more about that?",
    "I see. How does that make you feel?",
    "Fascinating. Can you explain that further?"
  ],
  farewells: [
    "Thank you for chatting with me. Have a great day!",
    "It was a pleasure talking with you. Come back anytime!",
    "Goodbye! Don't hesitate to contact me if you need anything else."
  ]
};

// Define the neural network configuration
const config = {
  hiddenLayers: [4, 4],
  learningRate: 0.5,
  activation: 'sigmoid',
  decayRate: 0.999
};

// Define the training data
const trainingData = [
  { input: 'Hello', output: 'greetings' },
  { input: 'Hi', output: 'greetings' },
  { input: 'Hey', output: 'greetings' },
  { input: 'What is your name?', output: 'questions' },
  { input: 'Who are you?', output: 'questions' },
  { input: 'How are you?', output: 'questions' },
  { input: 'What can you do?', output: 'questions' },
  { input: 'Do you like me?', output: 'statements' },
  { input: 'I like you', output: 'statements' },
  { input: 'Goodbye', output: 'farewells' },
  { input: 'See you later', output: 'farewells' },
  { input: 'Talk to you soon', output: 'farewells' }
];

// Train the neural network
const net = new brain.NeuralNetwork(config);
net.train(trainingData);

// Handle user input and generate bot responses
const messageForm = document.querySelector('#message-form');
const messagesList = document.querySelector('#messages');
messageForm.addEventListener('submit', event => {
  event.preventDefault();
  const userInput = event.target.querySelector('input[type="text"]').value;
  const botResponse = net.run(userInput.toLowerCase());
  const responseText = personality[botResponse][Math.floor(Math.random() * personality[botResponse].length)];
  const messageItem = document.createElement('li'); 
}
                             
