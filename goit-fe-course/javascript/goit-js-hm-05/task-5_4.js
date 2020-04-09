class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  append = function (str) {
    this._value = this.value + str
    return this._value
  }

  prepend = function (str) {
    this._value = str + this._value
    return this._value
  }

  pad = function (str) {
    this._value = str + this._value + str
    return this._value
  }

get value() {
    return this._value
  }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

 builder.prepend('^');
 console.log(builder.value); // '^.^'

 builder.pad('=');
 console.log(builder.value); // '=^.^='