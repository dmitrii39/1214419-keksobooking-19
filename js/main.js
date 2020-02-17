   'use strict';

   var user = [
       'img/avatars/user01.png',
       'img/avatars/user02.png',
       'img/avatars/user03.png',
       'img/avatars/user04.png',
       'img/avatars/user05.png',
       'img/avatars/user06.png',
       'img/avatars/user07.png',
       'img/avatars/user08.png'

   ];
   
   var offer = [
    {   title: 'Привет мой случайный гость',
        address:  '600, 350',
        price: 100,
        type: 'palace',
        rooms: 4,
        guests: 8,
        checkin:  '14: 00',
        checkout: '12: 00',
        feature:  ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
        description: 'бла-бла-бла',
        photos:  ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
    },

        {
           title: 'Привет мой случайный гость',
           address: '500, 300',
           price: 90,
           type: 'bungalo',
           rooms: 2,
           guests: 7,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'cozy apartmens',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '550, 250',
           price: 55,
           type: 'house',
           rooms: 3,
           guests: 4,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '100, 110',
           price: 60,
           type: 'flat',
           rooms: 5,
           guests: 4,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '300, 200',
           price: 20,
           type: 'bungalo',
           rooms: 222,
           guests: 4,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '200, 100',
           price: 50,
           type: 'flat',
           room: 2,
           guests: 156,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '280, 70',
           price: 1,
           type: 'bungalo',
           rooms: 0,
           guests: 1,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },

       {
           title: 'Привет мой случайный гость',
           address: '580, 310',
           price: 10,
           type: 'bungalo',
           rooms: 2,
           guests: 3,
           checkin: '14: 00',
           checkout: '12: 00',
           feature: ['wifi', 'dishwashe', 'parking', 'washer', 'elevator', 'conditioner'],
           description: 'бла-бла-бла',
           photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
       },


   ];

    var location = [

        {
            x: 10,
            y: 140
        },

        {
            x: 20,
            y: 145
        },

        {
            x: 30,
            y: 150
        },

        {
            x: 40,
            y: 155
        },

        {
            x: 50,
            y: 160
        },

        {
            x: 60,
            y: 165
        },

        {
            x: 70,
            y: 170
        },

        {
            x: 80,
            y: 75
        },

    ];


    var createAuthors = function () {
        var authors = [];
        for (var i = 0; i < 8; i++) {
            var bookings = {
                users: user[i],
                offers: offer[i],
                        
            };
            authors.push(bookings);
        }

        return authors;
    };
     
createAuthors();


var removeMap = document.querySelector('.map');
removeMap.classList.remove('map--faded');


 