import React from 'react';
import UnAuthorizedLayout from '../../layouts/UnAuthorizedLayout';
import RegisterForm from '../../forms/RegisterForm';

const Register = () => {
  return (
    <UnAuthorizedLayout title="Criar nova conta" url="/login" subtitle="entrar na sua conta existente">
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </UnAuthorizedLayout>
  )
}

export default Register