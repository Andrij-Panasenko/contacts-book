import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
};

const handleSubmit = (values) => {
  console.log(values);
};

export default function ContactForm({}) {
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-10">
          <InputField required label="First name" name="firstName" />
          <InputField required label="Last name" name="lastName" />
          <InputField label="Email" name="email" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
}