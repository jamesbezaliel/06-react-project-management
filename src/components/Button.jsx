export default function Button({ children, onCreateProject, ...props }) {
  return (
    <button
      className="mt-4 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-100 transition 
              rounded"
      {...props}
    >
      {children}
    </button>
  );
}
