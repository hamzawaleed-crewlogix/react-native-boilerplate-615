const phoneFormat = /^[0-9]+$/;
const phoneLandlineFormat = /^\(?([0]{1})\)?([0-9]{10})$/;
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameFormat = /^[a-zA-Z\s]+$/;
const nameFormatAlphaNumeric = /^[a-zA-Z0-9\s]+$/;

export const checkPhoneNumber = phoneNumber => {
  return phoneFormat.test(phoneNumber);
};
export const checkEmail = email => {
  return emailFormat.test(email);
};
export const checkName = name => {
  return nameFormat.test(name);
};
export const checkNameAlphaNumeric = name => {
  return nameFormatAlphaNumeric.test(name);
};
export const checkLandlinePhone = phoneNumber => {
  return phoneLandlineFormat.test(phoneNumber);
};
