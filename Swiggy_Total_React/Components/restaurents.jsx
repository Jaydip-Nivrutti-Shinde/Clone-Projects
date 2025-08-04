
import { restaurentData } from "../DataSet/restData";
import RestCard from "./restcard";

export default function RestOption() {
  return (

    <div className="max-w-[80%] container mx-auto my-30 ">
      <p className=" text-xl font-bold">Discover best restaurants on Dineout</p>
        <div className="flex flex-nowrap overflow-x-auto text-center ">
            {restaurentData.map((item) => (
                <RestCard key={item.info.id} item={item} />
            ))}
        </div>

    </div>
  );
}
