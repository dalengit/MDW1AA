// Synchronisation
console.log("Start");

const dbPassword = "h4ck3dl337";

const fetchUserProfile = (callback) => {
    setTimeout(() => {
        callback({
            profile: 'John Doe',
        });
    }, 3000);
};

const loginUser = (username, password, callback, failureCallback)=> {
    setTimeout(() => {
        console.log("Fetching user", username);

        if (password === dbPassword) {
            callback({ account : username });
        } else {
            failureCallback({ message: "Passwords did not match!"})
        }

        callback ({account: username});
    }, 2000);
};

// const callbackSuccess = (userReceived) =>{
//     console.log("Received User", userReceived);
// };

// Submitting a variable with a function 
const loggedInUser = loginUser('dalen@dalen.com', 'h4ck3dl337', (userReceived) => {
    console.log("Received user", userReceived);

    fetchUserProfile((profile) => {
        console.log("Profile received", profile);
    });
}, 
(errors) => {
    console.error(errors);
}
);

console.log("End");

// This is also known as callback hell 