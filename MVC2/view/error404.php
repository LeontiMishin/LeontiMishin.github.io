<?php
    ob_start();
?>

<h2>404 error</h2>
<article>
    <p>
        not found
    </p>
</article>

<?php
    $content = ob_get_clean();
?>
<?php
    include 'view/templates/layout.php';
?>