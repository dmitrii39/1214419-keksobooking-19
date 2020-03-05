"use strict";


// ---ИСХОДНЫЕ ДАННЫЕ------------------
var user = [
  "img/avatars/user01.png",
  "img/avatars/user02.png",
  "img/avatars/user03.png",
  "img/avatars/user04.png",
  "img/avatars/user05.png",
  "img/avatars/user06.png",
  "img/avatars/user07.png",
  "img/avatars/user08.png"
];

var offer = [
  {
    title: "Привет мой случайный гость",
    address: "600, 350",
    price: 100,
    type: "palace",
    rooms: 4,
    guests: 8,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "500, 300",
    price: 90,
    type: "bungalo",
    rooms: 2,
    guests: 7,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "cozy apartmens",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "550, 250",
    price: 55,
    type: "house",
    rooms: 3,
    guests: 4,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "100, 110",
    price: 60,
    type: "flat",
    rooms: 5,
    guests: 4,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "300, 200",
    price: 20,
    type: "bungalo",
    rooms: 222,
    guests: 4,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "200, 100",
    price: 50,
    type: "flat",
    room: 2,
    guests: 156,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "280, 70",
    price: 1,
    type: "bungalo",
    rooms: 0,
    guests: 1,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  },

  {
    title: "Привет мой случайный гость",
    address: "580, 310",
    price: 10,
    type: "bungalo",
    rooms: 2,
    guests: 3,
    checkin: "14: 00",
    checkout: "12: 00",
    feature: [
      "wifi",
      "dishwashe",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ],
    description: "бла-бла-бла",
    photos: [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ]
  }
];



var loc = [

  {
    x: 700,
    y: 500
  },

  {
    x: 20,
    y: 400
  },

  {
    x: 140,
    y: 300
  },

  {
    x: 200,
    y: 200
  },

  {
    x: 800,
    y: 620
  },

  {
    x: 70,
    y: 320
  },

  {
    x: 300,
    y: 275
  },

  {
    x: 100,
    y: 240
  }

];

// --------------------КОНЕЦ ИСХОДНЫХ ДАННЫХ--------------------




// -----------------РЕШЕНИЕ-------------------------
var userRandom = function () {
  var userRandomIndex = Math.floor(Math.random() * user.length);
  return user[userRandomIndex];

};
userRandom();


var offerRandom = function () {
  var offerRandomIndex = Math.floor(Math.random()* offer.length);
  return offer[offerRandomIndex];
};
offerRandom();


var locRandom = function () {
  var locRandomIndex = Math.floor(Math.random()* loc.length);
  return loc[locRandomIndex];
}
locRandom();



var createAuthors = function () {
  var authors = [];
  for (var i = 0; i < 8; i++) {
    var bookings = {
      users: userRandom(),
      offers: offerRandom(),
      locations: locRandom()
    };
    authors.push(bookings);
  }
  
  return authors;
};

createAuthors();


var removeMap = document.querySelector(".map");
removeMap.classList.remove("map--faded");



var allUsers= function() {
   for (var i = 0; i<=8; i++){
     var similarUserTemplate = document.querySelector('.map__pins');
     var similarListElement = document.querySelector('.map__pin');

     var userClone = similarListElement.cloneNode(true);
     var newUser = similarUserTemplate.appendChild(userClone);
     newUser.style = 'left: ' + loc[i].x + 'px; ' + 'top: ' + loc[i].y + 'px;';
     var userAvatar = similarListElement.querySelector('img');
     userAvatar.src = user[i];
     userAvatar.alt = user[i];


   }

};

 allUsers();

//  ---------КОНЕЦ РЕШЕНИЯ----------------


// --------------(НЕ ПОЛУЧАЕТСЯ) ВАРИАНТ ВЫВОДА ЧЕРЕЗ DocumentFragment----------


 //  var allUsers = function() {
//    var similarUserTemplate = document.querySelector('.map__pins');
//    var similarListElement = document.querySelector('.map__pin');
//    var fragment = document.createDocumentFragment();
//    for (var i = 0; i <= 8; i++) {

//      var newUser = document.createElement('button');
//      newUser.className = 'map__pin';
//      newUser.style = 'left: ' + loc[i].x + 'px; ' + 'top: ' + loc[i].y + 'px;';
//      var userAvatar = similarListElement.querySelector('img');
//      userAvatar.src = user[i];

//      fragment.appendChild(newUser);

//    }
//    similarUserTemplate.appendChild(fragment);

//  };
 









