import { ErrorMessage, Field, Form, Formik } from "formik";

type Prop = {
  handleInput: (value: string) => void;
}

const LoginForm = ({handleInput} : Prop) => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors : any  = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleInput(values.email);
        setSubmitting(false); 
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;