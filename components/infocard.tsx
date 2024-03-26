import Image from "next/image";
import profile from "../public/pro.png";


interface InfoCardsProps {
  assignedTo: string;
  position: string;
}


const Infocard : React.FC<InfoCardsProps> = ( {assignedTo , position} ) => {
  return (
    <div className="flex w-full h-[90px] bg-white border border-[#9ca3af]">
      <div className="flex-shrink-0 h-full p-6">
        <Image
          className="h-full rounded-full"
          src={profile}
          alt=""
          height="20"
          width="40"
        />
      </div>
      <div className="ml-3 p-5 w-full">
        <p className="text-2xl text-gray-900 whitespace-no-wrap">
          {assignedTo}
        </p>
        <p className="text-base text-gray-600 whitespace-no-wrap">{position}</p>
      </div>
    </div>
  );
};

export default Infocard;
