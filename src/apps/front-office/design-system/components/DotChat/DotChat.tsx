import appStore from "../../../../../shared/assets/images/appStore.svg";
import dotchatlogo from "../../../../../shared/assets/images/dotcaht.png";
import playStore from "../../../../../shared/assets/images/googlePlay.svg";
import left2side from "../../../../../shared/assets/images/left2.svg";
import left3 from "../../../../../shared/assets/images/left3.svg";
import left4 from "../../../../../shared/assets/images/left4.svg";
import left6 from "../../../../../shared/assets/images/left6.svg";
import bg from "../../../../../shared/assets/images/PM70 1.svg";
import qrCode from "../../../../../shared/assets/images/QR.svg";
import leftside from "../../../../../shared/assets/images/Rectangle 57.svg";
import rigth2 from "../../../../../shared/assets/images/right2.svg";
import right3 from "../../../../../shared/assets/images/right3.svg";
import right5 from "../../../../../shared/assets/images/right5.svg";
import right7 from "../../../../../shared/assets/images/right7.svg";
import rightside from "../../../../../shared/assets/images/Untitled-1 1.svg";
export default function DotChat() {
  return (
    <div className=" w-11/12 m-auto">
      <div className="flex justify-center  items-center  mb-4 ">
        <img
          src={dotchatlogo}
          className="sm:w-1/4 w-1/2 mr-4"
          alt="dotchatlogo"
        />

        <p className="border-l-2  border-red-800 px-6">
          <strong>a revolutionally </strong>all-in-one app
        </p>
      </div>
      <img src={bg} className="m-auto w-full " alt="" />
      <div className="my-12">
        <h3 className="text-2xl  my-5 ">
          <strong>About </strong> DotChat
        </h3>
        <p className="mb-5 text-gray-500  text-lg">
          The first platform is an all-in-one ecosystem application named "Dot
          Chat." This social communication app integrates features like payment,
          mini-ecommerce, marketing, and social services. Aloha Dot's core value
          is that technology makes life better and easier.
        </p>
      </div>

      <hr />
      <div className="my-12">
        <h3 className="text-2xl  my-5 ">
          <strong>Dotchat </strong> Features
        </h3>
        <p className="mb-5 text-gray-500  text-lg">
          There are currently 7 features inside of dotchat! Explore how they
          look down below!
        </p>
      </div>
      <section
        id="1"
        className="my-12 flex flex-col md:flex-row items-center justify-around p-5 bg-white">
        {/* Left Side: Numbered label and text */}

        <div className="col-span-2 md:w-3/5 w-full ">
          <div className="font-bold sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              1
            </span>
            <p>
              {" "}
              <strong>Chat</strong> with friends
            </p>
          </div>
          <div className="hidden md:block ">
            <p className="text-gray-500 text-sm md:text-base mb-4 ">
              {" "}
              Chat with your friends, family members or even contact businesses
              to learn more about their new products, prices, locations or ask
              any questions you would like!
            </p>
            <img src={leftside} className="hidden md:block" alt="" />
          </div>
        </div>
        {/* Right Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto">
          <img
            src={rightside}
            className="w-full h-auto max-w-xs mx-auto"
            alt="Chat with friends"
          />
        </div>
      </section>
      <hr />
      <section
        id="4"
        className="my-12 flex flex-col md:flex-row items-center justify-around">
        {/* Right Side: Numbered label and text */}
        <div className="col-span-2 md:w-3/5 w-full order-1 md:order-2">
          <div className="sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              2
            </span>
            <p>
              <strong> Send </strong> payments
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 text-sm md:text-base mb-4">
              Payments with dotchat has never been easier! You can instantly and
              securely send your friends or family funds. Verification is
              necessary to gurantee a safe transaction.
            </p>
            <img
              src={rigth2}
              className="hidden md:block"
              alt="Payment process"
            />
          </div>
        </div>

        {/* Left Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto order-2 md:order-1">
          <img
            src={left2side}
            className="w-full h-auto max-w-xs mx-auto"
            alt="discover products"
          />
        </div>
      </section>

      <hr />
      <section
        id="3"
        className="my-12 flex flex-col md:flex-row items-center justify-around p-5 bg-white">
        {/* Left Side: Numbered label and text */}

        <div className="col-span-2  md:w-3/5 w-full ">
          <div className="sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              3
            </span>
            <p>
              <strong>Subscribe &</strong> pay your bills
            </p>
          </div>
          <div className="hidden md:block ">
            <p className="text-gray-500 text-sm md:text-base mb-4 ">
              Payments with dotchat has never been easier! You can instantly and
              securely send your friends or family funds. Verification is
              necessary to gurantee a safe transactio
            </p>
            <img src={left3} className="hidden md:block" alt="" />
          </div>
        </div>
        {/* Right Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto">
          <img
            src={right3}
            className="w-full h-auto max-w-xs mx-auto"
            alt="Subscribe"
          />
        </div>
      </section>
      <hr />
      <section
        id="4"
        className="my-12 flex flex-col md:flex-row items-center justify-around">
        {/* Right Side: Numbered label and text */}
        <div className="col-span-2 md:w-3/5 w-full order-1 md:order-2">
          <div className="sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              4
            </span>
            <p>
              <strong> Discover </strong> Products
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 text-sm md:text-base mb-4">
              Chat with your friends, family members or even contact businesses
              to learn more about their new products, prices, locations or ask
              any questions you would like!
            </p>
            <img
              src={left3}
              className="hidden md:block"
              alt="Payment process"
            />
          </div>
        </div>

        {/* Left Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto order-2 md:order-1">
          <img
            src={left4}
            className="w-full h-auto max-w-xs mx-auto"
            alt="discover products"
          />
        </div>
      </section>

      <hr />
      <section
        id="5"
        className="my-12 flex flex-col md:flex-row items-center justify-around p-5 bg-white">
        {/* Left Side: Numbered label and text */}

        <div className="col-span-2  md:w-3/5 w-full ">
          <div className="sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              5
            </span>
            <p>
              {" "}
              <strong>Sell</strong> products
            </p>
          </div>
          <div className="hidden md:block ">
            <p className="text-gray-500 text-sm md:text-base mb-4 ">
              Open your business on dotchat, sell and advertise your products
              and accept payments directly to your business account!
            </p>
            <img src={left3} className="hidden md:block" alt="" />
          </div>
        </div>
        {/* Right Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto">
          <img
            src={right5}
            className="w-full h-auto max-w-xs mx-auto"
            alt="Subscribe"
          />
        </div>
      </section>
      <hr />
      <section
        id="6"
        className="my-12 flex flex-col md:flex-row items-center justify-around">
        {/* Right Side: Numbered label and text */}
        <div className="col-span-2 md:w-3/5 w-full order-1 md:order-2">
          <div className="sm:text-3xl text-xl mb-7 flex items-center">
            <span className="border rounded-2xl py-4 px-6 font-bold mr-4">
              6
            </span>
            <p>
              <strong> Collect money </strong>from customers
            </p>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 text-sm md:text-base mb-4">
              Payments with dotchat have never been easier! You can instantly
              and securely send your friends or family funds. Verification is
              necessary to guarantee a safe transaction.
            </p>
            <img
              src={left3}
              className="hidden md:block"
              alt="Payment process"
            />
          </div>
        </div>

        {/* Left Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto order-2 md:order-1">
          <img
            src={left6}
            className="w-full h-auto max-w-xs mx-auto"
            alt="send payment"
          />
        </div>
      </section>

      <hr />
      <section
        id="7"
        className="my-12 flex flex-col md:flex-row items-center justify-around p-5 ">
        {/* Left Side: Numbered label and text */}

        <div className="col-span-2   md:w-3/5 w-full ">
          <div className="sm:text-3xl text-xl mb-7 flex md:items-center items-start ">
            <span className="border rounded-2xl py-3 px-6 font-bold mr-4">
              7
            </span>
            <p>
              <strong>Inventory</strong> & Shipping Management
            </p>
          </div>
          <div className="hidden md:block ">
            <p className="text-gray-500 text-sm md:text-base mb-4 ">
              Chat with your friends, family members or even contact businesses
              to learn more about their new products, prices, locations or ask
              any questions you would like!
            </p>
            <img src={left3} className="hidden md:block" alt="" />
          </div>
        </div>
        {/* Right Side: Mobile image */}
        <div className="md:ml-10 w-full md:w-auto">
          <img
            src={right7}
            className="w-full h-auto max-w-xs mx-auto"
            alt="Subscribe"
          />
        </div>
      </section>
      <hr />
      <div className="my-12 ">
        <div className="border rounded-xl  m-auto  py-6 md:w-3/5 w-2/3 flex md:flex-row flex-col justify-center items-center  md:gap-5 gap-2 ">
          <div>
            <img src={qrCode} className="md:w-11/12 w-28 md:mb-0 mb-8" alt="" />
          </div>
          <div>
            <p className="md:mb-7 mb-4 md:text-2xl text-xs text-center">
              <strong>Download now </strong> from the playstore
            </p>
            <div className="flex justify-around ">
              <img src={appStore} className="md:w-56 w-32" alt="" />
              <img src={playStore} className="md:w-56 w-32" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
