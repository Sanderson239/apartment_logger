const map = require(./index.html)

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
    this.fetchGpsCoordinates()
    this.createMapMarker()
  }


  createUrl() {
    let aptAdd = this.address
    let addressRegex = `${aptAdd.street.replace(' ', '+')},+${aptAdd.city.replace(' ', '+')},+{aptAdd.state}`
    this.markerUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressRegex}&key=AIzaSyAehpePt0KKDTY-K7nVNN2Rfs_ap20Bo-A`
  }

  fetchGpsCoordinates() {
  fetch(this.markerUrl)
    .then(url => {
        return url.json()
    })
    .then(response => {
      this.gpsCoordinates = response.results[0].geometry.location
   })
  }

  //not sure if there is a scope issue here
  createMapMarker() {
    let coordinates = this.coordinates;
    let marker = new google.maps.Marker({
      position: coordinates,
      // map: map
    })
    this.mapMarker = marker;
  }

//   this.createUrl()
//   this.fetchGpsCoordinates()
//   this.createMapMarker()

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

const place = new Address('1111 dr', 'Vancouver', 'BC', 'CA', '32843');
const owner = new Landlord('FirstName LastName', '111-111-1111', '111@email.com');
const footage = new Size(500, 3, 3, 4);
const myHouse = new Apartment('house', place, 'Fantastic!', owner, footage, 300);

let apartments = [myHouse, myHouse, myHouse, myHouse];

createList();
