const chatlog = document.querySelector(".chatlog");
const userInput = document.querySelector("#user-input");

userInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    let userMessage = userInput.value;
    let chatbotMessage;
    if (userMessage === "hi" || userMessage === "hello") {
      chatbotMessage = "Hello there!";
    } else if (userMessage === "how are you?") {
      chatbotMessage = "I'm doing well, thanks for asking.";
    } else {
      chatbotMessage = "I'm sorry, I don't understand.";
    }
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.textContent = userMessage;
    let chatbotDiv = document.createElement("div");
    chatbotDiv.classList.add("chatbot");
    chatbotDiv.textContent = chatbotMessage;
    chatlog.appendChild(userDiv);
    chatlog.appendChild(chatbotDiv);
    userInput.value = "";
  }
});
