export default function Cards(props) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={props.info.HotelDescriptiveContent.Images[0].URL || props.info.HotelDescriptiveContent.Images[1].URL || props.info.HotelDescriptiveContent.Images[2].URL} alt="room image" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.info.HotelName}</div>
    <p class="text-gray-700 text-base">
        <b>Beds:</b> {props.info.HotelInfo.Beds}
    </p>
    <p class="text-gray-700 text-base">
    <b>Rating:</b> {props.info.HotelInfo.Rating}
    </p>
    <p class="text-gray-700 text-base">
    <b>Position:</b> {props.info.HotelInfo.Position.Latitude} {props.info.HotelInfo.Position.Longitude} 
    </p>
    <p class="text-gray-700 text-base">
    <b>Price:</b> Before Tax: {props.info.PricesInfo.AmountBeforeTax}$ , After Tax: {props.info.PricesInfo.AmountAfterTax}$
    </p>
  </div>
</div>

    )
}