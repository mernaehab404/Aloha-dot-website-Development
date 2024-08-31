import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import NotFoundImage from "assets/images/notfound.jpg";
export default function NotFoundPage() {
  return (
    <>
      <Helmet title={trans("notFoundPage")} />

      <div className="mb-14">
        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="md:w-2/5 w-full m-auto"
        />
        <div className="flex  justify-center items-center ">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Go Back Home
          </Link>
          <p className="text-xl text-gray-600 mr-8">
            {" "}
            {` Oops! The page you're looking for doesn't exist.`}
          </p>
        </div>
      </div>
    </>
  );
}
