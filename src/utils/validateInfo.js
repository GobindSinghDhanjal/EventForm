export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (/\d/.test(values.name)) {
    errors.name = "Name should not contain numbers";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.age) {
    errors.age = "Age is required";
  } else if (values.age <= 0) {
    errors.age = "Age must be greater than 0";
  } else if (values.age >= 150) {
    errors.age = "Age must be less than 150";
  }

  if (values.attendingWithGuest === 'Yes') {
    if (!values.guestName) {
      errors.guestName = 'Guest name is required';
    } else if (/\d/.test(values.guestName)) {
      errors.guestName = 'Guest name should not contain numbers';
    }
  }

  return errors;
}
