function greeting(person) {
  return "Hello, " + person?.name;
}

function introduce(person) {
  if((!person?.name || person?.name == '') && (!person?.age || person?.age == '')){
    return "Name and Age is required!";
  }

  if(!person?.name || person?.name == ''){
    return "Name is required!";
  }

  if(!person?.age || person?.age == ''){
    return "Age is required!";
  }


  return greeting(person) + ". I am " + person?.age + " years old.";
}

module.exports = {
  introduce,
  greeting
}