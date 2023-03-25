
const validateEmail = (mail)  =>
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }

  return (false)
}

const checkPassword = (inputtxt) => { 
  var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if(inputtxt.match(passw)) 
  { 
    return true;
  } else { 
    return false;
  }
}

const validateFullName = (inputtxt) => { 
  var name=  /^[a-zA-Z ]+$/;
  if(inputtxt.match(name)) 
  { 
    return true;
  } else { 
    return false;
  }
}
module.exports = { validateFullName, validateEmail, checkPassword };