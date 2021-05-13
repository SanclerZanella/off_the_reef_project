// Initialize the email API
(function () {
    emailjs.init(emailJs());
})();

// Fetch the feedback form data and send
function sendMail(contactForm) {
    let userName = $(contactForm).find('#feedbackName');
    let userEmail = $(contactForm).find('#feedbackEmail');
    let userMessage = $(contactForm).find('#feedbackText');

    let templateParams = {
        'from_name': userName.val(),
        'from_email': userEmail.val(),
        'message': userMessage.val(),
    };

    emailjs.send("offTheReef", "off_the_reef", templateParams).then(function (response) {
        console.log('Feedback sent!', response.status, response.text);
    }, function (error) {
        alert('Oops! looks like we had some issues, please try again later.', error);
    });

    modal.hide(500);
};