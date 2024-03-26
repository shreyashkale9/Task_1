import Image from "next/image";
import plus from "../public/plus-button.png";
import Infocard from "./infocard";
import more from "../public/more.png";

type TableRowValues = {
  id: number;
  position: string;
  assignedTo: string;
  document: number;
};

interface SignatureProp {
  assignedTo: string;
  position: string;
}

const tableContents: TableRowValues[] = [
  {
    id: 1,
    position: "HOD Mechanical",
    assignedTo: "Dr. K. N. Chaugule",
    document: 118,
  },
  {
    id: 2,
    position: "HOD Electrical",
    assignedTo: "Dr. H. P. Shinde",
    document: 57,
  },
  {
    id: 3,
    position: "HOD Civil",
    assignedTo: "Dr. V. K. Haribhakta",
    document: 63,
  },
  {
    id: 4,
    position: "TPO, COEP Tech",
    assignedTo: "Dr. Mohan Khond",
    document: 31,
  },
  {
    id: 5,
    position: "Secretary Mindspark",
    assignedTo: "Mr. Vansh Gupta",
    document: 79,
  },
];

const SignaturePage: React.FC<SignatureProp> = ({ assignedTo, position }) => {
  return (
    <div className="min-h-full mt-28">
      <div className="flex flex-col bg-white mt-3 text-dark ml-4 min-h-[82vh]">
        <div className="flex justify-between items-center mb-4 mt-3 ml-10 mr-20">
          <h2 className="text-lg font-bold">Position</h2>
          <button className="flex bg-[#a78bfa] text-black font-bold py-2 px-4 rounded justify-between">
            <Image
              className="pr-2"
              src={plus}
              alt="user photo"
              height="30"
              width="30"
            ></Image>
            Add Position
          </button>
        </div>
        <div className="rounded-lg">
          <table className="w-[85%] h-[700px] ml-20 table-with-space">
            <thead>
              <tr className="bg-[#fdf2f8] h-[80px]">
                <th className="rounded px-4 py-2"> </th>
                <th className="rounded px-4 py-2">Position</th>
                <th className="rounded px-4 py-2">Assigned To</th>
                <th className="rounded px-4 py-2">Document</th>
                <th className="rounded px-4 py-2">More</th>
              </tr>
            </thead>
            <tbody>
              {tableContents.map((data) => (
                <tr key={data.id} className="bg-[#fdf2f8]">
                  <td className="rounded px-4 py-2 text-center">{data.id}</td>
                  <td className="rounded px-4 py-2 text-center">
                    {data.position}
                  </td>
                  <td className="px-6 py-4 ">
                    <div className="flex">
                      <Infocard
                        assignedTo={data.assignedTo}
                        position={data.position}
                      />
                    </div>
                  </td>
                  <td className="rounded px-4 py-2 text-center">
                    {data.document}
                  </td>
                  <td className="flex justify-center items-center h-full rounded px-4 py-2 align-center">
                    <Image className="max-w-full max-h-full" src={more} alt="More" height="25" width="25" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SignaturePage;
