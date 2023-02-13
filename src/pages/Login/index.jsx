import React from 'react';
import UnAuthorizedLayout from '../../layouts/UnAuthorizedLayout';
import LoginForm from '../../forms/LoginForm';

const Login = () => {
  return (
    <UnAuthorizedLayout title="Entrar na sua conta" url="/register" subtitle="fazer cadastro">
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </UnAuthorizedLayout>
  )
}

export default Login