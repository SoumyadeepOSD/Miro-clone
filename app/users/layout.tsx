import React from "react"

interface LayoutProps {
    children: React.ReactNode;
};


const layout = ({children}: LayoutProps) => {
  return (
    <div>
        <nav className="text-xs p-1 bg-red-500 text-white">
            I am a resuable navbar
        </nav>
        {children}
    </div>
  )
}

export default layout