$(document).ready(function() {
    let amenitiesChecked = new Set();

    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).attr('id');

        if ($(this).is(':checked')) {
            amenitiesChecked.add(amenityId);
        } else {
            amenitiesChecked.delete(amenityId);
        }

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

    // Request http://0.0.0.0:5001/api/v1/status/ and update #api_status class
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data, status) {
        if (data.status === "OK") {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});
