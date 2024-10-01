import hero from "assets/images/Phone.svg";

export default function HeroSectionNew() {
  return (
    <div className="min-h-70vh lg:min-h-90vh bg-gradient-to-tr from-[#deebfe] to-[#fff8d9] bg-opacity-75 backdrop-blur-md flex items-center justify-center">
      <div className="w-11/12 text-center">
        <img src={hero} className="mb-8 mx-auto" alt="Hero Image" />

        <p className="lg:w-5/12 text-center lg:text-4xl text-3xl font-bold mb-3 mx-auto">
          Innovative Solutions that move you forward.
        </p>
        <span className="lg:leading-10 leading-8">
          Groundbreaking platforms for chat, social media, payments, and more
        </span>
      </div>
    </div>
  );
}
