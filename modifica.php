<?php
$file =fopen('objeto.gltf','a+')or die('error');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
$content= test_input ($_POST['cont-file']);
fwrite($file,$content);
}else {
    echo "No data posted with HTTP POST.";
}
echo 'open';

fclose($file);