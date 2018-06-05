<?php
/**
 * @Author: Marte
 * @Date:   2018-05-17 13:10:55
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-05-23 11:13:32
 */


require('haitao_connect.php');
$dataTable = $_GET['dataTable'];
if(!empty($_GET['id'])){  //如果不为空
//写你的执行函数
    $id = $_GET['id'];
    $sql = 'SELECT * FROM '.$dataTable.' where id= '.$id.'';
}else{
    $sql = 'SELECT * FROM '.$dataTable.'';
}

//$sql = 'SELECT * FROM '.$dataTable.'';

$result = $conn->query($sql);//获取查询结果集

$row = $result ->fetch_all(MYSQLI_ASSOC);//使用查询结果集，得到数组

$result -> close();//释放查询结果集，避免资源浪费

echo json_encode($row);

//$result -> close();

// $conn -> close();

?>