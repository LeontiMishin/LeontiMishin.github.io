<?php

class Cmodel
{
    public function getData()
    {
        $mysqli = new mysqli('localhost', 'root', '', 'mvc');
        if (mysqli_connect_errno()) {

            echo 'Соединение не установлено';

            exit();
        }
        $mysqli->set_charset('utf8');
        $query = "Select * From News";
        $result = $mysqli->query($query);
        $arrayResult = $result->fetch_all(MYSQLI_ASSOC);
        return $arrayResult;
    }
}
