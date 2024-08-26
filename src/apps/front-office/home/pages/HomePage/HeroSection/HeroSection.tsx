import { trans } from "@mongez/localization";
import bg from "../../../../../../shared/assets/images/Group 1000002333.png";
import "../HomePage.css";
import { Link } from "@mongez/react-router";
const HeroSection: React.FC = () => {
  return (
    <div className=" h-full  flex items-center justify-center mt-10 ">
      <div
        className="hero w-11/12  bg-no-repeat rounded-2xl overflow-hidden flex flex-col justify-center bg-cover bg-center "
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.85) 0% 100%), url(${bg})`,
          minHeight: "70vh",
          // Ensures the div has at least the height of the viewport
        }}>
        <div className="content w-11/12 m-auto text-white ">
          {/* <p className="Building text-3xl  sm:text-4xl md:text-5xl   text-white sm:w-4/5 md:w-3/5 lg:w-1/2  mb-4 ">
          Building Revolutionary Payments and communication solutions
        </p> */}
          <div className="relative ">
          <p className="Building text-3xl sm:text-4xl md:text-5xl text-white sm:w-4/5 md:w-3/5 lg:w-1/2 mb-4 ">
        {trans("building")}
        <span className="relative inline-block ml-3">
          {trans("revolutionary")}
          <svg
            className="absolute  -bottom-2 w-full h-auto"
            viewBox="0 0 326 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11.5779C10.5353 9.18802 23.5871 -0.614998 33.3874 3.36515C38.5077 5.44463 39.703 12.6812 45.5847 13.3949C53.9365 14.4083 65.341 8.80741 72.8981 6.78107C79.3679 5.04627 90.8289 0.744209 97.772 3.5105C99.9289 4.36987 100.795 6.03141 102.302 7.43518C105.727 10.6255 109.928 12.8051 115.023 13.6856C125.393 15.4778 136.113 11.3849 145.69 8.67072C149.003 7.73179 162.719 1.84595 166.164 4.89141C169.211 7.58488 169.792 11.9923 172.699 14.8485C177.841 19.9007 195.587 10.691 200.491 9.14314C210.696 5.92187 220.142 2.40528 230.462 6.78107C236.072 9.15977 241.451 13.3056 247.669 14.5577C252.977 15.6266 259.967 12.3018 264.571 10.7057C270.587 8.62008 284.352 0.4001 290.752 4.96409C294.267 7.47162 295.586 12.9985 300.901 13.0678C308.533 13.1673 316.31 11.4163 323.771 10.2697"
              stroke="#0666F5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="1000" // طول المسار
              strokeDashoffset="1000" // سيتم تقليص هذا في الرسوم المتحركة
              className="animate-draw"
            />
          </svg>
        </span>{" "}
       {trans("Paymentsandcommunicationsolutions")}
      </p>
          </div>
          <p className="text-sm sm:text-base sm:w-1/2 text-gray-300 font-light mb-8 leading-7">
            {trans("creating")}
          </p>
          <div>
            <Link to="/contact-us">
            <button className="rounded-md sm:rounded-3xl bg-transparent border text-white hover:bg-blue-600 hover:border-blue-600 px-6 py-5 sm:py-2 w-full sm:w-auto mr-6 mb-4">
              {trans("contact")}
            </button>
            </Link>
       
            <button className=" rounded-md bg-blue-600 sm:rounded-3xl hover:bg-transparent hover:border hover:text-white px-6 py-5 sm:py-2 w-full sm:w-auto ">
              {trans("explore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
