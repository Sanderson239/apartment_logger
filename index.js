
if (!localStorage.apts) {
  localStorage.setItem('apts', JSON.stringify([]))
};

var apartments = JSON.parse(localStorage.apts);


function initMap() {
  var vancouver = {lat: 49.2827, lng: -123.1207};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: vancouver
  });





  if (localStorage.apts) {
    apartments = JSON.parse(localStorage.apts);
    createList();
  }
  apartments.forEach(apartment => {
    apartment.fetchGpsCoordinates = Apartment.prototype.fetchGpsCoordinates
    apartment.fetchGpsCoordinates()
    .then(coordinates => {
      let marker = new google.maps.Marker({
        position: coordinates,
        map: map
      })
    })
  })
}

class Apartment {
  constructor(name, address, description, landlord, size, price) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.landlord = landlord;
    this.size = size;
    this.price = price;
    this.favorite = false;
    apartments.push(this);
    this.createUrl()
  }


  createUrl() {
    let aptAdd = this.address
    let addressRegex = `${aptAdd.street.replace(' ', '+')},+${aptAdd.city.replace(' ', '+')},+${aptAdd.state}`
    this.markerUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressRegex}&key=AIzaSyAehpePt0KKDTY-K7nVNN2Rfs_ap20Bo-A`
  }

  fetchGpsCoordinates() {
  return fetch(this.markerUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
      return data.results[0].geometry.location
   })
  }




}

class Address {
  constructor(street, city, state, country, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
  }
}

class Landlord {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class Size {
  constructor(sqrFeet, bedrooms, bathroom, beds) {
    this.sqrFeet = sqrFeet;
    this.bedrooms = bedrooms;
    this.bathroom = bathroom;
    this.beds = beds;
  }
}

function createList(sites) {
  var ul = $('.apartment-list');
  for (let apartment of apartments) {
    ul.append(`<li>${apartment.name}</li>`);
  }
}
