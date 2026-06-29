type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
      {children}
    </button>
  );
}