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

var type = ["palace", "flat", "house", "bungalo"];

var price = [100, 200, 300, 400, 500, 600, 700];

var checkin = ["12:00", "13:00", "14:00"];
var checkout = ["10:00", "12:00", "12:00"];

var features = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];

var photos = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

// -----------------РЕШЕНИЕ-------------------------

var checkinRandom = function() {
  var checkinRandomIndex = Math.floor(Math.random() * checkin.length);
  return checkin[checkinRandomIndex];
};
var checkoutRandom = function() {
  var checkoutRandomIndex = Math.floor(Math.random() * checkout.length);
  return checkout[checkoutRandomIndex];
};

var fotosRandom = function() {
  var fotosRandomIndex = Math.floor(Math.random() * photos.length);
  return photos[fotosRandomIndex];
};

var pointX = function() {
  var pointXRandom = Math.floor(Math.random() * 900);
  return pointXRandom;
};

var pointY = function() {
  var pointYRandom = Math.floor(Math.random() * 500);
  return pointYRandom;
};

var loc = { x: pointX(), y: pointY() };

var typeRandom = function() {
  var typeRandomIndex = Math.floor(Math.random() * type.length);
  return type[typeRandomIndex];
};

var userRandom = function() {
  var userRandomIndex = Math.floor(Math.random() * user.length);
  return user[userRandomIndex];
};

var offerRandom = function() {
  var offerRandomIndex = Math.floor(Math.random() * offer.length);
  return offer[offerRandomIndex];
};

var locRandom = function() {
  var locRandomIndex = Math.floor(Math.random() * loc.length);
  return loc[locRandomIndex];
};

function getRandLenghtArr() {
  var randIndex = Math.floor(Math.random() * features.length);
  return features.slice(0, randIndex);
}

function offerGenerator(total) {
  var offers = [];
  for (var i = 0; i < total; i++) {
    var offer = {
      author: { avatar: userRandom() },
      offerList: {
        title: "Привет мой случайный гость",
        address: "600, 350",
        price: 55,
        type: typeRandom(),
        rooms: 3,
        guests: 4,
        checkin: checkinRandom(),
        checkout: checkoutRandom(),
        feature: getRandLenghtArr(),
        description: "бла-бла-бла",
        photos: fotosRandom()
      },

      location: {
        x: pointX(),
        y: pointY()
      }
    };
    offers.push(offer);
  }

  return offers;
}
offerGenerator(8);

var removeMap = document.querySelector('.map');
removeMap.classList.remove('map--faded');

var allUsers = function(ttl) {
  for (var i = 0; i < ttl; i++) {
    var similarUserTemplate = document.querySelector(".map__pins");
    var similarListElement = document.querySelector(".map__pin");
    var userClone = similarListElement.cloneNode(true);
    var newUser = similarUserTemplate.appendChild(userClone);
    newUser.style = "left: " + pointX() + "px; " + "top: " + pointY() + "px;";
    var userAvatar = similarListElement.querySelector("img");
    userAvatar.src = user[i];
    userAvatar.alt = user[i];
  }
};

allUsers(8);

//  ---------КОНЕЦ РЕШЕНИЯ----------------

// --------------- module3 - task3-----------------

var card = document.querySelector("#card").content;
var element = card.querySelector("article");
var cardClone = element.cloneNode(true);

var offers = offerGenerator(8);

var offer = offers;

var popupTitle = cardClone.querySelector(".popup__title");
popupTitle.textContent = offer[0].offerList.title;

var popupTextAddress = cardClone.querySelector(".popup__text--address");
popupTextAddress.textContent = offer[0].offerList.address;

var popupTextPrice = cardClone.querySelector(".popup__text--price");
popupTextPrice.textContent = offer[0].offerList.price + " \u20ac/за ночь";

var popupType = cardClone.querySelector(".popup__type");
popupType.textContent = offer[0].offerList.type;

var popupTextCapacity = cardClone.querySelector(".popup__type");
popupTextCapacity.textContent =
  offer[0].offerList.rooms +
  " комнаты" +
  " для" +
  offer[0].offerList.guests +
  " гостей";

var popupTextTime = cardClone.querySelector(".popup__text--time");
popupTextTime.textContent =
  "Заезд после " +
  offer[0].offerList.checkin +
  "," +
  " выезд после " +
  offer[0].offerList.checkin;

var popupFeatures = cardClone.querySelector(".popup__features");
popupFeatures.textContent = offer[0].offerList.feature;

var popupDescription = cardClone.querySelector(".popup__description");
popupDescription.textContent = offer[0].offerList.description;

var popupPhotos = cardClone.querySelector(".popup__photos");

var popupImgFoto = cardClone.querySelector(".popup__photo");
popupImgFoto.src = offer[0].offerList.photos;



var popupAvatar = cardClone.querySelector('.popup__avatar');
popupAvatar.src = offer[0].author.avatar;


// var mapCardPopup = document.querySelector('map__card popup');

removeMap.appendChild( cardClone);


console.log(removeMap);


