import { DocumentIcon } from "@heroicons/react/24/solid";
import { trans } from "@mongez/localization";
import joinimg from "assets/images/Framejoin.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function JoinUS() {
  // Define the validation schema directly
  const validationSchema = Yup.object({
    name: Yup.string().required(trans("NameIsRequired")),
    email: Yup.string()
      .required(trans("EmailIsRequired"))
      .email(trans("InvalidEmailFormat")),
    message: Yup.string().required(trans("MessageIsRequired")),
  });

  // Initialize formik
  const join = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      console.log("done");
      // sendDataToApi(values);
    },
  });

  return (
    <div className="w-11/12 sm:w-4/5 m-auto flex flex-col md:flex-row justify-center rounded-lg overflow-hidden">
      {/* Left Side: Image and Text */}
      <div className="relative md:w-2/5 my-auto w-full mb-7">
        <img
          src={joinimg}
          alt="join Us"
          className=" object-cover rounded-3xl sm:h-full w-full h-60"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        <div className="absolute inset-0 flex justify-center sm:items-start items-center sm:mt-10 w-11/12 m-auto ">
          <div className="text-white p-4">
            <h2 className="text-3xl font-bold w-4/5">
              {trans("WantToJoinOurTeam")}
            </h2>
            <p className="mt-2 text-sm text-gray-200">
              {trans(`weAreLooking`)}
            </p>
          </div>
        </div>
      </div>

      <form
        className="w-full md:w-1/2 px-8 bg-white"
        onSubmit={join.handleSubmit}>
        <div className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              {trans("name")}
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                <input
                  onBlur={join.handleBlur}
                  onChange={join.handleChange}
                  value={join.values.name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder={trans("nameEg")}
                  autoComplete="name"
                  className="block w-full border-0 bg-transparent py-4 pl-3 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
              {join.touched.name && join.errors.name ? (
                <div className="text-red-500 text-sm mt-1">
                  {join.errors.name}
                </div>
              ) : null}
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              {trans("email")}
            </label>
            <div className="mt-2">
              <input
                onBlur={join.handleBlur}
                onChange={join.handleChange}
                value={join.values.email}
                id="email"
                name="email"
                type="email"
                placeholder={trans("emailEg")}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-4 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {join.touched.email && join.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {join.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
              {trans("message")}
            </label>
            <div className="mt-2">
              <textarea
                onBlur={join.handleBlur}
                onChange={join.handleChange}
                value={join.values.message}
                id="message"
                name="message"
                rows={4}
                placeholder={trans("messageInfo")}
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {join.touched.message && join.errors.message ? (
                <div className="text-red-500 text-sm mt-1">
                  {join.errors.message}
                </div>
              ) : null}
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium leading-6 text-gray-900">
              {trans("attachment")}
            </label>
            <div
              className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-1"
              onDragOver={e => e.preventDefault()}
              onDrop={e => {
                e.preventDefault();
                // const files = e.dataTransfer.files;
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
                    <span>{trans("uploadFile")}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                    />
                  </label>
                  <p className="pl-1">{trans("dragAndDrop")}</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  {trans("anyFile")}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-6">
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              {trans("submit")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
