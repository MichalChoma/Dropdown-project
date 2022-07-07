import React from 'react'

const Button = ({children, reverse}) => {
    
  return (
    <button className={reverse ? "w-full border-2 border-solid border-grey-500 py-2 px-3 rounded-xl shadow cursor-pointer text-gray-500 ease-in-out duration-300 hover:bg-transparent hover:text-black hover:border-black" : "bg-black text-white py-3 px-4 border-2 border-black rounded-xl shadow cursor-pointer font-bold ease-in-out duration-300 hover:bg-transparent hover:text-black"}>{children}</button>
  )
}

export default Button