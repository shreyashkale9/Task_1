// import Image from "next/image";
import Navbar from "../../components/navbar";
import Signature from "../../components/signature";
import Infocard from "../../components/infocard";


export default function Home() {
  return (
    <main className="flex flex-col bg-[#fdf2f8]" >
      <div>
        <Navbar />
      </div>
      <div>
        <Signature />
      </div>
      {/* <div>
        <Infocard />
      </div> */}
    </main>
  );
}
