import { trans } from "@mongez/localization";
import demographic from "../../../../../../shared/assets/images/Aloha-dot-demographics-banner 1.svg";
import egyptdemographic from "../../../../../../shared/assets/images/Aloha-dot-egypt.svg";
import chinademographic from "../../../../../../shared/assets/images/Aloha-dot-china.svg";
function Demographic(): JSX.Element {
  return (
    <>
      <section id="demographic">
        <div className="my-10  w-4/5 m-auto   border-b border-gray-200">
          {/* <h3 className="mb-3 text-3xl " >
         {trans('employeeDemographic')}
        
        </h3> */}
          <h3 className="text-2xl leading-8 mb-5">
            <strong>Employee</strong> Demographic
          </h3>
          <p className="mb-5 text-gray-600 sm:text-sm text-xs">
            {trans("demographicDescription")}
          </p>
          {/* <img
            src={demographic}
            className="m-auto"
            alt="Aloha-dot-demographics-banner"
          /> */}
          <div className="flex md:flex-row flex-col justify-center  gap-5 overflow-hidden">
          <img src={egyptdemographic} className="hover:scale-105 transition-all  md:w-5/12" alt="egypt" />
          <img src={chinademographic}  className="hover:scale-105 transition-all md:w-5/12 " alt="china" />

          </div>
        </div>
      </section>
    </>
  );
}
export default Demographic;
