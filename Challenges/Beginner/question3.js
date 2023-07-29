// TODO: Debug the following code so that all expected values are returned.

const example = () => {
  var a = 2;
  let b = 3;
  console.log(a + b); // Should return 5
  {
    var c = 5;
    let d = 6;
    console.log(c + d); // Should return 11
  }
  console.log(a + c); // Should return 7
  console.log(b + d); // Should return 9
};
