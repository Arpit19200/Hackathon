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
import Header from './components/header/header.jsx'
import  NewsList from './components/NewsPage/NewsList.jsx'
import { JoinNetwork } from './components/CommunityPage/JoinNetwork.jsx'
import { LeaderboardView } from './components/leaderboard/LeaderboardView.jsx'
import Game from './components/SolveQuiz/Game.jsx'
import { ProfilePage } from './components/ProfilePage/profile/ProfilePage.jsx'

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
  },
  {
    path:"/Home",
    element:<App/>,
    children:[
      {
        path:"",
        element:<NewsList/>
      },
      {
        path:"Quiz",
        element:<Game/>
      },
      {
        path:"profile",
        element:<ProfilePage/>
      },
      {
        path:"ranking",
        element:<LeaderboardView/>
      },
      {
        path:"community",
        element:<JoinNetwork/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={route}/> 
  </StrictMode>,
)
