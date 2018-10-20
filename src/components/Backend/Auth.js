import fb from 'FB-Config';
import firebase from 'firebase';

const authy=firebase.auth();

document.getElementById('btnSignUp').addEventListener('click', function(){
    console.log('click');
    let email= document.getElementById('txtEmail').value;
    let password= document.getElementById('txtPassword').value;

    authy.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    console.log('all done')
})

