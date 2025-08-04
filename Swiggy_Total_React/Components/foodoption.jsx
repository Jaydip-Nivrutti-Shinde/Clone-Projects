import { foodData } from "../DataSet/foodData";
import FoodCard from "./foodcard";

export default function FoodOption() {
  return (
    <div className="max-w-[80%] container mx-auto my-30 ">
        <div className="flex flex-nowrap overflow-x-auto text-center">
            {foodData.map((item) => (
                <FoodCard key={item.id} item={item} />
            ))}
        </div>

    </div>
  );
}
