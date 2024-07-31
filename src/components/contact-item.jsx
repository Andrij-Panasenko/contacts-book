export default function ContactItem({ data }) {
  const { avatar_url, tags, fields } = data;

  const firstName = fields['first name'][0].value;
  const lastName = fields["last name"]?.[0].value;
  const email = fields.email[0].value;


  return (
    <>
      <li className="relative bg-gray-100 rounded p-3.5 flex gap-3">
        <img
          className="w-14 h-14 rounded-full"
          src={avatar_url}
          alt="Contact photo"
        />
        <div>
          <div className="flex gap-2 mb-2">
            <h2 className="capitalize font-medium text-base text-black ">
              {firstName}
            </h2>
            <h2 className="capitalize font-medium text-base text-black ">
              {lastName}
            </h2>
          </div>
          <p className="font-medium text-base text-black mb-2">{email}</p>
          <ul className="flex flex-wrap gap-2">
            {tags &&
              tags.map((item) => (
                <li key={item.id} className="bg-slate-300 rounded font-medium text-sm text-center flex flex-wrap p-2">
                  {item.tag}
                </li>
              ))}
          </ul>
        </div>

        <button className="absolute top-3.5 right-3.5 w-6 h-6">
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </li>
    </>
  );
}
