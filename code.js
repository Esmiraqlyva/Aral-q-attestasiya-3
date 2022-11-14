const authorInput = document.getElementById("author");
const messageInput = document.getElementById("text");
const sendBtn = document.querySelector(".btn");
class Message {
    constructor(author, text) {
        this.author = author;
        this.time = gettime();
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.author}: ${this.text}`;
    }
    toHtml() {
        return `<p>${this.time} ${this.author}: ${this.text}</p></b>`;
    }
}
class Messenger {
    constructor() {
        this.history = [];
        this.historyelement = document.querySelector(`.history`);
    }
    show_history() {
        this.history.forEach((message) => {
            console.log(message.toString());
        });
    }
    send(author, text) {
        const message = new Message(author, text);
        this.history.push(message);
        const p = document.createElement("p");
        p.innerHTML = message.toHtml();
        this.historyelement.appendChild(p);
    }
}
function gettime() {
    let now =  new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
let messenger = new Messenger("messenger");
sendBtn.addEventListener("click", () => {
    const author = authorInput.value;
    const message = messageInput.value;
    authorInput.value = "";
    messageInput.value = "";
    messenger.send(author, message);
});