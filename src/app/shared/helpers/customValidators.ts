export class CustomValidators {
  static EMAIL: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  static PHONE: RegExp = /^(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})$/;
  static PASSWORD: RegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"'\;:{\}\[\]\|\+\-\=\_\)\(\)\`\/\\\]])[A-Za-z0-9d$@].{7,}$/;
}