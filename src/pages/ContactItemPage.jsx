import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import InputField from '../components/input-field';
import Button from '../components/button';
import { Form, Formik } from 'formik';
import { addTags, currentContact } from '../redux/operations';
import { selectCurrentContact, selectIsLoading } from '../redux/selectors';

export default function ContactItemPage() {
  const contact = useSelector(selectCurrentContact);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const param = useParams();

  const user =
    contact && contact.length > 0
      ? {
          firstName: contact[0].fields['first name']?.[0]?.value,
          lastName: contact[0].fields['last name']?.[0]?.value,
          email: contact[0].fields.email?.[0]?.value,
        }
      : null;

  useEffect(() => {
    dispatch(currentContact(param.id));
  }, [param.id, dispatch, handleSubmit]);

  function handleSubmit(values) {
    const tagsArray = Object.values(values).flatMap((value) =>
      value.split(' ')
    );
    dispatch(addTags({ id: param.id, newTags: tagsArray }));
  }

  return (
    <>
      {contact &&
        contact.map((i) => (
          <div key={i.id} className="max-w-md mx-auto">
            <div className="flex gap-3 items-center mb-6">
              <img
                src={i.avatar_url}
                alt="User photo"
                className="w-20 h-20 rounded-full "
              />

              <div>
                <h2 className="capitalize font-medium text-base text-black inline">
                  {user.firstName}
                </h2>
                &nbsp;
                <h2 className="capitalize font-medium text-base text-black inline">
                  {user.lastName}
                </h2>
                <p className="font-medium text-base text-black mb-2">
                  {user.email}
                </p>
              </div>
            </div>

            <h2 className="capitalize font-medium text-base text-black mb-3">
              Tags
            </h2>
            {i.tags.length ? (
              <ul className="flex flex-wrap gap-2 mb-9">
                {i.tags?.map((tag, idx) => (
                  <li
                    key={idx}
                    className="bg-slate-300 rounded font-medium text-sm text-center flex flex-wrap p-2"
                  >
                    {tag.tag}
                  </li>
                ))}
              </ul>
            ) : (
              <h2 className="font-medium text-base text-black mb-9">
                There are no any added tags yet
              </h2>
            )}

            <Formik
              initialValues={{ add_tag: '' }}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
              }}
            >
              <Form>
                <div className="space-y-6 flex flex-col">
                  <InputField name="add_tag" placeholder="Add new tag" />
                  <Button disabled={isLoading} type="submit">
                    Add tag
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        ))}
    </>
  );
}
