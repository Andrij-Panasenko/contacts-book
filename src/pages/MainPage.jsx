import { useSelector } from 'react-redux';
import ContactForm from '../components/contact-form';
import { selectContacts } from '../redux/selectors';
import ContactItem from '../components/contact-item';

export default function MainPage() {
  const {resources} = useSelector(selectContacts);

  return (
    <>
      <div className="container mx-auto p-9">
        <div className="flex gap-10 justify-center">
          <ContactForm />
          <ul>
            {resources && resources.map((item) => (
              <ContactItem key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
