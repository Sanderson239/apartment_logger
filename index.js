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

const myHouse = new apartment('house', 1111, 'Fantastic!')
