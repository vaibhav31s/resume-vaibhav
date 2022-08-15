
import React from 'react'

const SubMenu = ({link,title,set}) => {
  return (
   
         <li onClick={()=> set(false)}>
                <a href={'#'+ link}>{title}</a>
        </li>

  )
}

export default SubMenu