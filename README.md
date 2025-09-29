
# Login & Signup with LocalStorage (Encrypted Passwords)

A simple **React.js** project demonstrating login and signup functionality using **localStorage**.
Passwords are hashed with `bcryptjs` before being stored, ensuring they are not saved as plain text.

---

## 🚀 Features

* User **Signup** with password encryption (`bcryptjs`).
* User **Login** with password verification.
* Credentials stored in **localStorage**.
* Basic form validation.
* Fully frontend only (no backend required).

---

## 🛠️ Tech Stack

* **React.js**
* **bcryptjs** for password hashing
* **LocalStorage** for user data persistence

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhinand-SD/login-signup-bcrypt-auth.git
   cd login-signup-bcrypt-auth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the project:

   ```bash
   npm run dev
   ```

---

## 📌 How It Works

1. On **Signup**:

   * The entered password is hashed with `bcryptjs`.
   * User data (email + hashed password) is stored in `localStorage`.

2. On **Login**:

   * The entered password is checked against the hashed password using `bcrypt.compareSync`.
   * If it matches, login is successful.

---

## 🔒 Notes

* This is a **frontend-only demo**.
* Not suitable for production apps (use a proper backend with sessions/JWTs for real authentication).
* LocalStorage can be accessed by anyone with access to the device/browser.

---

## 📄 License

This project is licensed under the MIT License.
You’re free to use, modify, and distribute it.

---

👨‍💻 Developed by **Abhinand SD**
