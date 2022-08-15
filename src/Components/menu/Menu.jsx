import React from 'react'
import "./menu.scss"
import SubMenu from './SubMenu'
const Menu = ({menuOpen, setMenuOpen}) => {
    const data =[
       { link:"portfolio" ,title:"PortFolio", set:{setMenuOpen}},
       { link:"portfolio" ,title:"PortFolio", set:{setMenuOpen}},
       { link:"portfolio" ,title:"PortFolio", set:{setMenuOpen}},
       { link:"portfolio" ,title:"PortFolio", set:{setMenuOpen}},

        
    ]
      
  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
           <SubMenu link="portfolio" title="PortFolio" set={setMenuOpen} />
           <SubMenu link="works" title="Works" set={setMenuOpen}/>
           <SubMenu link="testimonials" title="Testinomials" set={setMenuOpen} />
           <SubMenu link="contacts" title="Contact" set={setMenuOpen}/>
        </ul>
    </div>
  )
}

export default Menu