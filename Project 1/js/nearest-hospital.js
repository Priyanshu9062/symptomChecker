let map;

function initMap() {
    const location = { lat: 22.677098740877202, lng:88.37826591273719}; // Default location: New York

    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
    });

    const request = {
        location: location,
        radius: '5000', // 5 km radius
        type: ['hospital'],
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach((place) => {
                new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                });
            });
        }
    });
}
