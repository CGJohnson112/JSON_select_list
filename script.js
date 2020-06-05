const url = 'http://localhost:8888/json_directory/list.json';
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data)
  })
  
  .catch = (err) =>  console.log(err);


  function appendData(data) {
    //console.log(data);
    var dataIs = data.map(data => '<p>' + data.name + '<p>');
    //dataIs.sort();
    //console.log(dataIs); 

      function AlphabetSortAtoZ(){
        var dataIsAlphabet = dataIs.sort();
        //console.log(dataIsAlphabet);
        document.getElementById("myData").innerHTML = dataIsAlphabet;
      }

      function AlphabetSortZtoA(){
        var dataIsAlphabet = dataIs.sort().reverse();
        //console.log(dataIsAlphabet);
        document.getElementById("myData").innerHTML = dataIsAlphabet;
      }

      function sortLow(){
        var rating = data.map(data => '<p>' + data.rating + '  ' + data.name + '</p>');
        rating.sort();
        //console.log(rating);
        document.getElementById("myData").innerHTML = rating;
      }

      function sortHigh(){
        var rating = data.map(data => '<p>' + data.rating + '  ' + data.name + '</p>');
        rating.sort().reverse();
        //console.log(rating);
        document.getElementById("myData").innerHTML = rating;
      }

      

//jquery
$(function(){
  $("#listOrder").on('change', function(){
      var selectedVal = $(this).val();
      switch(selectedVal){

          
          case 'asc':
            AlphabetSortAtoZ();
          break;
          case 'dsc':
            AlphabetSortZtoA();
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
//end switch case

      
     sortHigh();//default
      //return AlphabetSortZtoA();
    
}
  

   
   



