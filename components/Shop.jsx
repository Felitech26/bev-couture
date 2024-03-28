'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'


const links = [
  {name: 'Shop', path: '/shop'},
  {name: 'About Us', path: '/about'},
  {name: 'Contact', path: '/contact'},
  {name:  'Sign In', path: '/signin'},
  {name:  'Sign Up', path: '/signup'},

  
]

const Shop = () => {
  const pathname = usePathname();
  return (
    <div>
      {links.map((link, index) => {
        return (
          <Link 
          href={link.path} 
          key={index}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Shop