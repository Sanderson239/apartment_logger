class apartment = {
  constructor(name, address, description, landlord, size, price) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.landlord = landlord;
    this.size = size;
    this.price = price;
  }
}

class address = {
  constructor(street, city, state, country, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
  }
}

class landlord = {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class size = {
  constructor {

  }
}

const myHouse = new apartment('house', 1111, 'Fantastic!', )
