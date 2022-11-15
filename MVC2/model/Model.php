<?php

class Model {
    public static function getBookList(){
        include_once 'model/booksArray.php';
        return $books;
    }

    public static function getBook($title){
        $allBook = Model::getBookList();
        $i = 0;
        $test = array(false);
        foreach ($allBook as $oneBook) {
            if($oneBook['name'] == $title){
                $test = array(true, $allBook[$i]);
                return $test;
            }
            $i++;
        }
        return $test;
    }
}
?>