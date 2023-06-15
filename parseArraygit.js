let jsonString = '{"start_date":1677024000000,"my_object_id":34345,"first_delivery_date":1677456000000}'
let myArray = JSON.parse(jsonString);
// output = [{value: myArray}];
console.log([{value: myArray}])