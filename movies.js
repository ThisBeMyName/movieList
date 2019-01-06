var movies = [
    {
	  title: "The Lord of the Rings: Fellowship of the Ring",
	  rating: 5,
	  have_seen: true
	},

    {
	  title: "Freeway",
	  rating: 3.5,
	  have_seen: false
	},

    {
	  title: "Casino Royal",
	  rating: 4.5,
	  have_seen: true
	},

  {
    title: "Django",
    rating: 5,
    have_seen: true
  },

  {
    title: "The Good, The Bad, and The Ugly",
    rating: 4.5,
    have_seen: true
  }
]

for (var i = 0; i < movies.length; i++){
  if(movies[i].have_seen === true){
    console.log("You have seen " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " Stars")
  } else {
    console.log("You have not seen " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " Stars")
  }
}
