import { useSelector } from 'react-redux';
import ContactForm from '../components/contact-form';
import { selectContacts } from '../redux/selectors';
import ContactItem from '../components/contact-item';

export default function MainPage() {
  const resources = useSelector(selectContacts);

  return (
    <>
      <div className="container mx-auto p-9">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
          <ContactForm />
          <div className="w-full">
            <h2 className="font-medium text-xl mb-2">Contacts</h2>
            <ul className="flex flex-col gap-5">
              {resources &&
                resources.map((item) => (
                  <ContactItem key={item.id} data={item} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
