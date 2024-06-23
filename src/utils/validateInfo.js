const validateInfo = (values) => {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Full Name is required';
  } else if (!/^[a-zA-Z\s]+$/.test(values.fullName)) {
    errors.fullName = 'Full Name should only contain letters and spaces';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d+$/.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be a number';
  }

  if ((values.position === 'Developer' || values.position === 'Designer') && !values.relevantExperience) {
    errors.relevantExperience = 'Relevant Experience is required';
  } else if (values.relevantExperience && values.relevantExperience <= 0) {
    errors.relevantExperience = 'Relevant Experience must be greater than 0';
  }

  if (values.position === 'Designer' && !values.portfolioURL) {
    errors.portfolioURL = 'Portfolio URL is required';
  } else if (values.portfolioURL && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
    errors.portfolioURL = 'Portfolio URL is invalid';
  }

  if (values.position === 'Manager' && !values.managementExperience) {
    errors.managementExperience = 'Management Experience is required';
  }

  if (!Object.values(values.skills).some(skill => skill)) {
    errors.skills = 'At least one skill must be selected';
  }

  if (!values.interviewTime) {
    errors.interviewTime = 'Preferred Interview Time is required';
  }

  return errors;
};

export default validateInfo;
