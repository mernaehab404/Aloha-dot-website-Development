import { trans } from "@mongez/localization";
import chinademographic from "assets/images/Aloha-dot-china.svg";
import egyptdemographic from "assets/images/Aloha-dot-egypt.svg";
function Demographic(): JSX.Element {
  return (
    <>
      <section id="demographic">
        <div className="my-10  w-11/12 m-auto  ">
          <h3 className="text-2xl leading-8 mb-2 font-semibold">
            {trans("employeeDemographics")}
          </h3>
          <p className="mb-5 text-gray-600 sm:text-sm text-xs">
            {trans("demographicDescription")}
          </p>
          <div className="flex md:flex-row flex-col justify-center  gap-5 overflow-hidden ">
            <img
              src={egyptdemographic}
              className=" transition-all  md:w-5/12"
              alt="egypt"
            />
            <img
              src={chinademographic}
              className="scale-y-100 sm:scale-y-105 transition-all md:w-5/12  "
              alt="china"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Demographic;
