import React, { useRef, useState } from 'react';
import bcrypt from 'bcryptjs';

const PasswordEncrypt = () => {
  
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [signUp, setSignUp] = useState(false);
  const [message, setMessage] = useState("");
  const isError = /wrong|inCorrect|exist/i.test(message);

  setTimeout(()=> setMessage(''),5000);


  const handleSignUp = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const storedData = JSON.parse(window.localStorage.getItem('login'))

    const setEmail = storedData?.email

    if (email === setEmail) {
      setMessage("user is already exist");
      return;
    }

    // You can call post api here
    window.localStorage.setItem('login', JSON.stringify({ name, email, hashedPassword }))

  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    //You can call get api here
    const storedData = JSON.parse(window.localStorage.getItem('login'));
    const getHashedPassword = storedData?.hashedPassword;
    const setEmail = storedData?.email

    if (setEmail === email) {
      // Match password
      bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
        if (err) {
          throw err;
        } else if (!isMatch) {
          setMessage('email/password is wrong')
        } else {
          setMessage('Login successfull')
        }
      })
    }else{
      setMessage('Incorrect email')
    }

  }

  return (
    <div>
      <form>
        {
          signUp ? (
            <>
              <label>Create an account</label>
              <br />
              <input name='name' type='text' placeholder='Name' autoComplete='name' ref={nameInputRef} required/>
              <input name='email' type='text' placeholder='Email address' autoComplete='email' ref={emailInputRef} required/>
              <br />
              <input name='password' type='password' placeholder='Enter password' autoComplete='current-password' ref={passwordInputRef} required/>
              <br />
              <button type='submit' onClick={(e) => handleSignUp(e)}>Sign Up</button>
              <p >Already have an account? <span onClick={() => setSignUp(!signUp)}>Login</span></p>
            </>)
            : (<>
              <label>Log in</label>
              <br />
              <input name='email' placeholder='Email address' ref={emailInputRef} required/>
              <br />
              <input name='password' placeholder='Enter password' ref={passwordInputRef} required/>
              <br />
              <button type='submit' onClick={(e) => handleSignIn(e)}>Sign In</button>
              <p>Don't have an account? <span onClick={() => setSignUp(!signUp)}>Signup</span></p>
            </>
            )
        }
      </form>

      {message && <p className='msg' style={{background: isError ? "red": "green"}}>{message}</p>}
    </div>
  )
}

export default PasswordEncrypt
