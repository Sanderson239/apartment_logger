function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    enter: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
};

var sampleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Winnetka&key=AIzaSyAehpePt0KKDTY-K7nVNN2Rfs_ap20Bo-A';

function createUrl(apartment) {
  let aptAdd = apartment.address
  let addressRegex = `${aptAdd.street.replace(' ', '+')},+${aptAdd.city.replace(' ', '+')},+{aptAdd.state}`
  return `https://maps.googleapis.com/maps/api/geocode/json?address=${addressRegex}&key=AIzaSyAehpePt0KKDTY-K7nVNN2Rfs_ap20Bo-A`
}

function fetchGpsCoordinates(url) {
fetch(url)
  .then(url => {
      return url.json()
  })
  .then(response => {
    return response.results[0].geometry.location
 })
}

function createMapMarker(coordinates, map) {
  let marker = new google.maps.Marker({
    position: coordinates,
    map: map
  })
  return marker
}
