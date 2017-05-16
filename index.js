class Apartment {
  constructor(name, address, description, landlord, size, price) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.landlord = landlord;
    this.size = size;
    this.price = price;
    this.favorite = false;
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
  return ul;
}

const place = new Address('1111 dr', 'Vancouver', 'BC', 'CA', '32843');
const owner = new Landlord('FirstName LastName', '111-111-1111', '111@email.com');
const footage = new Size(500, 3, 3, 4);
const myHouse = new Apartment('house', place, 'Fantastic!', owner, footage, 300);

let apartments = [myHouse, myHouse, myHouse, myHouse];

createList();
