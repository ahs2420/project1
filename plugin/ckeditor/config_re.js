/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbar = [
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', 'SelectAll' ] },
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-','Outdent', 'Indent', '-', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
		'/',
		{ name: 'links', items: [ 'Link', 'Unlink' ] },
		{ name: 'insert', items: [ 'Image','VideoDetector', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar'] },
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
		{ name: 'colors', items: [ 'TextColor', 'BGColor' ] }
	];

	config.enterMode = CKEDITOR.ENTER_BR;
	config.extraPlugins = 'templates,tableresize,videodetector,imagebase,dialogui,dialog,widget,image2,button,balloontoolbar,balloonpanel';
	config.removePlugins = 'iframe';
	config.extraAllowedContent='iframe[*]';
    //config.font_names = '맑은 고딕; 돋움; 바탕; 돋음; 궁서; Nanum Gothic Coding; Quattrocento Sans;' + CKEDITOR.config.font_names; //기본 글꼴에 +기호로 한글 글꼴을 추가 한다.
    config.toolbarCanCollapse = true; //툴바가 접히는 기능을 넣을때 사용합니다.
	// config.image2_alignClasses= ['image-align-left', 'image-align-center', 'image-align-right'];
	// config.image2_disableResizer=true;
};
