(() => {
    'use strict'
  
    const form = document.querySelectorAll('.was-validated')

    Array.from(form).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        else {
            const fullBody = document.getElementById('fullBody')
            const inputEmail = document.getElementById('emailValidation').value
            
            fullBody.innerHTML = `<div class="container bg-white rounded-5 p-5 w-100 w-md-50 d-flex flex-column">
              <div>
                <img src="src/images/logo.svg" alt="success">
              </div>
              <h1 class="fw-bold my-4">Thanks for subscribing!</h1>
          
              <p class="mb-4">A confirmation email has been sent to <strong>${inputEmail}</strong> 
                Please open it and click the button inside to confirm your subscription.</p>
          
              <button type="button" class="btn py-2 text-white rounded-4" id="dismiss"><strong>Dismiss message</strong></button>
            </div>`
  
            const dismissButton = document.getElementById('dismiss')
  
            dismissButton.addEventListener('click', () => {
              window.location.reload()
            })
          }
  
        form.classList.add('was-validated')
      }, false)
    })    
  })()  