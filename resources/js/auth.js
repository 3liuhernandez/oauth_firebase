import { signInWithPopup, auth, firebaseProviders } from './firebase';


const request = (providerName) => {
    const provider = firebaseProviders[providerName];
    signInWithPopup(auth, provider)
        .then((result) => {
            /* // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = provider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result) */
            // ...
            console.log("result", {
                user1: result.user.providerData[0],
                user: result.user
            });
        })
        .catch((error) => {
            /* // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = provider.credentialFromError(error); */
            // ...

            console.log("error", error);
        });
};

jQuery(() => {
    $("#btn_login_google").on("click", () => {
        request("GoogleAuthProvider");
    });
});
