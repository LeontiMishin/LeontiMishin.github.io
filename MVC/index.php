<?php

require_once ('views/CView.php');
require_once('controllers/CController.php');

$view = new CView();
$controller = new CController();

$pageHeader = $view->GetHeader();
$pageBody = $view->ViewMainPage();
$pageFooter = $view->GetFooter();

include($pageHeader);
include($pageFooter);
