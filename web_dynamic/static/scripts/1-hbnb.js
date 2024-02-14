$(document).ready(function() {
  let amenitiesChecked = new Set();

  $('input[type="checkbox"]').change(function() {
      let amenityId = $(this).attr('id');

      if ($(this).is(':checked')) {
          amenitiesChecked.add(amenityId);
      } else {
        
          amenitiesChecked.delete(amenityId);
      }
      console.log(amenitiesChecked);

      updateAmenitiesList();
  });

  function updateAmenitiesList() {
      let amenitiesNames = [];
      let count = 0;

      amenitiesChecked.forEach(function(amenityId) {
          if (count < 3) {
              let amenityName = $('#' + amenityId).val();
              amenitiesNames.push(amenityName);
              count++;
          }
      });

      let amenitiesText = amenitiesNames.join(', ');
      if (amenitiesChecked.size > 3) {
          amenitiesText += ', ...';
      }

      $('.amenities h4').text(amenitiesText);
  }
});
