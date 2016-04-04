

var app = angular.module("firstApp", []);
app.controller("ExerciseController", function($scope) {

$scope.showme = 0;

$scope.sorts = "-score";

$scope.posts = [
  { title: "Missed Connection: Looking for a mind at work",
  author: "Angelica Schuyler",
  image: "http://assets.nydailynews.com/polopoly_fs/1.2532704.1455591263!/img/httpImage/image.jpg_gen/derivatives/article_635/hamilton16n-6-web.jpg",
  description: "He is penniless, he is flying by the seat of his pants.Handsome, boy, does he know it! Peach fuzz, and he can not even grow it! I wanna take him far away from this place",
  score: 0,
  voteUp: function () {
    this.score++;
    },
  voteDown:function() {
    this.score--;
    }

  },
  {title: "Welcome to the land of the free",
  author: "Thomas Jefferson",
  image: "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_2.0,q_40,w_620/MTE5NDg0MDU1MDEwMTgyNjcx.jpg",
  description: "Pray we never see Hamilton's candidacy.",
  score: 0,
  voteUp: function () {
  this.score++;
  },
  voteDown:function() {
    this.score--;
    }
  },
  {
  title: "Job Posting: Right-hand man",
  author: "George Washington",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/500px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
  description: "I cannot be everywhere at once, people. I am in desperate need of assistance.",
  score: 0,
  voteUp: function () {
  this.score++;
  },
  voteDown:function() {
    this.score--;
    }
  }
]

});