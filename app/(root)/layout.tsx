import Sidebar from '@/components/shared/Sidebar';
import React from 'react'

const Layout = ({children} : { children: React.ReactNode}) => {
  return (
    <>
    <main className='root'></main>
    <Sidebar/>
    
    <div className='root-container'>
        <div className='wrapper'/>
        {children}
      </div>
      </>
  )
}

export default Layout;