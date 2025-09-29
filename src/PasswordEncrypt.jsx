import React, { useRef, useState } from 'react';
import bcrypt from 'bcryptjs';

const PasswordEncrypt = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [signUp, setSignUp] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    // You can call post api here
    window.localStorage.setItem('login', JSON.stringify({email, hashedPassword}))

  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    //You can call get api here
    const getHashedPassword = JSON.parse(window.localStorage.getItem('login').hashedPassword)
    console.log(getHashedPassword)
  }

  return (
    <div>
      <form>
        {
          signUp ? (
            <>
              <label>Create an account</label>
              <br />
              <input name='email' placeholder='Email address' ref={emailInputRef} />
              <br />
              <input name='password' placeholder='Enter password' ref={passwordInputRef} />
              <br />
              <button type='submit' onClick={(e) => handleSignUp(e)}>Sign Up</button>
              <p onClick={() => setSignUp(!signUp)}>Already have an account? Log in</p>
            </>)
            : (<>
              <label>Log in</label>
              <br />
              <input name='email' placeholder='Email address' ref={emailInputRef} />
              <br />
              <input name='password' placeholder='Enter password' ref={passwordInputRef} />
              <br />
              <button type='submit' onClick={(e) => handleSignIn(e)}>Sign In</button>
              <p onClick={() => setSignUp(!signUp)}>Don't have an account</p>
            </>
            )
        }
      </form>
    </div>
  )
}

export default PasswordEncrypt
