import React from 'react'
import "./App.css"

export default function Categories(props){
  function categoryList(){
      const {categories} = props
      return categories.map(category => {
      return <li>
          {category.category}
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