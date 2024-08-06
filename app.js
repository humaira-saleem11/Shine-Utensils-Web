$(document).ready(function(){

    // ========= NAV BAR ============

    function updateNavbar() {
        var navbar = document.getElementById("navbar");
        var logo = document.querySelector(".navbar-brand img");
        var defaultLogo = logo.getAttribute("data-default-logo");
        var scrolledLogo = logo.getAttribute("data-scrolled-logo");
    
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            logo.setAttribute("src", scrolledLogo);
        } else {
            navbar.classList.remove("scrolled");
            logo.setAttribute("src", defaultLogo);
        }
    }
    
    // Set initial state based on scroll position
    document.addEventListener("DOMContentLoaded", updateNavbar);
    
    // Update navbar on scroll
    window.onscroll = updateNavbar;
   

// ========= home page(stores) ===========
    $('.hover-image').hide();
    
    $('.img-card').hover(
        function(){
            $(this).find('.normal-image').hide();
            $(this).find('.hover-image').show();
            $(this).css({
                'transition' : '2.5s ease-in'
            }
            )
            
        },
        
        function(){
            $(this).find('.hover-image').hide();
            $(this).find('.normal-image').show();
            $(this).css({
                'transition' : '2.5s ease-in'
            }
            )

        }
    )
    $('.affect-image').hide();
    
    $('.card-image').hover(
        function(){
            $(this).find('.real-image').hide();
            $(this).find('.affect-image').show();
            $(this).css({
                'transition' : '0.5s ease-in'
            }
            )
            
        },
        
        function(){
            $(this).find('.affect-image').hide();
            $(this).find('.real-image').show();
            $(this).css({
                'transition' : '0.5s ease-in'
            }
            )
            
        }
    )
    $('.after-image').hide();
    
    $('.pic-image').hover(
        function(){
            $(this).find('.natural-image').hide();
            $(this).find('.after-image').show()
            $(this).css({
                'transition' : '0.5s ease-in'
            }
            )
            
        },
        
        function(){
            $(this).find('.after-image').hide();
            $(this).find('.natural-image').show();
            $(this).css({
                'transition' : '2.5s ease-in'
            }
            )

        }
    )





})

//   ====CATEGORIES====== 

