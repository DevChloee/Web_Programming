<?php
$x = 5;
$y = 10;
function addition(int $n = 20 )
{
    $GLOBALS['y'] = $GLOBALS['x'] + $n;
}
addition(23.56);
print $y;
?>
