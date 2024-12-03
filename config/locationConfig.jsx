import Geolocation from "@react-native-community/geolocation";

Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: "whenInUse",
    locationProvider: "gps",
    enableBackgroundLocationUpdates: true,
    locationProvider: "android"
})

export default Geolocation;