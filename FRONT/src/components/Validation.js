const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export function validation (userData){
const errors = {};
if(!regexEmail.test(userData.username)) errors.username ='Se requiere un Email Por favor Correjir';
if(!userData.username) errors.username='El usuario No puede estar Vacio';
if(userData.username.lenght > 35) errors.username='No puede tener mayor a 35 Caracteres';
if(!regexPassword.test(userData.password)) errors.password='la contraseña Debe tener al menos un numero.';
if(userData.password.lenght < 6 && userData.password.lenght > 10) errors.password='La Contraseña debe tener una Longitud entre 6 y 10 Caracteres';
return errors;
}

  