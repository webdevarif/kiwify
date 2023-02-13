import React from 'react'
import UnAuthorizedHeader from './Headers/UnAuthorizedHeader'

const UnAuthorizedLayout = ({ title, url, subtitle, children }) => {
  return (
    <main className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-3'>
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <UnAuthorizedHeader title={title} url={url} subtitle={subtitle}/>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {children}
          </div>
        </div>
        
      </div>
  </main>
  )
}

export default UnAuthorizedLayout