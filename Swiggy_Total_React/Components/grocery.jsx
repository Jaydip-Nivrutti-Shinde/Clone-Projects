import { groceryData } from "../DataSet/groceryData";
import Grocerycard from "./grocerycard";

export default function GrowCeryOption() {
  return (
    <div className="max-w-[80%] container mx-auto my-30">
      <h2 className="text-xl font-bold mt-5 mb-3">Shop groceries on Instamart</h2>

      <div className="flex flex-nowrap overflow-x-auto text-center">
  {groceryData.map((item) => (
    <Grocerycard key={item.id} item={item} />
  ))}
</div>

    </div>
  );
}
