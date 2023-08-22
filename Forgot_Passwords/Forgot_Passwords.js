emailjs.init("REvVlGrHOuI_NS26I");

let correctVerificationCode = generateVerificationCode();

function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates random 6-digit number
}

function sendEmail() {
    const userEmail = document.getElementById('user-email').value;

    let templateParams = {
        to_name: "User",
        from_name: "tech-acharitech",
        to_email: userEmail,
        message: `Your verification code is ${correctVerificationCode}`
    };

    emailjs.send("service_tuulgmv", "template_9lk4lrw", templateParams)
        .then(function(response) {
            document.getElementById('response').textContent = 'Verification code sent!';
        }, function(error) {
            document.getElementById('response').textContent = 'Failed to send verification code.';
        });
}

function resetPassword() {
    const enteredCode = document.getElementById('verification-code').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (enteredCode !== correctVerificationCode) {
        document.getElementById('response').textContent = 'Incorrect verification code!';
        return;
    }

    if (newPassword !== confirmPassword) {
        document.getElementById('response').textContent = 'Passwords do not match!';
        return;
    }

    document.getElementById('response').textContent = 'Password reset successfully!';
}