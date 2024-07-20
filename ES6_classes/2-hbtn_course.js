  
export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
  
      if (typeof length !== 'number' || Number.isNaN(length)) {
        throw new TypeError('Number must be a number');
      }
  
      if (!Array.isArray(students)) {
        throw new TypeError('students must be an array');
      }
  
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength !== 'number' || Number.isNaN(newLength)) {
        throw new TypeError('Number must be a number');
      }
      this._length = newLength;
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (!Array.isArray(newStudents)) {
        throw new TypeError('students must be an array');
      }
      this._students = newStudents;
    }
  }
  