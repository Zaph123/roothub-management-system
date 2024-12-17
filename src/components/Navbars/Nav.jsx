const Nav = () => {
  return (
    <nav className="w-full sticky top-0 left-0 p-4 h-20">
      <div
      style={{boxShadow: "0 5px 10px #e9e9ff"}} 
      className="w-[80%] mx-auto px-5 py-5 flex items-center justify-between gap-3 bg-white rounded-full">
        <section>
          <div className="text-2xl font-bold text-primary">Roothub</div>
        </section>
        <section>
          <div className="flex items-center">
            <a href="#" className="p-3">Home</a>
            <a href="#" className="p-3">About</a>
            <a href="#" className="p-3">Contact Us</a>
          </div>
        </section>
        <section className="space-x-3">
          <a href="#" className="text-center rounded-xl inline-block p-3">Login</a>
          <a href="/auth/trainee" className="bg-primary hover:text-white text-white w-32 text-center rounded-full inline-block p-3">Get Started</a>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
