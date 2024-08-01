export default function Button({ disabled, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`py-2.5 px-5 bg-transparent border border-gray-500 rounded text-base text-center text-black font-medium transition
          ${
            !disabled && 'hover:bg-slate-200 active:bg-slate-300 cursor-pointer'
          } ${disabled && 'cursor-default bg-gray-400'}`}
      />
    </>
  );
}
