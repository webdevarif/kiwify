import React from 'react'
import { useFormik } from 'formik';
import registerValidate from '../lib/validate';

const RegisterForm = () => {
  const formik = useFormik({
      initialValues: {
          email: '',
          confirm_email: '',
          password: '',
          re_password: '',
          agree_condition: '',
      },
      validate: registerValidate,
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
        <label for="form-email" class="block text-sm font-medium leading-5 mb-1 text-gray-700">Repetir e-mail</label>
        <input 
            type="text" 
            autocomplete="username" 
            name="confirm_email" 
            class={`form-input block py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${formik.errors.confirm_email && formik.touched.confirm_email ? 'border-red-500' : 'border-gray-300'}`} 
            required
            {...formik.getFieldProps('confirm_email')}
            />
            
            {formik.errors.confirm_email && formik.touched.confirm_email ? <div class="mt-1 text-xs text-red-500">{formik.errors.confirm_email}</div>: null}
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
      
      <div class="mt-6">
        <label class="relative flex items-start mt-2">
          <div class="flex items-center h-5">
            <input 
              type="checkbox" 
              name="agree_condition" 
              class={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ${formik.errors.agree_condition && formik.touched.agree_condition ? 'border-red-500' : 'border-gray-300'}`} 
              required
            {...formik.getFieldProps('agree_condition')}
          />
          </div> 
          <div class="ml-2 text-sm leading-5">
            <span class="font-medium text-gray-700">Eu li e aceito os 
              <a href="/termos-de-uso" target="_blank" class="underline"> termos de uso</a>, 
              <a href="/licenca-de-uso-software" target="_blank" class="underline"> termos de licença de uso de software</a>, 
              <a href="/politica-de-conteudo" target="_blank" class="underline"> política de conteúdo</a> da Kiwify 
            </span>
            {formik.errors.agree_condition && formik.touched.agree_condition ? <div class="mt-1 text-xs text-red-500">{formik.errors.agree_condition}</div>: null}
          </div>
        </label>
      </div>

      <div class="mt-6">
        <span class="block w-full rounded-md shadow-sm">
          <button type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">Criar conta</button>
        </span>
      </div>

    </form>
  )
}

export default RegisterForm;