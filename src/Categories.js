import React from 'react'
import "./App.css"

export default function Categories(props){
  function categoryList(){
      const {categories} = props
      return categories.map(category => {
      return <li className="style-headline">
          <h2>{category.category}</h2>
          <img className="style-image" src={category.image}></img>
          <p>{category.description}</p>
          <p>{category.bullets}</p>
          <p>{category.uses}</p>
          <p>{category.limits}</p>
          {/* <img className="style-image" src={category.image}></img> */}
      </li>
  })    
}  

  return (
          <div className="category-container">
              <ul>
                  {categoryList()} 
              </ul>
          </div>
  )
}