import _ from "lodash";

export default function(errors) {
  const result = {};

  // err: {errors: {email: {message: "This email is already taken.", name: "ValidatorError",…}},…}
  // errors: {email: {message: "This email is already taken.", name: "ValidatorError",…}}
  // message: "User validation failed: email: This email is already taken."
  // name: "ValidationError"
  // _message: "User validation failed"

  //convert this to the output below
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  // result[email]=This email is already taken..
  // this is important because we destructured it on SignupForm.js global errors...

  return result;
}
