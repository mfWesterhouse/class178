let latitude=22.7868542, longitude=88.3643296;

mapboxgl.accessToken = 'pk.eyJ1Ijoic3JpbGVraGFjaGludGEiLCJhIjoiY2w4cmR6dHVoMzMzejN3bzVia2M5N3o1ZSJ9.STdVUOw1SvU_2OtXv2yHXw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: True
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);