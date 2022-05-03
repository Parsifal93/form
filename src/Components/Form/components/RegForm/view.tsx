import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import Values from "../../index";
import {
  MyInput,
  LogForm,
  Label,
  Input,
  Button,
  StyledInlineErrorMessage,
} from "../GlobalStyleForm/styles";
import { validationSchema } from "../validation/validation";

const RegForm = () => {
  return (
    <LogForm>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          confPassword: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <MyInput>
                <Label htmlFor="firstName">
                  Firstname:
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Name"
                    type="text"
                    valid={touched.firstName && !errors.firstName}
                    error={touched.firstName && errors.firstName}
                  />
                </Label>
                {errors.firstName && touched.firstName && (
                  <StyledInlineErrorMessage>
                    {errors.firstName}
                  </StyledInlineErrorMessage>
                )}
              </MyInput>
              <MyInput>
                <Label htmlFor="firstName">
                  Lastname:
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Lastname"
                    type="text"
                    valid={touched.lastName && !errors.lastName}
                    error={touched.lastName && errors.lastName}
                  />
                </Label>
                {errors.lastName && touched.lastName && (
                  <StyledInlineErrorMessage>
                    {errors.lastName}
                  </StyledInlineErrorMessage>
                )}
              </MyInput>
              <MyInput>
                <Label htmlFor="Phone">
                  Phone:
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+38(____)___ __ __"
                    type="tel"
                    valid={touched.phoneNumber && !errors.phoneNumber}
                    error={touched.phoneNumber && errors.phoneNumber}
                  />
                </Label>
                {errors.phoneNumber && touched.phoneNumber && (
                  <StyledInlineErrorMessage>
                    {errors.phoneNumber}
                  </StyledInlineErrorMessage>
                )}
              </MyInput>
              <MyInput>
                <Label htmlFor="email">
                  Email:
                  <Input
                    id="email"
                    name="email"
                    placeholder="john@mail.com"
                    type="email"
                    valid={touched.email && !errors.email}
                    error={touched.email && errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => (
                    <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                  )}
                </ErrorMessage>
              </MyInput>
              <MyInput>
                <Label htmlFor="password">
                  Password:
                  <Input
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    valid={touched.password && !errors.password}
                    error={touched.password && errors.password}
                  />
                </Label>
              </MyInput>
              <MyInput>
                <Label htmlFor="password">Password confirmation:</Label>
                <Input
                  id="confPassword"
                  name="confPassword"
                  placeholder="********"
                  type="password"
                  valid={touched.confPassword && !errors.confPassword}
                  error={touched.confPassword && errors.confPassword}
                />
              </MyInput>
              <Button type="submit">Sing Up</Button>
            </Form>
          );
        }}
      </Formik>
    </LogForm>
  );
};

export default RegForm;
