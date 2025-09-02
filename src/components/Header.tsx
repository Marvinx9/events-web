import Logo from "/Logo.svg";

export function Header() {
  return (
    <header className="w-full py-5 gap-1.5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <img src={Logo} alt="logo of events platform" />
      <h1 className="text-gray-400">| Python Advanced</h1>
    </header>
  );
}
