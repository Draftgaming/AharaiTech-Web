function onSignIn(googleUser) {
    // Just authenticate, don't retrieve or log any user data here for security
    var id_token = googleUser.getAuthResponse().id_token;
    // Do something with id_token if needed, like sending it to your backend server for verification
}

function checkTerms() {
    var checkBox = document.getElementById("termsCheckbox");
    if (!checkBox.checked) {
        alert("אנא אשר את תנאי השימוש");
        return;
    }
    // Additional authentication logic if necessary
}