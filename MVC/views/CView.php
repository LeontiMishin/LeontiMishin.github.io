<?php

require_once ('./controllers/CController.php');

class CView {
    public function ViewMainPage() {
        $controller = new CController();
        $arrayResult = $controller->SetMainPage();
        include 'views/view_MainPage.php';
        Return $arrayResult;
    }

    public function GetHeader() {
        return 'views/header.php';
    }

    public function GetFooter() {
        return 'views/footer.php';
    }
}
