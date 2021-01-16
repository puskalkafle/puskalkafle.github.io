import axios, { Method } from 'axios';
import urls from '../constants/urls';

const makeRequest = async (
  url: string,
  method: Method,
  data?: any,
  headers?: any
) => {
  const response = await axios({
    url,
    method,
    data,
    headers,
  });
  return response;
};

axios.interceptors.request.use(async function (config) {
  config.headers = {
    ...config.headers,
    Authorization:
      'Basic ' + Buffer.from('flamingo:A2DczBtteEszJPmw').toString('base64'),
  };

  return config;
});

export const fetchApartments = async () => {
  return makeRequest(urls.apartments, 'GET').then((response) => response.data);
};

export const fetchServices = async () => {
  return makeRequest(urls.services, 'GET').then((response) => response.data);
};

export const getHotelDetails = async (_, hotelId: number) => {
  const reqUrl = urls.hotelDetails.replace(':hotelId', hotelId.toString());
  return makeRequest(reqUrl, 'GET').then((response) => response.data);
};

export const getSimilarHotels = async (_, hotelId: number) => {
  const reqUrl = urls.similarHotels.replace(':hotelId', hotelId.toString());
  return makeRequest(reqUrl, 'GET').then((response) => response.data);
};

export const fetchFeaturedHotels = async () => {
  return makeRequest(urls.featuredHotels, 'GET').then(
    (response) => response.data
  );
};

export const getAutoSuggestions = async (name: string) => {
  const reqUrl = urls.autoSuggestHotels.replace('searchParams', name);

  return makeRequest(reqUrl, 'GET').then((response) => response.data);
};

export const searchLists = async (params:any) => {
  const res = await axios.get(urls.searchLists, { params });
  return res.data;
}

export const agencyLogin = async (logindata: any) => {
  return makeRequest(urls.agencyLogin, "POST", logindata).then((response) => response.data);
};

export const getRooms = async (_, hotelId: number) => {
  const reqUrl = urls.getRooms.replace(':hotelId', hotelId.toString());
  return makeRequest(reqUrl, 'GET').then((response) => response.data);
};

export const fetchListingParameters = async () => {
  return makeRequest(urls.listingParameters, 'GET').then(
    (response) => response.data
  );
};













