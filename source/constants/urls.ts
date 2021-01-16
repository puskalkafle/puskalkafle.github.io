const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
const flamingoUrl = process.env.NEXT_PUBLIC_FLAMINGOURL;

const urls = {
  apartments: `${baseUrl}/apartments`,
  services: `${baseUrl}/services`,
  hotelDetails: `${flamingoUrl}/view-hotel/:hotelId`,
  similarHotels: `${flamingoUrl}/get-similar-hotels/:hotelId`,
  featuredHotels: `${flamingoUrl}/get-featured-hotels`,
  autoSuggestHotels: `${flamingoUrl}/auto-suggest-names?name=searchParams`,
  searchLists: `${flamingoUrl}/listings`,
  agencyLogin: `${flamingoUrl}/login`,
  getRooms:`${flamingoUrl}/list-rooms/:hotelId`,
  listingParameters:`${flamingoUrl}/listing-parameters`



};

export default urls;
