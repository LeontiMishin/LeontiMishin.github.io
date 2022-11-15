<?php

class Controller{
    public static function StartSite(){
        include 'view/main.php';
    }

    public static function BookList(){
        $booksList = Model::getBookList();
        include 'view/bookList.php';
    }

    public static function bookOne($title){
        $test = Model::getBook($title);
        if ($test[0]==true){
            $book = $test[1];
            include 'view/bookOne.php';
        }
        else {
            include 'view/error404.php';
        }
    }
    public static function error404(){
        include 'view/error404.php';
    }
}
?>