function getRandomLatLng(map) {
  var bounds = map.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;

  return new L.LatLng(
    southWest.lat + latSpan * Math.random(),
    southWest.lng + lngSpan * Math.random()
  );
}

y = Math.floor(Math.random() * 30);

fetch('https://dummyjson.com/users/' + y)
  .then((res) => res.json())
  .then((results) => {
    /*console.log(results)*/
    document.getElementById('card-title1').innerHTML = results.username;
  });
fetch('https://dummyjson.com/posts/' + y)
  .then((res) => res.json())
  .then((results) => {
    document.getElementById('card-body1').innerHTML = results.body;
  });

y = Math.floor(Math.random() * 30);
console.log(y);
fetch('https://dummyjson.com/users/' + y)
  .then((res) => res.json())
  .then((results) => {
    /*console.log(results)*/
    document.getElementById('card-title2').innerHTML = results.username;
  });
fetch('https://dummyjson.com/posts/' + y)
  .then((res) => res.json())
  .then((results) => {
    document.getElementById('card-body2').innerHTML = results.body;
  });

k = Math.floor(Math.random() * 30);

function addlike() {
  k++;
  document.getElementById('like1').innerHTML = k;
}
function addlike2() {
  k++;
  document.getElementById('like2').innerHTML = k;
}

function reload() {
  location.reload();
}
var num = Math.floor(Math.random() * 30);
var image = document.getElementsByClassName('immagine1');
image.src =
  'https://xsgames.co/randomusers/assets/avatars/male/' + num + '.jpg';
var image = document.getElementsByClassName('immagine2');
image.src =
  'https://xsgames.co/randomusers/assets/avatars/male/' + num + '.jpg';

/*$(document).ready(function () {
  fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((data) => {
      let users = data.users;
      let usersTable = $('#usersTable');
      for (user in users) {
        console.log(users[user]);

        let u = users[user];

        let el = $(
           + img,
          (src =
            'http://xsgames.co/randomusers/assets/avatars/' +
            u.gender +
            '/ ' +
            Math.floor(Math.random() * 10) +
            1 +
            '.jpg'
            )
        );
        usersTable.append(el);
      }
      $('#usersTable').DataTable();
    });
});*/
