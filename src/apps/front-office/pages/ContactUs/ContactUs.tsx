import { trans } from "@mongez/localization";
import { GrLocation } from "react-icons/gr";
export default function ContactUs() {
  return (
    //
    <section className="bg-gray-100 ">
      <div className="">
        {/* <!-- Top Section: Image and Title --/> */}
        <div className="overflow-hidden text-center">
          {/* <img
            src={contact}
            alt="Contact Us"
            className="w-full h-64 object-cover"
          /> */}
          <div className="flex items-center justify-center bg-blue-600">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2 text-white">
                {trans("contact")}
              </h2>
              <p className="text-white">{trans("ifYouHave")}</p>
            </div>
          </div>
        </div>

        {/* <!-- Form and Contact Information Section --> */}
        <div className="w-11/12  md:w-3/4 m-auto  rounded-xl bg-white  border border-gray-300 overflow-hidden flex flex-col md:flex-row gap-7">
          {/* <!-- Left Column: Contact Form --> */}
          <div className="bg-white md:w-1/2 p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder={trans("name")}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder={trans("email")}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder={trans("messageInfo")}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-56"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                {trans("submit")}
              </button>
            </form>
          </div>
          {/* 
    <!-- Right Column: Contact Information --> */}
          <div className="bg-white md:w-1/2 p-6">
            <div className="mb-4">
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-blue-600  bg-blue-200 p-3 text-xl rounded-lg "></i>
                <div className="ml-3 mr-3">
                  <p className="font-bold ">{trans("PhoneNumber")}</p>
                  <span className="text-sm">+02 01226257810</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <i className="fa-brands fa-whatsapp  text-blue-600  bg-blue-200 p-3  text-2xl rounded-lg"></i>
                <div className="ml-3  mr-3">
                  <p className="font-bold ">{trans("WhatsApp")}</p>
                  <span className="text-sm">+02 01226257785</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <i className="fa-regular fa-envelope  text-blue-600 bg-blue-200 p-3  text-2xl rounded-lg"></i>
                <div className="ml-3  mr-3">
                  <p className="font-bold ">{trans("email")}</p>
                  <span className="text-sm">hr@alohadot.com</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <GrLocation className="text-blue-600  bg-blue-200 p-3  text-5xl rounded-lg" />
                <div className="ml-3  mr-3">
                  <p className="font-bold ">{trans("Location")}</p>
                  <span className="text-sm">{trans("NasrcityDistrict")}</span>
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