// ==========================================regix on modal==================
function validateForm() {
    // Get form values
    let firstName = document.getElementById('firstName').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let zipCode = document.getElementById('zipCode').value;
    let nameOnCard = document.getElementById('nameOnCard').value;
    let creditCardNumber = document.getElementById('creditCardNumber').value;
    let expMonth = document.getElementById('expMonth').value;
    let expYear = document.getElementById('expYear').value;
    let state = document.getElementById('state').value;
  
    // Regular expressions
    let nameRegex = /^[A-Za-z]{3,9}$/;
    let emailRegex = /^[a-zA-Z-]{3,20}[0-9]+@[a-z]{3,7}\.[a-z]{2,5}$/;
    let addressRegex = /^[A-Za-z0-9\s\-\,]+$/;
    let cardNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
  
    // Validation status
    let isValid = true;
  
    // Check for empty fields and set span error messages
    if (!firstName) {
      document.getElementById('firstNameError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('firstNameError').textContent = "";
    }
  
    if (!email) {
      document.getElementById('emailError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('emailError').textContent = "";
    }
  
    if (!address) {
      document.getElementById('addressError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('addressError').textContent = "";
    }
  
    if (!city) {
      document.getElementById('cityError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('cityError').textContent = "";
    }
  
    if (!zipCode) {
      document.getElementById('zipCodeError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('zipCodeError').textContent = "";
    }
  
    if (!nameOnCard) {
      document.getElementById('nameOnCardError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('nameOnCardError').textContent = "";
    }
  
    if (!creditCardNumber) {
      document.getElementById('creditCardNumberError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('creditCardNumberError').textContent = "";
    }
  
    if (!expMonth) {
      document.getElementById('expMonthError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('expMonthError').textContent = "";
    }
  
    if (!expYear) {
      document.getElementById('expYearError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('expYearError').textContent = "";
    }
  
    if (!state) {
      document.getElementById('stateError').textContent = "This field is required.";
      isValid = false;
    } else {
      document.getElementById('stateError').textContent = "";
    }
  
    // Validate first name
    if (firstName && !nameRegex.test(firstName)) {
      document.getElementById('firstNameError').textContent = "Enter a valid Name.";
      isValid = false;
    }
  
    // Validate email
    if (email && !emailRegex.test(email)) {
      document.getElementById('emailError').textContent = "Enter a valid Email Address.";
      isValid = false;
    }
  
    // Validate address
    if (address && !addressRegex.test(address)) {
      document.getElementById('addressError').textContent = "Enter a valid Address.";
      isValid = false;
    }
  
    // Validate name on card
    if (nameOnCard && !nameRegex.test(nameOnCard)) {
      document.getElementById('nameOnCardError').textContent = "Enter a valid Name.";
      isValid = false;
    }
  
    // Validate credit card number
    if (creditCardNumber && !cardNumberRegex.test(creditCardNumber)) {
      document.getElementById('creditCardNumberError').textContent = "Enter a valid credit card number.";
      isValid = false;
    }
  
    // If all fields are valid, show an alert
    if (isValid) {
      alert("Your Form submitted successfully");
      document.getElementById('firstName').value = ''
      document.getElementById('email').value = ''
      document.getElementById('address').value = ''
      document.getElementById('city').value = ''
      document.getElementById('zipCode').value = ''
      document.getElementById('nameOnCard').value = ''
      document.getElementById('creditCardNumber').value = ''
      document.getElementById('expMonth').value = ''
      document.getElementById('expYear').value = ''
      document.getElementById('state').value = ''
    }
  }
  
// ===== COMPARISON PAGE ========

let compareButton = document.getElementById("compareButton");
function compareproducts() {
    let product1Select = document.getElementById("product1");
    let product2Select = document.getElementById("product2");

    let product1Value = product1Select.value;
    let product2Value = product2Select.value;

    let products = {
        "product1": {
            "name": "frying pan",
            "quality": "High",
            "price": "3,685",
            "material": "Stainless Steel",
            "size": "12 inches",
            "weight": "2 lbs",
            "durability": "10 years"
        },
        "product2": {
            "name": "non-stick pan",
            "quality": "Medium",
            "price": "1,999",
            "material": "Aluminum",
            "size": "10 inches",
            "weight": "1.5 lbs",
            "durability": "5 years"
        },
        "product3": {
            "name": "single glaze pan",
            "quality": "High",
            "price": "Rs 2,999",
            "material": "Non-stick Coated Aluminum",
            "size": "11 inches",
            "weight": "1.8 lbs",
            "durability": "7 years"
        },
        "product4": {
            "name": "double glaze pan",
            "quality": "High",
            "price": "Rs 5,899",
            "material": "Non-stick Coated Aluminum",
            "size": "11 inches",
            "weight": "1.8 lbs",
            "durability": "7 years"
        },
        "product5": {
            "name": "marble pan",
            "quality": "High",
            "price": "Rs 3,699",
            "material": "Marble Coated Aluminum",
            "size": "11 inches",
            "weight": "1.9 lbs",
            "durability": "8 years"
        }
    };

    document.getElementById("product1-name").innerText = products[product1Value].name;
    document.getElementById("product1-quality").innerText = products[product1Value].quality;
    document.getElementById("product1-price").innerText = products[product1Value].price;
    document.getElementById("product1-material").innerText = products[product1Value].material;
    document.getElementById("product1-size").innerText = products[product1Value].size;
    document.getElementById("product1-weight").innerText = products[product1Value].weight;
    document.getElementById("product1-durability").innerText = products[product1Value].durability;

    document.getElementById("product2-name").innerText = products[product2Value].name;
    document.getElementById("product2-quality").innerText = products[product2Value].quality;
    document.getElementById("product2-price").innerText = products[product2Value].price;
    document.getElementById("product2-material").innerText = products[product2Value].material;
    document.getElementById("product2-size").innerText = products[product2Value].size;
    document.getElementById("product2-weight").innerText = products[product2Value].weight;
    document.getElementById("product2-durability").innerText = products[product2Value].durability;

    // Clear selections after comparison
    product1Select.value = "";
    product2Select.value = "";
    checkSelection();
}
function checkSelection() {
    if (product1Select.value !== "" && product2Select.value !== "") {
        compareButton.disabled = false;
    } else {
        compareButton.disabled = true;
    }

}

// =======discount page=========
let offer = document.getElementById('offer')

 $('#offer').hide()

function run(){
    $('#offer').toggle();
    $('#offer').slidedown(5000);
    

}

//  ========CONTACT PAGE =========


function check() {
    let inp1 = document.getElementById('floatingName').value;
    let sp1 = document.getElementById('span1');
    let reg1 = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    let inp2 = document.getElementById('floatingInput').value;
    let sp2 = document.getElementById('span2');
    let reg2 = /^[a-zA-Z]{3,20}[0-9]+@[a-z]{3,7}\.[a-z]{2,5}$/;

    let textareaInput = document.getElementById('floatingTextbox').value;
    let textareaSpan = document.getElementById('span3');
    let textareaReg = /^[a-zA-Z]+([ \t]+[a-zA-Z]+)*[ \t]*[.,]*[ \t]*$/;

    let valid = true;

    sp1.innerText = '';
    sp2.innerText = '';
    textareaSpan.innerText = '';

    if (inp1 === '') {
        sp1.innerText = 'Name is required.';
        valid = false;
    } else if (!reg1.test(inp1)) {
        sp1.innerText = 'Enter a valid Name.';
        valid = false;
    }

    if (inp2 === '') {
        sp2.innerText = 'Email is required.';
        valid = false;
    } else if (!reg2.test(inp2)) {
        sp2.innerText = 'Enter a valid Email Address.';
        valid = false;
    }

    if (textareaInput === '') {
        textareaSpan.innerText = 'Message is required.';
        valid = false;
    } else if (!textareaReg.test(textareaInput)) {
        textareaSpan.innerText = 'Leave correct message';
        valid = false;
    }

    if (valid) {
        let formModal = new bootstrap.Modal(document.getElementById('form-modal'));
        formModal.show();

        document.getElementById('floatingName').value = '';
        document.getElementById('floatingInput').value = '';
        document.getElementById('floatingTextbox').value = '';
    }
}

// ========reviews============

$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});

//  ============feedback ============

function sub() {
    let input1 = document.getElementById('floatingUser').value;
    let span1 = document.getElementById('feed1');
    let regex1 = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    let input2 = document.getElementById('floatingEmail').value;
    let span2 = document.getElementById('feed2');
    let regex2 = /^[a-zA-Z]{3,20}[0-9]+@[a-z]{3,7}\.[a-z]{2,5}$/;

    let textareaInput1 = document.getElementById('floatingTextarea').value;
    let textareaSpan1 = document.getElementById('feed3');
    let textareaReg1 = /^[a-zA-Z]+([ \t]+[a-zA-Z]+)*[ \t]*[.,]*[ \t]*$/;

    let val = true;

    // Initialize all span elements
    span1.innerText = '';
    span2.innerText = '';
    textareaSpan1.innerText = '';

    // Check for empty fields
    if (input1 === '') {
        span1.innerText = 'Name is required.';
        val = false;
    } else if (!regex1.test(input1)) {
        span1.innerText = 'Enter a valid Name.';
        val = false;
    }

    if (input2 === '') {
        span2.innerText = 'Email is required.';
        val = false;
    } else if (!regex2.test(input2)) {
        span2.innerText = 'Enter a valid Email Address.';
        val = false;
    }

    if (textareaInput1 === '') {
        textareaSpan1.innerText = 'Message is required.';
        val = false;
    } else if (!textareaReg1.test(textareaInput1)) {
        textareaSpan1.innerText = 'Leave correct message';
        val = false;
    }

    // If all fields are valid, show the success modal
    if (val) {
        let feedModal = new bootstrap.Modal(document.getElementById('feed-modal'));
        feedModal.show();

        document.getElementById('floatingUser').value = '';
        document.getElementById('floatingEmail').value = '';
        document.getElementById('floatingTextarea').value = '';

        let qualityRatings = document.getElementsByName('quality');
        for (let i = 0; i < qualityRatings.length; i++) {
            qualityRatings[i].checked = false;
        }

        let deliveryRatings = document.getElementsByName('delivery');
        for (let i = 0; i < deliveryRatings.length; i++) {
            deliveryRatings[i].checked = false;
        }
       
    }
}
