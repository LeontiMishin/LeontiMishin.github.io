<?php


        $mysqli = new mysqli('localhost', 'root', '', 'bookMvc');

        if(mysqli_connect_errno()) {
            echo 'Connection is not installed';
            exit();
        }

        $mysqli->set_charset('utf-8');

        $query = "Select * From book";

        $result = $mysqli->query($query);
        $books = $result->fetch_all(MYSQLI_ASSOC);

?>