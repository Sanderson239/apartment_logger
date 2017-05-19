$('.address-info-form').submit(getUserInput);

$('.go-to-address-input').click(toggleVisible);



function toggleVisible() {
  $('.modal')[0].classList.toggle('invisible');
}

function getUserInput(event) {
  event.preventDefault();
  let aptName = $("input[name='Apartment Name']").val();
  let streetName = $("input[name='Street Name']").val();
  let city = $("input[name='City']").val();
  let state = $("select").val();
  let zipCode = $("input[name='Zip Code']").val();
  let sqrFootage = $("input[name='Square Footage']").val();
  let numBedrooms = $("input[name='Number of Bedrooms']").val();
  let numBeds = $("input[name='Number of Beds']").val();
  let numBathrooms = $("input[name='Number of Bathrooms']").val();
  let monthlyPrice = $("input[name='Monthly Price']").val();
  let aptDescription = $("input[name='Apartment Description']").val();
  let landlordName = $("input[name='Full Name']").val();
  let telephone = $("input[name='Telephone']").val();
  let email = $("input[name='email']").val();
  let apartment = new Apartment(aptName, new Address(streetName, city, state, 'USA', zipCode), aptDescription, new Landlord(landlordName, telephone, email), new Size(sqrFootage, numBedrooms, numBathrooms, numBeds), monthlyPrice);
  localStorage.setItem('apts', JSON.stringify(apartments));
}
