var app = angular.module('cinemaCalendar', []);







app.controller('PinCtrl', [
'$scope',
function($scope){

  console.log("Hellos");



$scope.pins = [
  {pinTitle: 'Ka Ka Ka Po', imgSource: 'app/images/movie-pin/kakakapo.jpg',
   pinRatings:[
   {rating:'4.5', rateURL:'app/images/rating/rating_imdb.jpg'},
   {rating:'3.5', rateURL:'app/images/rating/rating_mc.jpg'},
   {rating:'4.0', rateURL:'app/images/rating/rating_mb.jpg'},
   {rating:'5.0', rateURL:'app/images/rating/rating_toi.jpg'}
   ],
   boxOffice:'10.5 crores in 5 days',
   pinSummary:'Kakakapo is a master piece which is directed by the very talented Director who is already given Soodhu kaavum'
  },
    {pinTitle: 'Jil Jung Juk', imgSource: 'app/images/movie-pin/jiljung.jpg',
   pinRatings:[
   {rating:'4.5', rateURL:'app/images/rating/rating_imdb.jpg'},
   {rating:'3.5', rateURL:'app/images/rating/rating_mc.jpg'},
   {rating:'4.0', rateURL:'app/images/rating/rating_mb.jpg'},
   {rating:'5.0', rateURL:'app/images/rating/rating_toi.jpg'}
   ],
   boxOffice:'8 crores in 5 days',
   pinSummary:'Jil Jung Juk is a different try which is directed by the very talented Director and is considered a hit'
  },
    {pinTitle: 'Kabali', imgSource: 'app/images/movie-pin/kabali.jpg',
   pinRatings:[
   {rating:'4.5', rateURL:'app/images/rating/rating_imdb.jpg'},
   {rating:'3.5', rateURL:'app/images/rating/rating_mc.jpg'},
   {rating:'4.0', rateURL:'app/images/rating/rating_mb.jpg'},
   {rating:'5.0', rateURL:'app/images/rating/rating_toi.jpg'}
   ],
   boxOffice:'8 crores in 5 days',
   pinSummary:'Jil Jung Juk is a different try which is directed by the very talented Director and is considered a hit'
  },
    {pinTitle: 'Dhilluku Dhuttu', imgSource: 'app/images/movie-pin/dhilluku.jpg',
   pinRatings:[
   {rating:'4.5', rateURL:'app/images/rating/rating_imdb.jpg'},
   {rating:'3.5', rateURL:'app/images/rating/rating_mc.jpg'},
   {rating:'4.0', rateURL:'app/images/rating/rating_mb.jpg'},
   {rating:'5.0', rateURL:'app/images/rating/rating_toi.jpg'}
   ],
   boxOffice:'8 crores in 5 days',
   pinSummary:'Jil Jung Juk is a different try which is directed by the very talented Director and is considered a hit'
  }
];

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
 $scope.posts.push({
  title: $scope.title,
  link: $scope.link,
  upvotes: 0,
  comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
});
  $scope.title = '';
  $scope.link = '';
};



}]);


app.controller('NewsCtrl', [
'$scope',
function($scope){

  console.log("Hello NewsCtrl");

  $scope.news = [
  {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news1.jpg',
  newsSource:'NDTV',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news2.jpg',
   newsSource:'Times of India',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news3.jpg',
   newsSource:'The Indian Express',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news4.jpg',
   newsSource:'Mirchi9',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news5.jpg',
   newsSource:'The News Minute',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news6.jpg',
   newsSource:'Times of India',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news6.jpg',
   newsSource:'NDTV',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
   {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news4.jpg',
   newsSource:'Cinema Calendar',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
  {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news5.jpg',
  newsSource:'Logical Indian',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  },
  {newsTitle: 'There is a new Cinematographer who is ruling the industry', imgSource: 'app/images/news/news3.jpg',
  newsSource:'Stellar Labs',
  newsDesc:'Nataraj who is now the talk of the tinsel town is now acting in a new Film which is a talk of the '
  }
  ];

}]);


