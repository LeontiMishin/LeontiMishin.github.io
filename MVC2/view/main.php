<?php
    ob_start();
?>
<h2>MVC project. Films</h2>
<article>
    <p>
        View the list of Films and indepth information of one film
    </p>
</article>
<?php
    $content = ob_get_clean();
?>
<?php include 'view/templates/layout.php';?>