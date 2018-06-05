<?php
/**
 * @Author: Marte
 * @Date:   2018-05-17 11:56:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-23 11:07:23
 */
header('Access-Control-Allow-Origin:*');



$servername = "localhost";
$dbname = "haitao";
$password = 'xiejie';
$username = 'xie';



//创建连接
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn -> connect_error) {
    die("连接失败: " . $conn -> connect_error);
}
// if($conn ->connect_error){
//     die("连接失败：" . $conn -> connect_error);
// }

//查询前设置编码，防止输出乱码 $conn -> set_charset("uft8")
$conn -> set_charset('utf8');
// echo "连接成功";



?>