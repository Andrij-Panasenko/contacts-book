
export default function ContactItem({}) {
  return (
    <>
      <li className="relative bg-slate-100 rounded p-3.5 flex gap-3">
        <img
          className="w-14 h-14 rounded-full"
          src="https://live.devnimble.com/api/avatars/person_default"
          alt="Contact photo"
        />
        <div>
          <div className="flex gap-2 mb-2">
            <h2 className="capitalize font-medium text-base text-black ">
              First Name
            </h2>
            <h2 className="capitalize font-medium text-base text-black ">
              Last Name
            </h2>
          </div>
          <p className="font-medium text-base text-black mb-2">Email</p>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-slate-300 rounded font-medium text-sm text-center p-1">
              tags
            </li>
            <li className="bg-slate-300 rounded font-medium text-sm text-center p-1">
              tags
            </li>
            <li className="bg-slate-300 rounded font-medium text-sm text-center p-1">
              tags
            </li>
            <li className="bg-slate-300 rounded font-medium text-sm text-center p-1">
              tags
            </li>
          </ul>
        </div>

        <button className="absolute top-3.5 right-3.5 w-6 h-6">
          <span class="material-symbols-outlined">cancel</span>
        </button>
      </li>
    </>
  );
}
