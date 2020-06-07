<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON List</title>
</head>
<body>

<div class="container">
    <p>Pick how you want the order of this JSON list to display</p>
    <label>Choose a List:</label>
 
        <select id="listOrder">
            <option value="blank"></option>
            <option value="asc">A to Z</option>
            <option value="dsc">Z to A</option>
            <option value="highest">Best performers</option>
            <option value="lowest">Lowest performers</option>
            </select>
            
         <!--refreshes list to prevent array buildup upon changing selections-->
        <button onClick="window.location.reload()">Refresh</button>
        

<hr />
    <div id="myData"></div>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>