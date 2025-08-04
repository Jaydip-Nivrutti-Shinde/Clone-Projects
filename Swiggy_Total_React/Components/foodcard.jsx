export default function FoodCard({ item }) {
  return (
    <div className="mx-3 w-[200px] text-center shrink-0">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={'https://media-assets.swiggy.com/swiggy/image/upload/' + item.imageId}
        alt=""
      />
    </div>
  );
}
