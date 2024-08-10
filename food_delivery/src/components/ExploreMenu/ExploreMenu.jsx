import React from 'react'
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id=''explore-menu>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Whether you're craving a quick snack or a full-course meal, our app connects you with a wide range of culinary options, ensuring that your favorite dishes are just a few taps away</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt=" menu" />
                        <p>{item.menu_name}</p>
                     </div>

                    )
            })}
        </div>
      
    </div>
  )
}

export default ExploreMenu
