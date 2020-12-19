// Hotels
var hotels = [
  {
    name:'Rosewood',
    location:'United Kingdom',
    rating: 5 ,
    price: 100,
    picture: 'images/backgrounds/hotel10.jpeg'
  },
  {
    name:'Mina House',
    location:'Egypt',
    rating: 5 ,
    price: 120,
    picture: "images/backgrounds/hotel2.jpeg" 
  },
  {
    name:'Nile',
    location:'Egypt',
    rating: 4 ,
    price: 80,
    picture: "images/backgrounds/hotel3.jpeg"
  },
  {
    name:'Ramses Hilton',
    location:'Egypt',
    rating: 3 ,
    price: 60,
    picture: 'images/backgrounds/hotel11.jpeg'
  },
  {
    name:'Lac Hotel',
    location:'Tunisia',
    rating: 5 ,
    price: 100,
    picture: "images/backgrounds/hotel5.jpeg"
  },
  {
    name:'Butterfly',
    location:'Italy',
    rating: 5 ,
    price: 130,
    picture: "images/backgrounds/hotel6.jpeg"
  },
  {
    name:'CALA DI VOLPE',
    location:'Italy',
    rating: 5 ,
    price: 130,
    picture: "images/backgrounds/hotel4.jpeg"
  },
  {
    name:'Apanemo',
    location:'Greece',
    rating: 5 ,
    price: 180,
    picture: "images/backgrounds/hotel7.jpeg"
  }
]

$('.search-button').click(function(){
  var text = $(".search-input").val();
 $(".grid-container").empty()
 var count = 0 
    for(var i = 0 ; i < hotels.length ; i++ ){
      if (hotels[i].name.toUpperCase() === text.toUpperCase() || hotels[i].location.toUpperCase() === text.toUpperCase() ){
        count++ 
          $(".grid-container").append(`<div class="grid-item">
          <div class="card">
              <img class='card-img' src= '${hotels[i].picture}'  style="width:100%">
              <div class="container">
                <h5 class ='card-title'><b>${hotels[i].name}</b></h5>
                <hr>
                <p  class='card-text'>Location : ${hotels[i].location}</p>
                <p  class='card-text'>Rating : ${hotels[i].rating} <span class="fa fa-star checked   tag" ></span> </p>  
                <p  class='card-text'>Night Price : ${hotels[i].price} <i class='fas fa-dollar-sign fa-xs     tag'  ></i> </p>
              </div>
            </div>
          </div>`)
          
  }
}
if(count === 0 ){
  $(".grid-container").empty()
  hotels.forEach(function(hotel){
    $(".grid-container").append(`<div class="grid-item">
    <div class="card">
        <img class='card-img' src= '${hotel.picture}'  style="width:100%">
        <div class="container">
          <h5 class ='card-title'><b>${hotel.name}</b></h5>
          <hr>
          <p  class='card-text'>Location : ${hotel.location}</p>
          <p  class='card-text'>Rating : ${hotel.rating} <span class="fa fa-star checked   tag" ></span> </p>  
          <p  class='card-text'>Night Price : ${hotel.price} <i class='fas fa-dollar-sign fa-xs     tag'  ></i> </p>
        </div>
      </div>
    </div>`)
    
})
}


});


function renderHotels(){
  hotels.forEach(function(hotel){
    $(".grid-container").append(`<div class="grid-item">
    <div class="card">
        <img class='card-img' src= '${hotel.picture}'  style="width:100%">
        <div class="container">
          <h5 class ='card-title'><b>${hotel.name}</b></h5>
          <hr>
          <p  class='card-text'>Location : ${hotel.location}</p>
          <p  class='card-text'>Rating : ${hotel.rating} <span class="fa fa-star checked   tag" ></span> </p>  
          <p  class='card-text'>Night Price : ${hotel.price} <i class='fas fa-dollar-sign fa-xs     tag'  ></i> </p>
        </div>
      </div>
    </div>`)
    
})
}
renderHotels();

// slideShow


var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}
carousel();


//check input


       

