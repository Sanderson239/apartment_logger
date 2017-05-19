
if (!localStorage.apts) {
  localStorage.setItem('apts', JSON.stringify([]))
};

var apartments = JSON.parse(localStorage.apts);

function showAptInfo() {
  $(this).next().slideToggle(400);
}

function initMap() {
  var vancouver = {lat: 37.7749, lng: -122.4194};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
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
  var ul = $('#apartment-list');
  for (let apartment of apartments) {
    ul.append(`<li class="apt-label">${apartment.name}</li>`);
    ul.append(`<div class="apt-description slide">address: ${apartment.address.street}, ${apartment.address.state} ${apartment.address.zip} | Price: $${apartment.price}.00 | Size: ${apartment.size.squrFeet}sqr ft | ${apartment.size.bedrooms} bedrooms | ${apartment.beds} beds | ${apartment.size.bathroom} bathrooms

    <p>Description: ${apartment.description}</p>

    Link to Listing: <a href ='galvanize.com'>galvanize.com</a> <h4>Landlord Contact Info</h4>
    Name: ${apartment.landlord.name} | Tele: ${apartment.landlord.phone}</div>`)
    $('#apartment-list li').unbind("click").click(showAptInfo);
  }
}
