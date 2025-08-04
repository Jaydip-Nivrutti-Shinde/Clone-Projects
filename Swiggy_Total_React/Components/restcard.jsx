export default function RestCard({ item }) {
  const imageUrl =
    'https://media-assets.swiggy.com/swiggy/image/upload/' +
    item.info.mediaFiles?.[0]?.url;

  const highlightLogo =
    'https://media-assets.swiggy.com/swiggy/image/upload/' +
    item.info.vendorOffer?.offerHighlights?.[0]?.logoCtx?.logo;

  const offerTitle = item.info.vendorOffer?.info?.title || '';
  const offerSubtitle = item.info.vendorOffer?.info?.subtitle || '';
  const offerDescription = item.info.customerOffer?.infos?.[0]?.description || '';

  return (
    <div className="my-10 mx-2 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 w-[350px] shrink-0 overflow-hidden">
      <div className="relative w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={item.info.name}
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute bottom-2 left-0 w-full px-3 flex justify-between text-white font-semibold z-20 text-sm">
          <span className="truncate">{item.info.name}</span>
          <span>{item.info.rating.value}⭐</span>
        </div>
      </div>

      <div className="px-4 py-2 text-sm text-gray-700 space-y-1">
        <div className="flex justify-between">
          <span className="truncate">{item.info.cuisines?.slice(0, 2).join(' & ')}</span>
          <span>{item.info.costForTwo}</span>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span className="truncate">{item.info.locationInfo?.formattedAddress}</span>
          <span>{item.info.locationInfo?.distanceString}</span>
        </div>

        {highlightLogo && (
          <div className="flex items-center gap-2 text-xs text-gray-800 bg-gray-100 w-fit px-2 py-1 rounded-xl mt-2">
            <img className="w-4 h-4" src={highlightLogo} alt="highlight" />
            <span>{item.info.vendorOffer.offerHighlights[0].logoCtx.text}</span>
          </div>
        )}
      </div>

      <div className="px-4 py-2 space-y-2">
        <div className="bg-green-500 text-white text-xs rounded-lg p-2 flex justify-between">
          <span>
            {offerTitle} {offerSubtitle}
          </span>
          <span className="font-semibold">{item.info.offerInfoV3?.vendorOffer?.subtext}</span>
        </div>
        <div className="bg-green-100 text-xs rounded-lg p-2 text-gray-800 text-left">
          {offerDescription}
        </div>
      </div>
    </div>
  );
}
