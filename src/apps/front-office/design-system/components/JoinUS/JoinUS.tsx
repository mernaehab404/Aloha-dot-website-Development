import { DocumentIcon } from "@heroicons/react/24/solid";
import join from "../../../../../shared/assets/images/Framejoin.svg";
export default function JoinUS() {
  return (
    <div className="w-4/5 m-auto flex flex-col md:flex-row justify-center rounded-lg overflow-hidden">
      {/* Left Side: Image and Text */}
      <div className="relative w-full md:w-2/5  my-auto">
        <img src={join} alt="Contact Us" className="rounded-3xl m-auto w-full  sm:h-full " />
        <div className="absolute inset-0 bg-black opacity-50  rounded-3xl"></div>
        <div className="absolute inset-0 flex  justify-center w-4/5 m-auto">
      <div className=" text-white p-4">
        <h2 className="text-3xl font-bold">Want to join our team?</h2>
        <p className="mt-2 text-sm text-gray-200">
          We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
        </p>
      
      </div>
    </div>
      </div>
      {/* Right Side: Form */}
      <form className="w-full md:w-1/2 px-8 bg-white">
        <div className="space-y-3">
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="E.g Merna Ehab"
                  autoComplete="username"
                  className="block w-full border-0 bg-transparent py-4 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E.g. ahmedkhaled@gmail.com"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-4 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write what you want ..."
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              Subject
            </label>
       
          </div>
          <div className="col-span-full">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium leading-6 text-gray-900">
              Attachment (Optional)
            </label>
            <div
              className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-1"
              onDragOver={e => e.preventDefault()}
              onDrop={e => {
                e.preventDefault();
                const files = e.dataTransfer.files;
                // Handle the files here
              }}>
              <div className="text-center">
                <DocumentIcon
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-gray-300"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  Any file type up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-6">
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
