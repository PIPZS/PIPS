const form = document.getElementById('form')
const username = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const company = document.getElementById('company')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if(username.value === '' || username.value == null) {
        messages.push('Name is required')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = message.join(', ');
    }
    
})