import * as Yup from "yup";

const passwordRegex =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  password: Yup.string()
   .matches(passwordRegex)
   .required("No valid"),
  confPassword: Yup.string()
   .required("No valid"),
  phoneNumber: Yup.string()
   .matches(phoneRegExp, "Phone number is not valid"),
});