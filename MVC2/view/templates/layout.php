<!DOCTYPE html>
<html lang="en">
<head>
<link href="public/css/bootstrap.min.css" rel="stylesheet">
<link href="public/css/mystyle.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div>
            <h2>Film Store</h2>
            <h4 class="text-muted">
                <?php
                echo '<a href="./">Main</a> &#187';
                echo '<a href="books">Films</a>';
                if (!empty($book['bookname'])) echo ' &#187'.$book['bookname'];
                ?>
            </h4>
        </div>
        <div id="content" style="padding-top:20px">
        <?php
            echo $content;
        ?>
        </div>
        <footer class="footer">
            <p>&copy; Year Design <i class="fa fa-child"></i></p>
        </footer>
    </div>
</body>
</html>