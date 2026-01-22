export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-stone-800 text-stone-400 hover:text-stone-100 rounded transition hover:bg-stone-600 mt-6"
      {...props}
    >
      {children}
    </button>
  );
}
