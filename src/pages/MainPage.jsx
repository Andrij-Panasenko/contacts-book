import { useSelector } from 'react-redux';
import ContactForm from '../components/contact-form';
import { selectContacts } from '../redux/selectors';
import ContactItem from '../components/contact-item';

export default function MainPage() {
  const resources = useSelector(selectContacts);

  return (
    <>
      <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
        <ContactForm />
        <div className="w-full">
          <h2 className="font-medium text-xl mb-2">Contacts</h2>
          {resources?.length === 0 && (
            <h1 className="font-bold text-xl text-center">
              Seems like your contact list is empty. Please add some contact.
            </h1>
          )}
          <ul className="flex flex-col gap-5">
            {resources &&
              resources.map((item) => (
                <ContactItem key={item.id} data={item} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
