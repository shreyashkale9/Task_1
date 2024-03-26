import Image from "next/image";
import profile from "../public/pro.png";
import notification from "../public/notification.png";


const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:p-8">
        <div>
          <span className="font-bold text-xl">Signature Tab</span>
        </div>
        <div className="flex">
          <button
            type="button"
            className="flex text-sm bg-white rounded-full md:me-0"
          >
            <Image
              className="rounded-full"
              src={profile}
              alt="user photo"
              height="30"
              width="32"
            />
          </button>
          <button className="pl-4">
              <Image
                className="rounded-full"
                src={notification}
                alt="notification photo"
                height="40"
                width="40"
              />
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
