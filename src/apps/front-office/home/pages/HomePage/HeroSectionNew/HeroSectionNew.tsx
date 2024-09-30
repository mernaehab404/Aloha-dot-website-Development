import hero from "assets/images/Phone.svg";
export default function HeroSectionNew() {
  return (
    <div className="min-h-70vh  lg:min-h-90vh bg-gradient-to-tr from-[#deebfe]  to-[#fff8d9] bg-opacity-75 backdrop-blur-md  flex flex-col justify-center items-center">
      <div className="lg:w-full w-11/12">
        <img src={hero} className="mb-8" alt="" />

        <p className="lg:w-5/12 text-center lg:text-4xl text-3xl font-bold mb-3 ">
          Innovative Solutions that move you forward.
        </p>
        <span className="lg:leading-10 leading-8">
          Ground breaking platforms for, chat, social media, payments and more
        </span>
      </div>
    </div>
  );
}
