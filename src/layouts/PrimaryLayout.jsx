import React from 'react'

const PrimaryLayout = ({children}) => {
  return (
    <main className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {children}
        </div>
      </div>
  </main>
  )
}

export default PrimaryLayout