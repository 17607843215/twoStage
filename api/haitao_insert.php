<?php
/**
 * @Author: Marte
 * @Date:   2018-05-17 16:50:54
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-23 11:18:14
 */
require('haitao_search.php');

$pwd = $_GET['pwd'];
$name = $_GET['name'];



$sql = "INSERT INTO `user`(`id`, `name`) VALUES ($pwd,'$name')";

// $sql = 'INSERT INTO `STUDENT`(`id`,`name`,`age`,`school`) VALUES (`)'
if($conn -> query($sql)){
    echo "新记录插入成功";
}else{
    echo "Error: 插入失败!!";//yi i s fcu tddn klww r lsra b ,vbn ftjb ypsu b 
}

$conn -> close();


?>