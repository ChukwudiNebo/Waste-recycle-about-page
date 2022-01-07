const hamburger = document.querySelector('.hamburger');
let hamburgerOpen = false;
hamburger.addEventListener('click', () =>
{
    if (!hamburgerOpen)
    {
        hamburger.classList.add('open');
        hamburgerOpen = true;
    } else
    {
        hamburger.classList.remove('open');
        hamburgerOpen = false;
    }
});



const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userPassword = document.querySelector('.user-password');
const form = document.querySelector('.register-btn');


// Form blur event listeners
userName.addEventListener('blur', validateName);
userEmail.addEventListener('blur', validateEmail);

function validateName(e)
{
    const userName = document.querySelector('.user-name');
    const re = /^[a-zA-Z]{5,15}$/;

    if (!re.test(userName.value))
    {
        userName.classList.add('is-invalid'); 
    } else{
        userName.classList.remove('is-invalid'); 
    }
};

function validateEmail(e)
{
    const userEmail = document.querySelector('.user-email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(userEmail.value))
    {
        userEmail.classList.add('is-invalid'); 
    } else{
        userEmail.classList.remove('is-invalid'); 
    } 
};


// load event listeners function

form.addEventListener( 'click' , formField);


function formField(e){
    if (userName.value === "" || userEmail.value === "" || userPassword === "")
    {
        const alert = document.createElement('div');
        alert.classList = "alert alert-danger mt-3";
        alert.appendChild(document.createTextNode('Form incomplete'));
        document.querySelector(".card-body").appendChild(alert);
    } else
    {
        // remy make sure the submit button when clicked here is directed to your own login page
        const alert = document.createElement('div');
        alert.classList = "alert alert-danger mt-3";
        alert.appendChild(document.createTextNode('Data completed'));
        document.querySelector(".card-body").appendChild(alert);
    }

    setTimeout(function ()
    {
        document.querySelector('.alert').remove();
    }, 2000);

        document.querySelector('.user-name').value = "";
        document.querySelector('.user-email').value = "";
        document.querySelector('.user-password').value = "";
    
    e.preventDefault();
};


// clearFields();