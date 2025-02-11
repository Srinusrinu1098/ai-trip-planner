import React from 'react'
import { Button } from '../ui/button'
import { useGoogleLogin } from '@react-oauth/google'


function Header() {
  const userInfo = localStorage.getItem("user")  
 
  const logOut = ()=>{
    localStorage.removeItem("user")
   
   
  }

  const signIN = useGoogleLogin({
    onSuccess : (resp)=> userProfile(resp),
    onError :(error) =>console.log(error)
  })

  return (
    <div className='flex justify-between items-center px-4 shadow-md py-2'>
      <img src ='/Srinus.png' className='w-20 h-12 rounded-full mt-2'/>
      {userInfo && <Button onClick ={logOut}>
        Logout
      </Button>}
      
    </div>
  )
}

export default Header
