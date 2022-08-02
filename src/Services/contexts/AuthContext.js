
import React, { useContext,useState,useEffect } from 'react'
import { auth } from '../Auth/firebase'
const AuthContext = React.createContext()


export function useAuth (){
    return useContext(AuthContext)
}
export function AuthProvider ({children})  {
const [currentUser, setcurrentUser] = useState()
const [Loading, setLoading] = useState(true)

function signup(email,password){
  return  auth.createUserWithEmailAndPassword(email,password)
}
function signin (email,password){
  return auth.signInWithEmailAndPassword(email,password)
}

function signout () {
  return auth.signOut()
}
useEffect(() => {
 const unsubscribe =  auth.onAuthStateChanged(user => {
    setcurrentUser(user)
    setLoading(false)
})
return unsubscribe
}, [])

const value = {
        currentUser,
        signup,
        signin,
        signout
    }

  return (
 <AuthContext.Provider value={value} >
    {!Loading && children}
 </AuthContext.Provider>
  )
}
