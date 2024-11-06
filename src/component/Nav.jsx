import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="font-semibold h-16 flex items-center justify-end border-solid border-b-2 border-gray-300">
        <div className="flex  items-center gap-x-20 text-2xl px-20 font-bold">
            {/* <Link to="/">Home</Link> */}
            <div onClick={() => window.location.href = "/"} className="cursor-pointer">Home</div>

            <Link to="/owner">Owner</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
