
// Create Button to Generate Password
function generate( length = 10 ){
    var uppercase = "ABCDEFGHIHJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "01234566789";
    var special = "!@#$%^&*()_+-={}[]:<>";

    var all = uppercase + lowercase + numbers + special;

    var password = "";

    for (var index = 0; index < length; index++) { 
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
return password;
}
// Copy Button to Copy Generated password
function copy() { 
    var copyText = document.getElementById("password");
    copy.Text.select();
    copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Copied Password: " + copyText.value);
}

// Create Modifiers.