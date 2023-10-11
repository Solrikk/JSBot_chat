const responses = {
  greetings: ["Hello!", "Hi!", "Hey there!"],
  questions: ["That's a good question.", "I'm not sure.", "Could you please clarify?"],
  answers: ["Yes, definitely!", "No, sorry.", "Maybe.", "I'm not sure."],
  phrases: ["Interesting.", "I see.", "Tell me more.", "That's fascinating."],
  database: {
    "What is your name?": "My name is AI Bot.",
    "How are you?": "I'm doing well, thank you!",
    "What is the weather like today?": "I'm sorry, I don't have access to real-time weather information."

  }
};

function generateResponse(question) {
  const randomIndex = Math.floor(Math.random() * 3);
  const lowercaseQuestion = question.toLowerCase();

  if (lowercaseQuestion.includes("hello") || lowercaseQuestion.includes("hi")) {
    return responses.greetings[randomIndex];
  } else if (question.endsWith("?")) {
    return responses.answers[randomIndex];
  } else if (question in responses.database) {
    return responses.database[question];
  } else {
    return responses.phrases[randomIndex];
  }
}

const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");

userInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    const question = userInput.value.trim();
    const response = generateResponse(question);

    displayMessage("You", question);
    displayMessage("AI", response);

    userInput.value = "";
    userInput.focus();
  }
});

function displayMessage(sender, message) {
  chatLog.innerHTML += "<p><strong>" + sender + ":</strong> " + message + "</p>";
}