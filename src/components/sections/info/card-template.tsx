import { Checkbox } from "@/components/ui/checkbox";
import { FaListOl } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

interface CardTemplateProps {
  item: {
    name: string;
    location: {
      province: string;
      city: string;
    };
    personal: {
      gender: string;
      age: number;
    };
    employmentStatus: string;
    education: {
      school: string;
      type: string;
    };
    lastJob: {
      title: string;
      company: string;
      begin: string;
      end: string;
    };
  };
}

const CardTemplate = (item: CardTemplateProps) => {
  const data = item.item;
  return (
    <div className="border-2 mb-4 flex items-center py-5 justify-between bg-stone-100 pr-5 hover:border-blue-800">
      <div className="flex gap-2 items-center">
        <Checkbox id="first" className="mr-5 ml-2" />
        <img
          src="/user-profile.png"
          alt="hello"
          className="w-12 h-12 rounded-full border-blue-800 border-2"
        />
        <div>
          <h3>{data.name}</h3>
          <div className="text-gray-600">
            <p>
              {data.location.province}/{data.location.city}
            </p>
            <p>
              {data.personal.gender}/{data.personal.age}
            </p>
            <p>{data.employmentStatus}</p>
          </div>
          <p>Incelenmedi</p>
        </div>
      </div>
      <div className="text-gray-600">
        <p>{data.education.school}</p>
        <p>{data.education.type}</p>
      </div>
      {data.lastJob ? (
        <div className="text-gray-600">
          <h3 className="text-blue-800">{data.lastJob.title}</h3>
          <p>{data.lastJob.company}</p>
          <p>
            {data.lastJob.begin}/{data.lastJob.end}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">is Deneyimi Belirtilmemiş</p>
      )}
      <div className="flex flex-col items-center gap-4">
        <FaListOl className="w-6 h-6" />
        <IoEyeOutline className="w-6 h-6" />
      </div>
    </div>
  );
};

export default CardTemplate;
