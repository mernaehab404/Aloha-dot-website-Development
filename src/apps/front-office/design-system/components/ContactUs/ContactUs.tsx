import { GrLocation } from "react-icons/gr";
import contact from "../../../../../shared/assets/images/contacct.jpeg";
export default function ContactUs() {
  return (
    // <div className="w-4/5 m-auto flex flex-col md:flex-row justify-center rounded-lg overflow-hidden">
    //   {/* Left Side: Image and Text */}
    //   <div className="relative w-full md:w-2/5  my-auto">
    //     <img src={contact} alt="Contact Us" className="rounded-3xl m-auto w-full  sm:h-full " />
    //     {/* <div className="absolute inset-0 bg-black opacity-50  rounded-3xl"></div> */}
    //     {/* <div className="absolute inset-0 flex items-center justify-center">
    //   <div className="text-center text-white p-4">
    //     <h2 className="text-3xl font-bold">Contact us</h2>
    //     <p className="mt-2">
    //       We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
    //     </p>
    //     <ul className="mt-4 space-y-2 text-left">
    //       <li>
    //         <strong>Human resources:</strong> hr@alohadot.com
    //       </li>
    //       <li>
    //         <strong>Customer Support:</strong> cs@alohadot.com
    //       </li>
    //       <li>
    //         <strong>Phone:</strong> +201062229888
    //       </li>
    //     </ul>
    //   </div>
    // </div> */}
    //   </div>
    //   {/* Right Side: Form */}
    //   <form className="w-full md:w-1/2 px-8 bg-white">
    //     <div className="space-y-3">
    //       <div className="">
    //         <label
    //           htmlFor="username"
    //           className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
    //           Name
    //         </label>
    //         <div className="mt-2">
    //           <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
    //             <input
    //               id="username"
    //               name="username"
    //               type="text"
    //               placeholder="E.g Merna Ehab"
    //               autoComplete="username"
    //               className="block w-full border-0 bg-transparent py-4 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="sm:col-span-6">
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
    //           Email
    //         </label>
    //         <div className="mt-2">
    //           <input
    //             id="email"
    //             name="email"
    //             type="email"
    //             placeholder="E.g. ahmedkhaled@gmail.com"
    //             autoComplete="email"
    //             className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div className="col-span-full">
    //         <label
    //           htmlFor="message"
    //           className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
    //           Message
    //         </label>
    //         <div className="mt-2">
    //           <textarea
    //             id="message"
    //             name="message"
    //             rows={4}
    //             placeholder="Write what you want ..."
    //             className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 after:content-['*'] after:ml-0.5 after:text-red-500"
    //             defaultValue={""}
    //           />
    //         </div>
    //       </div>
    //       <div className="sm:col-span-6">
    //         <label
    //           htmlFor="subject"
    //           className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
    //           Subject
    //         </label>
    //         <div className="mt-2">
    //           <select
    //             id="subject"
    //             name="subject"
    //             autoComplete="subject-name"

    //            className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
    //             <option  value="" disabled selected hidden>
    //             Choose the main subject
    //             </option>
    //             <option>Sales</option>
    //             <option>Marketing</option>
    //             <option>Support</option>
    //           </select>
    //         </div>
    //       </div>
    //       <div className="col-span-full">
    //         <label
    //           htmlFor="file-upload"
    //           className="block text-sm font-medium leading-6 text-gray-900">
    //           Attachment (Optional)
    //         </label>
    //         <div
    //           className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-1"
    //           onDragOver={e => e.preventDefault()}
    //           onDrop={e => {
    //             e.preventDefault();
    //             const files = e.dataTransfer.files;
    //             // Handle the files here
    //           }}>
    //           <div className="text-center">
    //             <DocumentIcon
    //               aria-hidden="true"
    //               className="mx-auto h-12 w-12 text-gray-300"
    //             />
    //             <div className="mt-4 flex text-sm leading-6 text-gray-600">
    //               <label
    //                 htmlFor="file-upload"
    //                 className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
    //                 <span>Upload a file</span>
    //                 <input
    //                   id="file-upload"
    //                   name="file-upload"
    //                   type="file"
    //                   className="sr-only"
    //                   multiple
    //                 />
    //               </label>
    //               <p className="pl-1">or drag and drop</p>
    //             </div>
    //             <p className="text-xs leading-5 text-gray-600">
    //               Any file type up to 10MB
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="sm:col-span-6">
    //         <button
    //           type="submit"
    //           className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
    //           Submit
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <section className="bg-gray-100">
      <div className="w-11/12 md:w-3/4 m-auto p-8">
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
