import { GrLocation } from "react-icons/gr";
import contact from "../../../../../shared/assets/images/contacct.jpeg";
export default function ContactUs() {
  return (
    // 
    <section className="bg-gray-100 py-7">
      <div className="w-11/12  md:w-3/4 m-auto ">
   {/* <!-- Top Section: Image and Title --/> */}
   <div className="bg-white relative rounded-3xl overflow-hidden  mb-4">
        <img
          src={contact}
          alt="Contact Us"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50  rounded-3xl"></div>
        <div className="absolute inset-0 flex items-center ">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2 text-white">Contact us</h2>
            <p className="text-white">
              If you have any questions or need help, email us by filling out
              the form.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Form and Contact Information Section --> */}
      <div className="rounded-lg overflow-hidden flex flex-col md:flex-row gap-7">
        {/* <!-- Left Column: Contact Form --> */}
        <div className="bg-white md:w-1/2 p-6 border border-gray-300 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write your message"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-56"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
        {/* 
    <!-- Right Column: Contact Information --> */}
        <div className="bg-white md:w-1/2 p-6 border border-gray-300 rounded-xl">
          <div className="mb-4">
            <div className="flex items-center">
              <i className="fa-solid fa-phone text-blue-600  bg-blue-200 p-3 text-xl rounded-lg "></i>
              <div className="ml-3">
                <p className="font-bold ">Phone Number</p>
                <span className="text-sm">+02 01226257810</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <i className="fa-brands fa-whatsapp  text-blue-600  bg-blue-200 p-3  text-2xl rounded-lg"></i>
              <div className="ml-3">
                <p className="font-bold ">WhatsApp</p>
                <span className="text-sm">+02 01226257785</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <i className="fa-regular fa-envelope  text-blue-600 bg-blue-200 p-3  text-2xl rounded-lg"></i>
              <div className="ml-3">
                <p className="font-bold ">Email</p>
                <span className="text-sm">hr@alohadot.com</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <GrLocation className="text-blue-600  bg-blue-200 p-3  text-5xl rounded-lg" />
              <div className="ml-3">
                <p className="font-bold ">Location</p>
                <span className="text-sm">Nasr city, 7th district</span>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4735215874603!2d31.336107623622485!3d30.051958574919784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ff14ef17de1%3A0xe43e1dce1180fee3!2sAloha%20Dot!5e0!3m2!1sar!2seg!4v1723720549195!5m2!1sar!2seg"
              width="98%"
              height="245"
              style={{ borderRadius: "40px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      </div>
   
    </section>
  );
}
