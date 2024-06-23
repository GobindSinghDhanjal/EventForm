import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      setValues({ ...values, submitted: true });
    } else {
      setValues({ ...values, submitted: false });
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
