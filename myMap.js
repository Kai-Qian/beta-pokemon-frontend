function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AjYOKYhwfvbEhwDlM3WpQP3zsgD9AgNUWIV40Fp0lw1WmwFjTIfc3sHP5GwhiW_Q'
    });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/raw/gh-pages/images/pushpin_images/pokemon/1.png'});
    map.entities.push(pushpin);
}

