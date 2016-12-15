var map_manager = {
    "map":  null,
    "map_items": []
}

map_manager.map_items = [
    {
        "pokemon_id" : 12,
        "expire" : 1481870874,
        "longitude" : 139.77,
        "latitude" : 35.66
    },
    {
        "pokemon_id" : 2,
        "expire" : 1481870874,
        "longitude" : 139.77,
        "latitude" : 35.661
    }

]
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AjYOKYhwfvbEhwDlM3WpQP3zsgD9AgNUWIV40Fp0lw1WmwFjTIfc3sHP5GwhiW_Q'
    });
    map_manager.map = map;
    window.setInterval(refresh_pokemon, 1000);
}

function refresh_pokemon() {
    // 1. Prepare pushpins
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    for(var i in map_manager.map_items) {
        var map_item = map_manager.map_items[i];
        var count_down = get_count_down_from_timestamp(map_item["expire"]);
        var icon_url = 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/' + map_item["pokemon_id"] + '.png';
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 {title : count_down, icon: icon_url});
//         map.entities.push(pushpin);
        pushpins.push(pushpin);
    }
    layer.add(pushpins);
    // 2. Remove old pushpins
    map_manager.map.layers.clear();
    // 3. Add new pushpins
    map_manager.map.layers.insert(layer);
}

function get_count_down_from_timestamp(timestamp) {
    var now_time = new Date().getTime() / 1000;
    var time_left = timestamp - now_time;
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ':' + second;
}

