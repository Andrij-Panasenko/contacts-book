export default function Button({ ...props }) {
  return (
    <>
      <button
        {...props}
        className="py-2.5 px-5 bg-transparent cursor-pointer border rounded text-base text-center text-black font-medium hover:bg-slate-200 active:bg-slate-300 transition"
      />
    </>
  );
}
