const apiKey = "_9 - pmyac4VdFuTFYp9hHFvn--u8qQSC0V_ - NW - TdCx_yRFiRoyTAS5gnA0OdL86OvaJSEXKoxen0MmGJAv10mzHO1thZbRS9ULqKe_3lfNH0GoadRh_alR - dQj7BYnYx";

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          }));
        }
      })
  }
};




export default yelp;
