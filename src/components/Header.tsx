function Header() {
  return (
    <header className="w-full flex justify-center  absolute px-6  py-3">
      <div className="w-full mx-auto flex justify-between  backdrop-blur-md items-center py-4 text-white">
        <h1 className="text-xl font-bold uppercase">AvatarSnap</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a
            href="#cta"
            className="bg-primary px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
