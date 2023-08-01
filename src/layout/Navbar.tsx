import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
      <div className="px-10 py-2 bg-customGray flex justify-between items-center rounded-t-xl shadow-lg">
        <h1 className="text-base font-medium underline underline-offset-4">
          <span className="text-5xl font-bold">B</span>land
        </h1>
        <div className="md:flex gap-10 text-base uppercase hidden">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>

          {user?.email ? (
            <>
              <button className="uppercase">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
      <div className="px-10 py-2 bg-customApricot rounded-t-xl shadow-lg hidden md:flex items-center justify-end gap-5 font-medium text-xl">
        <div className="tooltip" data-tip="Cart">
          <BsCart3 />
        </div>
        <div className="tooltip" data-tip="Profile">
          <CgProfile />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
