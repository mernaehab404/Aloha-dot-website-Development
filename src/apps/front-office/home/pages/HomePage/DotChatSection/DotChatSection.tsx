import dotchat from "assets/images/dotchatIcon.png";
import dotChatWithLogo from "assets/images/dotchatWithLogo.svg";
import applyStore from "assets/images/downloadApple.svg";
import googleStore from "assets/images/downloadPlay.svg";
import qr from "assets/images/QR.svg";
export default function DotChatSection() {
  return (
    <div>
      <div className="lg:w-4/5 w-11/12 m-auto bg-blue-600  rounded-xl py-16 flex flex-col lg:flex-row lg:gap-0 gap-4 justify-evenly my-10">
        {/* Left section with app description */}
        <div className="text-center lg:text-left flex flex-col items-center md:items-start justify-evenly">
          <div>
            <div className="flex items-center md:justify-start justify-center space-x-4">
              <div className="bg-white rounded-lg p-5">
                <img src={dotchat} alt="Dotchat Logo" className="w-16 h-16 " />
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold">Dotchat</h3>
                <p className="text-gray-200">Aloha Dot</p>
              </div>
            </div>
            <p className="text-gray-100 mt-4 w-3/5 m-auto md:mx-0">
              Groundbreaking platforms for chat, social media, payments, and
              more.
            </p>
          </div>

          <div className="flex md:flex-row flex-col mt-4 md:space-x-2 md:space-y-0 space-y-2">
            <img src={googleStore} alt="Google Play" className="w-48" />
            <img src={applyStore} alt="App Store" className="w-48" />
          </div>
        </div>

        {/* Right section with QR code */}
        <div className="flex flex-col items-center">
          <p className="text-white text-xl mb-10">
            Or Scan QR Code to download
          </p>

          <div className="bg-white flex flex-col items-center p-10 rounded-xl">
            <img src={qr} alt="QR Code" className="" />
            <div className="mt-2">
              <img src={dotChatWithLogo} alt="Dotchat App Icon" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
