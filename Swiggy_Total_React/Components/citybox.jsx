export default function CityBox({ item }) {
  return (
    <div className="border border-black w-60 m-5 flex justify-center items-center text-center rounded-2xl px-7 py-5"> 
      <a href={item.link}>{item.text}</a>
    </div>
  );
}
