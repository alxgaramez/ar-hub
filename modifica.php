<?php
$file =fopen('objeto.gltf','a+')or die('error');

$content= $_REQUEST['cont-file'];
fwrite($file,$content);
echo 'open';

fclose($file);