import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Menu = () => {
    let location = useLocation();
    const [menuItems, setMenuItems] = useState([
        {
            id: 1,
            menuItemName: 'Home',
            path: '/',
            menuItemState: true
        },
        {
            id: 3,
            menuItemName: 'Projects',
            path: '/projects',
            menuItemState: false
        },
        {
            id: 2,
            menuItemName: 'About',
            path: '/about',
            menuItemState: false
        },
        {
            id: 4,
            menuItemName: 'Contact',
            path: '/contact',
            menuItemState: false
        }
    ])

    return (
        <div>
            <div className="flex flex-col lg:bg-transparent space-y-10 lg:space-y-0 mt-5 bg-[#1c1c1c] lg:flex-row lg:gap-24 font-regFont justify-center text-lg items-center">
                {menuItems.map(item => {
                    return (<ul key={item.id}>
                        <li key={item.id} className={`text-white text-center ${item.path === location.pathname ? `font-bold` : `font-normal`} uppercase`}><Link key={item.id} to={item.path}>{item.menuItemName}</Link></li>
                    </ul>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Menu