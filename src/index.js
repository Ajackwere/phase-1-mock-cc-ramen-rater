document.addEventListener('DOMContentLoaded', function () {
    // Fetch all ramen data from the server
    fetch('http://localhost:3000/ramens')
      .then(function (response) {
        return response.json();
      })
      .then(function (ramenData) {
        // Display the ramen images in the #ramen-menu div
        var ramenMenu = document.getElementById('ramen-menu');
        ramenData.forEach(function (ramen) {
          var img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', function () {
            displayRamenDetails(ramen);
          });
          ramenMenu.appendChild(img);
        });
      });
  
    function displayRamenDetails(ramen) {
      var detailImage = document.querySelector('#ramen-detail .detail-image');
      var name = document.querySelector('#ramen-detail .name');
      var restaurant = document.querySelector('#ramen-detail .restaurant');
      var ratingDisplay = document.getElementById('rating-display');
      var commentDisplay = document.getElementById('comment-display');
  
      detailImage.src = ramen.image;
      detailImage.alt = ramen.name;
      name.textContent = ramen.name;
      restaurant.textContent = ramen.restaurant;
      ratingDisplay.textContent = ramen.rating;
      commentDisplay.textContent = ramen.comment;
    }
  
    var newRamenForm = document.getElementById('new-ramen');
    newRamenForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      var newName = document.getElementById('new-name').value;
      var newRestaurant = document.getElementById('new-restaurant').value;
      var newImage = document.getElementById('new-image').value;
      var newRating = document.getElementById('new-rating').value;
      var newComment = document.getElementById('new-comment').value;
  
      var newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
      };
  
      var ramenMenu = document.getElementById('ramen-menu');
      var img = document.createElement('img');
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.addEventListener('click', function () {
        displayRamenDetails(newRamen);
      });
      ramenMenu.appendChild(img);
  
      newRamenForm.reset();
    });
  });
  