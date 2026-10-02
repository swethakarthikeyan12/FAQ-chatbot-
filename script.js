
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const faqs = [
    {
        question: "hello",
        answer: "Hello! 👋 How can I help you?"
    },
    {
        question: "hii",
        answer: "Hello! 👋 How can I help you?"
    },
    {
        question: "college name",
        answer: "The college is EASA College of Engineering and Technology."
    },
    {
        question: "courses",
        answer: "EASA offers Engineering and Technology programs including CSE, AI & ML, Cyber Security, ECE, EEE, Mechanical, IT and AI & Data Science."
    },
    {
        question: "course",
        answer: "EASA offers Engineering and Technology programs including ECE, CSE, AI & ML, Cyber Security, EEE, Mechanical, IT and AI & Data Science."
    },
    {
        question: "timing",
        answer: "The chatbot's sample college timing is 9:00 AM to 4:00 PM."
    },
    {
        question: "time",
        answer: "The chatbot's sample college timing is 9:00 AM to 4:00 PM."
    },
    {
        question: "location",
        answer: "EASA College of Engineering and Technology is at Navakkarai, Palakkad Main Road, Coimbatore, Tamil Nadu - 641105."
    },
    {
        question: "address",
        answer: "EASA College of Engineering and Technology is at Navakkarai, Palakkad Main Road, Coimbatore, Tamil Nadu - 641105."
    },
    {
        question: "contact",
        answer: "Please contact the college office for further information."
    },
    {
        question: "admission",
        answer: "For admission information, please contact the college admission office or visit the official EASA College website."
    },
    {
        question: "thank",
        answer: "You're welcome! 😊"
    },
    {
        question: "thanks",
        answer: "You're welcome! 😊"
    },
    {
        question: "bye",
        answer: "Goodbye! 👋 Have a great day!"
    }
];

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    const answer = findAnswer(message);

    setTimeout(function() {
        addMessage(answer, "bot");
    }, 300);

    userInput.value = "";
}

function findAnswer(message) {

    const text = message.toLowerCase();

    for (let faq of faqs) {

        if (text.includes(faq.question)) {
            return faq.answer;
        }
    }

    return "Sorry, I don't know the answer to that question. Please try another question.";
}

function addMessage(message, type) {

    const messageDiv = document.createElement("div");

    if (type === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}