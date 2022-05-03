import { Formik, Form, FormikHelpers, ErrorMessage } from "formik";
import Values from "../../index";
import {
  MyInput,
  LogForm,
  Label,
  Input,
  Button,
  StyledInlineErrorMessage
} from "../GlobalStyleForm/styles";
import { validationSchema } from "../validation/validation";

const LoginForm = () => {
  return (
    <LogForm>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
        {({ errors, touched}) => {
          return (
            <Form>
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
                <Label htmlFor="password">Password:
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
              <Button type="submit">Log In</Button>
            </Form>
          );
        }}
      </Formik>
    </LogForm>
  );
};

export default LoginForm;
