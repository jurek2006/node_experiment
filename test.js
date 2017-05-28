// do pracy z systemem plików potrzebny jest modył fs
var filesYo = require('fs');

// utworzenie pliku w bieżącym katalogu
filesYo.writeFile(__dirname + "/index.html", "<h1>HTML rocks</h1>");
