import { Field } from 'formik';

export default function InputField({ label, id, ...rest }) {
  return (
    <>
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="mb-2 text-base color-gray-900">
            {label}
          </label>
        )}
        <Field
          {...rest}
          id={id}
          className="px-3 py-4 rounded border border-gray-500 shadow"
        />
      </div>
    </>
  );
}
