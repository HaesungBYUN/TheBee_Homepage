<?php
// 요청한 파일이 실제로 존재하면 그 파일을 그대로 서비스
if (file_exists(__DIR__ . $_SERVER['REQUEST_URI'])) {
    return false;
}

// .php 확장자가 없는 주소 요청이 들어왔을 때, 해당 .php 파일이 있는지 확인
$path = __DIR__ . $_SERVER['REQUEST_URI'] . '.php';
if (file_exists($path)) {
    include $path;
} else {
    // 아무것도 못 찾았으면 index.php로 보냄 (404 대비)
    include __DIR__ . '/index.php';
}
?>