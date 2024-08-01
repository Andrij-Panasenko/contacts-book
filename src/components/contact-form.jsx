import { Form, Formik } from 'formik';
import Button from './button';
import InputField from './input-field';
import { useDispatch } from 'react-redux';
import { createContact } from '../redux/operations';
import toast from 'react-hot-toast';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
};

export default function ContactForm({}) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { firstName, lastName, email } = values;

    const newContact = {
      'first name': [{ label: 'first name', modifier: '', value: firstName || ' ' }],
      'last name': [{ label: 'last name', modifier: '', value: lastName || ' ' }],
      email: [{ label: 'email', modifier: '', value: email }],
    };

    if (!firstName && !lastName) {
      toast.error(
        "Error: Either 'First name' or 'Last name' must be provided."
      );
      return;
    }

    dispatch(createContact(newContact));
  };

  return (
    <div className="w-full md:max-w-sm md:sticky md:top-9 md:left-0">
      <h2 className="font-medium text-xl">Create contact</h2>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form className="flex flex-col gap-10">
          <InputField label="First name" name="firstName" />
          <InputField label="Last name" name="lastName" />
          <InputField required label="Email" name="email" type="email" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
}
