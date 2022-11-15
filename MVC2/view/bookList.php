<?php
ob_start();
?>

<h2>List of Films</h2>

<!DOCTYPE html>
<html lang="en">
<head>
<link href="public/css/bootstrap.min.css" rel="stylesheet">
<link href="public/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
        <div class="row">
            <!-- <div class="border"> -->
<?php          
foreach($booksList as $bookOne) {
    echo '<article>';
    echo '<h3>';
    echo '<a href="book?title='.$bookOne['name'].'">'.$bookOne['name'].'</a>';
    echo '</h3>';
    echo '<img src = "public/images/'.$bookOne['image'].'">';
    echo '<h3>   '.$bookOne['author'].'</h3>';
    echo '<h4>Year: '.$bookOne['price'].'</h4>';
    echo '<h3 style="padding-top:10px;">';
    echo '<a href="book?title='.$bookOne['name'].'" role ="button"> Content &raquo;</a>';
    echo '</article>';
    echo '<div style="clear:both;"></div>';
    echo '<div class="img">-</div>';
}
?>

</div>
        </div>
    </div>
</body>
</html>




<?php
$content = ob_get_clean();
include 'view/templates/layout.php';
?>