import React from 'react';
import Logo from './kiwify-green-logo.png';

const UnAuthorizedHeader = (props) => {
  return (
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        {/* LOGOT */}
        <img src={Logo} alt="Workflow" class="mx-auto h-auto w-full max-w-[165px]" /> 
        {props.title && <h2 class="mt-6 text-center text-xl md:text-3xl leading-5 mb-3 font-extrabold text-gray-900">{props.title}</h2>}

       {props.subtitle &&<p class="mt-2 text-center text-base leading-5 text-gray-600">Ou <a href={props.url ? props.url : '/'} class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">{props.subtitle}</a></p>}
    </div>
  )
}

export default UnAuthorizedHeader