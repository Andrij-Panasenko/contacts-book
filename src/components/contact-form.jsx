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
  const newContact = {

  }
};

export default function ContactForm({}) {
  return (
    <div className='w-full md:max-w-sm md:sticky md:top-9 md:left-0'>
      <h2 className='font-medium text-xl'>Create contact</h2>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-10">
          <InputField required label="First name" name="firstName" />
          <InputField required label="Last name" name="lastName" />
          <InputField label="Email" name="email" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
}
