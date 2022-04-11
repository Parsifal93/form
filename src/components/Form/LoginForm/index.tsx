import { Formik, Form, FormikHelpers } from "formik";
import { Input, LogForm, Title, MyInput, Label, Button } from "./styles";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <LogForm>
      <Title>Log In</Title>
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
      >
        <Form>
          <MyInput>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              name="email"
              placeholder="john@mail.com"
              type="email"
            />
          </MyInput>
          <MyInput>
            <Label htmlFor="password">Password:</Label>
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
          </MyInput>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </LogForm>
  );
};

export default LoginForm;
