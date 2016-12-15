// var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
//     credentials: 'AjYOKYhwfvbEhwDlM3WpQP3zsgD9AgNUWIV40Fp0lw1WmwFjTIfc3sHP5GwhiW_Q'
// });
// var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/chenditc/mypokemon.io/blob/gh-pages/images/pushpin_images/pokemon/1.png',
//     anchor: new Microsoft.Maps.Point(12, 39) });
// map.entities.push(pushpin);
var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Your Bing Maps Key'
    });
}
