/* eslint-disable */
declare global {
  interface Window {
    naver: {
      maps: {
        Map: any;
        LatLng: any;
        Marker: any;
        Event: any;
      };
    };
  }
}

export {};
