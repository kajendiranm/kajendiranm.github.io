const form = document.querySelector('form')
const submitBtn = document.querySelector('form button')

const responseEl = document.querySelector('.form-response ')

const btnText = form.querySelector('.button-text')
const spinner = form.querySelector('.spinner')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


submitBtn.addEventListener('click', event => {
    event.preventDefault()

    let name = form.querySelector('#name')
    let email = form.querySelector('#email')
    let message = form.querySelector('#message')

    let shake = gsap.timeline()
    let shakeDuration = .06
    function shakeTheElement(element) {
        shake.to(element, {x: -7, duration: shakeDuration})
        .to(element, {x: 7, duration: shakeDuration})
        .to(element, {x: 0, duration: shakeDuration})
        .to(element, {x: -7, duration: shakeDuration})
        .to(element, {x: 7, duration: shakeDuration})
        .to(element, {x: 0, duration: shakeDuration})
    }
    
    if(name.value == '') {
        shakeTheElement(name)
        name.focus()
        return
    }
    else if(email.value === ''){
        shakeTheElement(email)
        email.focus()
        return
    }
    else if(message.value === '') {
        shakeTheElement(message)
        message.focus()
        return
    }
    if(!(emailRegex.test(email.value))){
        shakeTheElement(email)
        email.focus()
        return
    }


    btnText.classList.add('hide')
    spinner.classList.remove('hide')

    
    $.ajax({
        type: "POST",
        url: 'https://kajendiran.pythonanywhere.com/portfolio/post_feedback',
        data: {
            'name': name.value,
            'email': email.value,
            'message': message.value
        },
        success: response => {
            setTimeout(() => {
                responseEl.textContent = `Hey ${response.name}, I got your message sucessfully!`
                btnText.classList.remove('hide')
                spinner.classList.add('hide')
                name.value = '' 
                email.value = ''
                message.value = ''
            }, 700)
            setTimeout(() => {
                responseEl.textContent = ''
            }, 10000)
        },
        error: err => {
            btnText.classList.remove('hide')
            spinner.classList.add('hide')
        }
    })

    

})