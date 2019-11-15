import React from 'react'
import './App.css'

export default function Success(props){
        const {categories} = props
        const categoryList = categories.map(category => {
        return <li className="style-headline">
            <h2 className="style-title">{category.category}</h2>
            <img className="style-image" src={category.image}></img>
            <p>{category.description}</p>
            <p>{category.bullets}</p>
            <p>Uses: {category.uses}</p>
            <p>Limits: {category.limits}</p>
        </li>
    })   

    function randomResult(categoryList){
        return categoryList[Math.floor(Math.random() * categoryList.length)]
    }

    return (
            <div className="result-container">
                <h1>Your Conflict Style Is...</h1>
            <p>{randomResult(categoryList)}</p>
            
        
            {/* <p> Viewed as having a calm and quiet presence.</p>
            <ul className="result-list">
                <li>Driven by fear.</li>
                <li>Attempts to disempower others.</li>
                <li>Refuses to communicate.</li>
                <li>Withdraws or removes themselves from the conflict.</li>
                <li>Denies problems. Pretends nothing is wrong.</li>
            </ul>
         <p>Uses: When confrontation is dangerous or hostile. When time or space is needed to prepare a resolution.</p>
        <p>Limits: Issues remain unresolved and resurface.</p> */}
            </div>
    )

}
