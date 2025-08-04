export default function Grocerycard({ item }) {
  return (
    <div className="mx-3 w-[200px] text-center shrink-0">
      <img
        className="w-[200px] h-[200px] object-contain"
        src={'https://media-assets.swiggy.com/swiggy/image/upload/' + item.imageId}
        alt=""
      />
      <h2 className="mt-2">{item.action.text}</h2>
    </div>
  );
}
