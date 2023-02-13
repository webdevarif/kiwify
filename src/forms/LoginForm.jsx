import React from 'react'
import { useFormik } from 'formik';
import loginValidate from '../lib/validate';

const LoginForm = () => {
  const formik = useFormik({
      initialValues: {
          email: '',
          password: '',
      },
      validate: loginValidate,
      onSubmit
  });
  
async function onSubmit(values){
  console.log("SUBMITED");
}

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Single Group */}
      <div>
        <label for="form-email" class="block text-sm font-medium leading-5 mb-1 text-gray-700">E-mail</label>
        <input 
            type="text" 
            autocomplete="username" 
            name="email" 
            class={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'}`} 
            required
            {...formik.getFieldProps('email')}
            />
            
            {formik.errors.email && formik.touched.email ? <div class="mt-1 text-xs text-red-500">{formik.errors.email}</div>: null}
      </div>

      {/* Single Group */}
      <div className='mt-6'>
        <label for="form-email" class="block text-sm font-medium leading-5 mb-1 text-gray-700">Senha</label>
        <input 
          type="password" 
          autocomplete="current-password" 
          name="password" 
          class={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'}`} 
          required
          {...formik.getFieldProps('password')}
          />
          {formik.errors.password && formik.touched.password ? <div class="mt-1 text-xs text-red-500">{formik.errors.password}</div>: null}
      </div>

      <div class="mt-2 flex items-center justify-end">
        <div class="text-sm leading-5">
          <a href="/ResetPassword" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Esqueceu a senha?</a>
        </div>
      </div>

      <div class="mt-6">
        <span class="block w-full rounded-md shadow-sm">
          <button type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">Entrar</button>
        </span>
      </div>

    </form>
  )
}

export default LoginForm