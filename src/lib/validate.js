/** ******************************************************** *
 * LOGIN VALIDATION 
 * ********************************************************* */ 
export default function loginValidate(values) {
 const errors = {};
 
    // Validation for Email
 if (!values.email) {
    errors.email = 'Esse campo é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'O e-mail deve ser válido';
  }
  
 // Validation for Repeat Email
 if (!values.confirm_email) {
  errors.confirm_email = 'Esse campo é obrigatório';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.confirm_email)) {
  errors.confirm_email = 'O e-mail deve ser válido';
} else if (values.email !== values.confirm_email) {
  errors.confirm_email = 'O e-mail não confere';
}

    // Validation for Password  
 if (!values.password) {
    errors.password = 'Esse campo é obrigatório';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Deve ter mais de 8 e menos de 20 caracteres';
  } else if (values.password.includes(" ")){
    errors.password = "senha inválida";
  }

  // Validation for Confirm Password
  if (!values.re_password) {
    errors.re_password = 'Esse campo é obrigatório';
  } else if (values.password !== values.re_password) {
    errors.re_password = 'E-mail e Confirmar e-mail não correspondem';
  }
  
  // Validation for Terms and Conditions
  if (!values.agree_condition) {
    errors.agree_condition = 'Esse campo é obrigatório';
  }

  return errors;
}

/** ******************************************************** *
 * REGISTER VALIDATION 
 * ********************************************************* */
export function registerValidate(values) {
  const errors = {};

  // Validation for Username
  if (!values.username) {
    errors.username = 'Esse campo é obrigatório';
  } else if (values.username.includes(" ")) {
    errors.username = 'Nome de usuário Inválido';
  }

  // Validation for Email
  if (!values.email) {
    errors.email = 'Esse campo é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'O e-mail deve ser válido';
  }

  // Validation for Repeat Email
  if (!values.confirm_email) {
    errors.confirm_email = 'Esse campo é obrigatório';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.confirm_email)) {
    errors.confirm_email = 'O e-mail deve ser válido';
  } else if (values.email !== values.confirm_email) {
    errors.confirm_email = 'O e-mail não confere';
  }

  // Validation for Password
  if (!values.password) {
    errors.password = 'Esse campo é obrigatório';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Deve ter mais de 8 e menos de 20 caracteres';
  } else if (values.password.includes(" ")) {
    errors.password = "Senha inválida";
  }

  // Validation for Confirm Password
  if (!values.re_password) {
    errors.re_password = 'Esse campo é obrigatório';
  } else if (values.password !== values.re_password) {
    errors.re_password = 'E-mail e Confirmar e-mail não correspondem';
  }

  // Validation for Terms and Conditions
  if (!values.agree_condition) {
    errors.agree_condition = 'Esse campo é obrigatório';
  }

  return errors;
}
