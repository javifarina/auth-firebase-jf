
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser]=useState({})

  //Unsuscribe Reupera el usuario Activo
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log(currentUser);
      setUser(currentUser);
    })
    return()=>{
      unsubscribe();
    }
  },[])
  //ingresar con cuenta creada
  const signIn =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  //create User in firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //function LogOut 
  const logout=()=>{
      return signOut(auth)
  }
  return (
    <UserContext.Provider value={{createUser, user, logout, signIn}}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
