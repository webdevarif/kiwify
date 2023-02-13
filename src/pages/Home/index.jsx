import React from 'react';
import UnAuthorizedLayout from '../../layouts/UnAuthorizedLayout'

const Home = () => {
  window.location.href = '/login'
  return (
    <UnAuthorizedLayout>
      <div>Home</div>
    </UnAuthorizedLayout>
  )
}

export default Home