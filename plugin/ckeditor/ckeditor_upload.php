<?php
include_once $_SERVER['DOCUMENT_ROOT'] ."/plugin/ckeditor/func_image_resize.php";
$funcNum = $_GET['CKEditorFuncNum'] ;
$CKEditor = $_GET['CKEditor'] ;
$langCode = $_GET['langCode'] ;

if (!stristr($_FILES['upload']['type'], 'image/')) {
	//alertBack('이미지 파일만 업로드할 수 있습니다.');
	echo"
	<script>
		window.parent.CKEDITOR.tools.callFunction(1, '', '이미지 파일(jpg,jpeg,gif,png)만 업로드할 수 있습니다.tetet');
	</script>";
	exit;
}

$up_url		= $_SERVER['DOCUMENT_ROOT'] . '/upload/' . date('Y');		// server path
$up_path	= '/upload/' . date('Y');			// for web
$src_file = $_FILES['upload']['tmp_name'];
$path_parts = pathinfo($_FILES['upload']['name']);
$n_name = array_sum(explode( ' ' , microtime()));
$exname = $path_parts['extension'];
$filename = $n_name . '.' . $exname;

if (!is_dir($up_url)) {
	if(!mkdir($up_url, 0777, true)){
		echo "안되.........";
	}
}
/*
Warning: getimagesize(../upload/2015/1431330593.44.jpg) [function.getimagesize]: failed to open stream: No such file or directory in /home/hosting_users/fw_bumyang/www/ckeditor/func_image_resize.php on line 11
 Cannot Open File!

Parse error: syntax error, unexpected ':' in /home/hosting_users/fw_bumyang/www/ckeditor/ckeditor_upload.php on line 25
*/

if (move_uploaded_file($src_file, $up_url . '/' . $filename)) {
	$msg = '';
} else {
	$url = '';
	$msg = '파일이 업로드되지 않았습니다.';
}

$fileadd_name	= $_FILES['fileadd']['name'];		//등록파일명
$fileadd		= $_FILES['fileadd']['tmp_name'];	//파일임지저장소 
$fileadd_size	= $_FILES['fileadd']['size'];		//파일크기

$view_img = @getimagesize("$_SERVER[DOCUMENT_ROOT]/upload/".date(Y)."/".$filename);

if(  $view_img[0] > 2000 ) {

	$upload_defaultpath=$_SERVER['DOCUMENT_ROOT'] ."/upload/".date(Y)."/";
	$db_table_small_image_size="1200";

	TG_Image_Resize($upload_defaultpath, $filename, $filename, (int)($db_table_small_image_size), 100 , "small_","N");

	$url = $up_path . '/small_'.$filename;

} else {
	$url = $up_path . '/' . $filename;
}

echo "
	<script>
		window.parent.CKEDITOR.tools.callFunction($funcNum, '$url', '$msg');
	</script>
";
?>



