const loginFromHandler = async (event) => {
    event.preventDefault(event);

    const username = document.querySelector('#userInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    console.log(username, password)
  
    if (username && password) {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ 
            username: username, 
            password: password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        };
    };
};

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#submitBtn').addEventListener('click', loginFromHandler);

  // document
  // .querySelector('.signup-form')
  // .addEventListener('submit', signUpFormHandler);
