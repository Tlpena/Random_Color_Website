const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const tweetForm = document.querySelector('#tweetform')
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}
let form = document.querySelector('form');
 
form.addEventListener('submit', function (evt){
    evt.preventDefault();
    
    let qtyInput = document.querySelector('#qty');
    let prodInput = document.querySelector('#product');
    
    let qtyValue = qtyInput.value;
    let prodValue = prodInput.value;
    
    let newLi = document.createElement('li');
    newLi.innerText = `${qtyValue} ${prodValue}`;
    
    const ul = document.querySelector('ul');
    ul.appendChild(newLi);
    
    qtyInput.value = "";
    prodInput.value = "";
 
})

input.addEventListener('input', function(e){
    h1.innerText = input.value;
})

const heading = document.querySelector('h1');
const input = document.querySelector('input');
 
input.addEventListener('input', function (e) {
    if (!this.value) {
        heading.innerText = `Enter Your Username`;
    } else {
        heading.innerText = `Welcome, ${this.value}`;
    }
});