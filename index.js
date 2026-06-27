// Check if someone is logged in by looking in localStorage, 
// loggedinuser is name given in login.js for the username and password saved

const loggedInUser = localStorage.getItem('loggedInUser');
const authSection = document.getElementById('authSection');
const welcomeSection = document.getElementById('welcomeSection');
const premuimCalculator = document.getElementById('premuimCalculator');

if (loggedInUser) {
   //if yes =
    authSection.innerHTML = `
        <div class="user-info">
            <i class="fa-solid fa-circle-user"></i>
            <span>Logged in as <strong>${loggedInUser}</strong></span>
            <button id="logoutBtn">
                <i class="fa-solid fa-arrow-right-to-bracket"></i> Logout
            </button>
        </div>
    `;

    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');  // delete saved user
        window.location.reload();                  // refresh page
    });

} else {
    //if no =
    authSection.innerHTML = `
        <a href="../Login/login.html">
            <i class="fa-solid fa-circle-user"></i> Login
        </a>
    `;
}

if(loggedInUser){
 welcomeSection.innerHTML = `
  <h1>Welcome ${loggedInUser},</h1>
    <strong>This is my first responding portfolio.<br>
   Since you have logged in you can use the premium features.</strong>
    `
} else {
    welcomeSection.innerHTML = `
    <h1>Welcome Visitor,</h1>
    <strong>This is my first responding portfolio.<br>
    If you want to access premium features make sure to log in.</strong>

    `
};



premuimCalculator.addEventListener("click", function(e) {

    if (loggedInUser) {
    } else {
        alert("Please Login to continue");
        e.preventDefault();
    }

});