var map_manager = {
    "map":  null,
    "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1481813281,
        "longitude" : 139.77,
        "latitude" : 35.66
    },
    {
        "pokemon_id" : 2,
        "expire" : 1481813281,
        "longitude" : 139.77,
        "latitude" : 35.661
    }

]
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AjYOKYhwfvbEhwDlM3WpQP3zsgD9AgNUWIV40Fp0lw1WmwFjTIfc3sHP5GwhiW_Q'
    });
    map_manager.map = map;
    for(var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), { icon: 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png'});
        map.entities.push(pushpin);
    }
}

