import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className=" text-yellow-400 fa-4x mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-sky-800 hover:bg-sky-950 rounded-md px-3 py-2 mt-4"
        >
          Go Back
        </Link>
      </section>
    </>
  );
}

export default NotFound;
