import React from 'react'
import SignUpForm from './components/signup/Signup'
import OtpVerification from './components/OTPinput/otp/OtpVerification'
import { NewPassword } from './components/Newpassword/auth/NewPassword'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App