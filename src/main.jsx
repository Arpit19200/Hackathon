import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom' 
import { Router } from 'react-router-dom'
import SignUpForm from './components/signup/Signup.jsx'
import LoginForm from './components/Sign-in/auth/LoginForm.jsx'
import OtpVerification from './components/OTPinput/otp/OtpVerification.jsx'
import { NewPassword } from './components/Newpassword/auth/NewPassword.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element:<SignUpForm/>,
  },
  {
    path:"/signin",
    element:<LoginForm/>
  },
  {
    path:"/otpverification",
    element:<OtpVerification/>
  },
  {
    path:"/ChangePassword",
    element:<NewPassword/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
