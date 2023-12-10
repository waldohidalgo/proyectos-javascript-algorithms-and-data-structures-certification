const Person = function (first, last) {
  let first1 = first;
  let last1 = last;
  this.setFirstName = function (first) {
    first1 = first;
  };
  this.setLastName = function (last) {
    last1 = last;
  };

  this.setFullName = function (first, last) {
    first1 = first;
    last1 = last;
  };

  this.getFirstName = function () {
    return first1;
  };
  this.getLastName = function () {
    return last1;
  };

  this.getFullName = function () {
    return first1 + " " + last1;
  };
};
