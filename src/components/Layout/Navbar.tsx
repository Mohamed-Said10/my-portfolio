import '../Home/Home.css'

const Navbar = () => {
  return (
    <nav className="home p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center pl-40 pr-40">
        <div className="text-black">
          <h1 className="text-xl font-semibold hover:text-amber-500">Mohamed Said</h1>
        </div>
        <div className="text-black space-x-4">
          <a href="#" className="hover:text-amber-500 rounded-2xl px-6 py-1 font-semibold">HOME</a>
          <a href="#" className="hover:text-amber-500 rounded-2xl px-6 py-1 font-semibold">ABOUT</a>
          <a href="#" className="hover:text-amber-500 rounded-2xl px-6 py-1 font-semibold">WORK</a>
          <a href="#" className="hover:bg-amber-400 text-white rounded-2xl px-4 py-2 font-semibold bg-amber-500">CONTACT ME</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

