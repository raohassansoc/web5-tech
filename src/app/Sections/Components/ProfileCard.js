import { Arrow_45 } from "@/app/SVGS/Arrows";
import Image from "next/image";
import Plus_Image from "@/../public/plus.svg";
const team = [
  {
    name: "Thien Nguyen",
    designation: "founder & ceo",
    image: require("@/../public/ProfileImages/p1.png"),
  },
  {
    name: "Manh Tran",
    designation: "Web3 Engineer",
    image: require("@/../public/ProfileImages/p3.png"),
  },
  {
    name: "Dip Karmakar",
    designation: "Senior research Defi and Web3",
    image: require("@/../public/ProfileImages/p4.png"),
  },
  {
    name: "Syed Musavir Chishti",
    designation: "Senior Tech Consultant",
    image: require("@/../public/ProfileImages/p2.png"),
  },
]
function ProfileCard({index, profile }) {

  return (
    <div className="border-y-2 border-l-2 border-[#353539] border-opacity-[0.6] ">
      <div className="gap-2 pt-5">
        <p className="text-center uppercase">{profile?.name}</p>
      </div>

      <div className="w-[400px] h-[310px] px-5 text-center profile-bg flex flex-col justify-center items-center">
        <Image src={team[index].image} />
      </div>
      <p className="uppercase text-right px-5 m-0">BIO</p>
      <div className="flex justify-between items-center">
        <p className="uppercase m-0 p-5">{profile?.designation}</p>
        <div className="px-5">
          <Image src={Plus_Image} />
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
