/* <script>
        // Show Sign Up Form
        function showSignUpForm() {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('signup-form').style.display = 'block';
        }

        // Show Login Form
        function showLoginForm() {
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }

        // Sign-up function to store details in localStorage
        function signUp() {
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            if (username && email && password) {
                // Store data in localStorage
                const user = { username, email, password };
                localStorage.setItem('user', JSON.stringify(user));
                alert('Sign Up Successful! Please Login.');
                showLoginForm(); // Show Login form after successful sign up
            } else {
                alert('Please fill in all fields!');
            }
        }

        // Login function to validate credentials
        function login() {
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser) {
                if (storedUser.username === username && storedUser.password === password) {
                    alert('Login Successful!');
                } else {
                    alert('Invalid username or password');
                }
            } else {
                alert('No user found. Please sign up first.');
            }
        }
    </script> */





    var Email = document.getElementById('email')
    var Pass = document.getElementById('pass')


    function signUp (){
      var email_val = document.getElementById('email').value;
      var username_val = document.getElementById('user_name').value;
      var pass_val = document.getElementById('pass').value;
      var confirmpass_val = document.getElementById('confirm_pass').value;
      localStorage.setItem('email_val',email_val)
      localStorage.setItem('username_val',username_val)
      localStorage.setItem('pass_val',pass_val)
      localStorage.setItem('confirmpass_val',confirmpass_val)
      
      if(pass_val === confirmpass_val){
      }
      else{
        alert('password not same')
      }
    }