<?php

    ob_start();

    echo '<article>';
    echo '<h3>'.$book['name'].'</h3>';
    echo '<img src = "public/images/'.$book['image'].'">';
    echo '<h3>Name: '.$book['author'].'</р>';
    echo '<h3>Year: '.$book['price'].'</h3>';
    echo '<h3>Content: '.$book['description'].'</h3>';
    echo '<p style="padding-top:10px;">';
    echo '<a href="books" role="button"> Back &raquo;</a>';
    echo '</p>';
    echo '</article>';

    echo '<div style="clear:both;"</div>';

    $content = ob_get_clean();

include 'view/templates/layout.php';