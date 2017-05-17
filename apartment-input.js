$('.address-info-form').submit(function(event) {
  getUserInput();
});

function getUserInput() {
  let aptName = $("input[name='Apartment Name']").value;
  let streetName = $("input[name='Street Name']").value;
  let city = $("input[name='City']").value;
  let state = $("select").value;
  let zipCode = $("input[name='Zip Code']").value;
  let sqrFootage = $("input[name='Square Footage']").value;
  let numBedrooms = $("input[name='Number of Bedrooms']").value;
  let numBeds = $("input[name='Number of Beds']").value;
  let numBathrooms = $("input[name='Number of Bathrooms']").value;
  let monthlyPrice = $("input[name='Monthly Price']").value;
  let aptDescription = $("input[name='Apartment Description']").value;
  let landlordName = $("input[name='Full Name']").value;
  let telephone = $("input[name='Telephone']").value;
  let email = $("input[name='email']").value;
  let apartment = new Apartment(aptName, new Address(streetName, city, state, 'USA', zipCode), aptDescription, new Landlord(landlordName, telephone, email), new Size(sqrFootage, numBedrooms, numBathrooms, numBeds), monthlyPrice);
  console.log(apartment);
}
