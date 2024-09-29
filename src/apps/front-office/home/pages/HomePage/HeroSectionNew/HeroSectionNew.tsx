import hero from "assets/images/Phone.svg";
export default function HeroSectionNew() {
  return (
    <div className="min-h-90vh bg-gradient-to-tr from-[#deebfe]  to-[#fff8d9] bg-opacity-75 backdrop-blur-md  flex flex-col justify-center items-center">
      <img src={hero} className="mb-8" alt="" />

      <p className="lg:w-5/12 text-center lg:text-4xl text-2xl font-bold mb-3 ">
        Innovative Solutions that move you forward.
      </p>
      <span className="lg:leading-10 leading-6 text-center">
        Ground breaking platforms for, chat, social media, payments and more
      </span>
    </div>
  );
}
