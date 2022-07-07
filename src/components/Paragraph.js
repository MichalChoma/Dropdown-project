import React from 'react'

const Paragraph = ({children, key}) => (
    <p key={key} className="flex items-center mt-2 mb-1 text-gray-500 text-base hover:text-black duration-300 ">{children}</p>
)

export default Paragraph
