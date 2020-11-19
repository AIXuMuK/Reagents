document.addEventListener('DOMContentLoaded', function() {
    
    let showPassBtn = document.querySelector(".showPassBtn"),
        passwordInput = document.querySelector("#password");
        showPassBtn.addEventListener('click', ShowPassword);
    
    function ShowPassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
      }

    
    
    


});