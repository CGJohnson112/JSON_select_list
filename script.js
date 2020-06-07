const url = 'http://localhost:8888/json_directory/list.json';
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {

    $(function(){
      $("#listOrder").on('change', function(){
          var selectedVal = $(this).val();
          switch(selectedVal){       
              case 'asc':
                AtoZ();
              break;
              case 'dsc':
                ZtoA();
              break;
              case 'highest':
                  sortHigh();
              break;
              case 'lowest':
                  sortLow();
              break;
              case 'blank':
                  defaultText();
              break;
              
          }
      });
    });

    function empty(){
      data.length=0;
    }

    function AtoZ() {
      
      var AtoZ = data.sort((a,b) => (a.name > b.name) ? 1 : -1);
      var AtoZ = data.map(user => {return `<div><p>Name: ${user.name}</p><p>Rating: ${user.rating}</p><hr/></div>`}).join('');
      document.querySelector('#myData').insertAdjacentHTML("afterbegin", AtoZ);
      //console.log(AtoZ);
    }

    function ZtoA() {
     
      var ZtoA = data.sort().reverse((a,b) => (a.name < b.name) ? 1 : -1);
      var ZtoA = data.map(user => {return `<div><p>Name: ${user.name}</p><p>Rating: ${user.rating}</p><hr/></div>`}).join('');
      document.querySelector('#myData').insertAdjacentHTML("afterbegin", ZtoA);
    }

    function sortLow() {
     
      var ratingLow =[];
      ratingLow = data.map(user => {return `<div><p>Rating: ${user.rating}</p><p>Name: ${user.name}</p><hr/></div>`}).sort().join('');
      document.querySelector('#myData').insertAdjacentHTML("afterbegin", ratingLow);
    }

    function sortHigh() {
      var ratingHigh = data.map(user => {return `<div><p>Rating: ${user.rating}</p><p>Name: ${user.name}</p><hr/></div>`}).sort().reverse().join('');
      document.querySelector('#myData').insertAdjacentHTML("afterbegin", ratingHigh);
    }
  
   
  })

  






    

  

   
   



