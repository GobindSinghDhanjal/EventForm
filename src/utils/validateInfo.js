export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (/\d/.test(values.name)) {
    errors.name = 'Name should not contain numbers';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.age) {
    errors.age = 'Age is required';
  } else if (isNaN(values.age) || values.age <= 0) {
    errors.age = 'Age must be a valid number greater than 0';
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
