import React from 'react'
import './App.css'
import Fight from './Fight.png'

export default function Home(){
    return (
        <main>
           <img className="fight" src={Fight} ></img>
        </main>
    )
}