// do pracy z systemem plików potrzebny jest modył fs
var filesYo = require('fs');
// moduł https (gdyby było trzeba można użyć http)
var https = require('https');

// utworzenie pliku w bieżącym katalogu
filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");

// ścieżka do pliku w internecie
var dogUrl = "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg";

// ścieżka, gdzie plik ma być pobrany
var dogFile = filesYo.createWriteStream(__dirname + "/node-dog.jpg");

var request = https.get(dogUrl, function (response){
	response.pipe(dogFile);
});