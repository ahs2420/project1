/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ {
		title: '상담내역 샘플',
		image: 'template_sangdam.PNG',
		description: '삼담내역 샘츨입니다',
		html: '<strong><strong><span style="font-size:13pt">1.&nbsp; <span style="font-size:18px"><u>사업개요</u></span></span></strong></strong>'+
				'<div style="margin-left:20px"><span style="color:#000000"><span style="font-size:18px">사업개요</span></span></div>'+
				'<div style="text-align:right">&nbsp;<span style="font-size:18px"><span style="color:#000000">(단위:억원) </span></span></div>'+
				'<table cellspacing="0" style="border-collapse:collapse; width:100%">'+
					'<tbody>'+
						'<tr>'+
							'<td colspan="2" style="background-color:#e7e6e6; border-color:windowtext; text-align:center; width:396px"><strong><span style="font-size:18px"><span style="color:#000000">총사업비</span></span></strong></td>'+
							'<td colspan="2" style="background-color:#e7e6e6; border-color:windowtext windowtext windowtext #000000; text-align:center; width:372px"><strong><span style="font-size:18px"><span style="color:#000000">조 달</span></span></strong></td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:middle; width:15%"><span style="font-size:18px"><span style="color:#000000">토지구입비</span></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:280px">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:102px"><span style="font-size:18px"><span style="color:#000000">자기자금</span></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:35%">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:middle"><span style="color:#000000; font-size:18px">건 &nbsp;축&nbsp; 비</span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:280px">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:102px"><span style="font-size:18px"><span style="color:#000000">선순위대출</span></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:middle"><span style="color:#000000; font-size:18px">기타사업비</span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:280px">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:102px"><span style="font-size:18px"><span style="color:#000000">미지급금</span></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:middle"><span style="color:#000000">&nbsp;</span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:280px">&nbsp;</td>'+
							'<td style="background-color:#e7e6e6; border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:102px"><span style="font-size:18px"><span style="color:#000000">본 건 </span></span></td>'+
							'<td style="background-color:#e7e6e6; border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:middle"><strong><span style="color:#000000;font-size:18px">합 계</span></strong></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:280px">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle; width:102px"><span style="font-size:18px"><strong><span style="color:#000000">합 계</span></strong></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:middle">&nbsp;</td>'+
						'</tr>'+
					'</tbody>'+
				'</table>'+
				'<div style="margin-left:40px"><span style="font-size:18px"><span style="color:#000000">●</span></span></div>'+
				'<div style="text-align:right"><span style="font-size:18px"><span style="color:#000000">(단위:천원)</span></span></div>'+
				'<table align="center" border="1" cellspacing="0" style="border-collapse:collapse; border-image:none; border:1pt solid windowtext; width:100%">'+
					'<tbody>'+
						'<tr>'+
							'<td style="background-color:#e7e6e6; text-align:center; width:232.48px"><span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px"><span style="color:#000000">&nbsp;</span></span></span></span></td>'+
							'<td style="background-color:#e7e6e6; border-color:windowtext windowtext windowtext #000000; text-align:center; width:50%"><span style="font-size:18px"><span style="color:#000000"><strong><span style="font-size:18px"><span style="color:#000000">평당분양금액</span></span></strong></span></span></td>'+
							'<td style="background-color:#e7e6e6; border-color:windowtext windowtext windowtext #000000; text-align:center; width:50%"><span style="font-size:18px"><span style="color:#000000"><strong><span style="font-size:18px"><span style="color:#000000">총분양금액</span></span></strong></span></span></td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top; width:20%">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top; width:40%">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top; width:40%">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
						'</tr>'+
						'<tr>'+
							'<td style="border-color:#000000 windowtext windowtext; text-align:center; vertical-align:top"><span style="font-size:18px"><span style="color:#000000"><strong><span style="font-size:18px"><span style="color:#000000">합계</span></span></strong></span></span></td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
							'<td style="border-color:#000000 windowtext windowtext #000000; text-align:center; vertical-align:top">&nbsp;</td>'+
						'</tr>'+
					'</tbody>'+
				'</table>'+
				'&nbsp;<span style="font-size:18px"><span style="color:#000000">&nbsp;<span style="font-size:18px">&nbsp;<span style="color:#000000">&nbsp;</span><br />'+
				'<strong><strong>2. <u>시행사 및 시공사 현황</u></strong></strong></span></span></span>'+
				'<div style="margin-left:20px"><span style="color:#000000"><span style="font-size:18px">시행사 및 시공사 현황</span></span></div>'+
				'<div style="padding-left:20px"><span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px"><span style="color:#000000">&nbsp;</span></span></span></span></div>'+
				'<span style="font-size:18px"><span style="color:#000000"> <span style="font-size:18px"> <strong><strong>3. <u>수익성 분석</u></strong></strong></span></span></span>'+
				'<div style="margin-left:20px"><span style="color:#000000"><span style="font-size:18px">수익성 분석</span></span></div>'+
				'<br />'+
				'<br />'+
				'<span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px"><strong><strong>4. <u>채권회수 방안</u></strong></strong></span></span></span>'+
				'<div style="margin-left:20px"><span style="color:#000000"><span style="font-size:18px">채권회수 방안</span></span></div>'+
				'<br /><br />'+
				'<span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px"><strong><strong>5. <u>담보설정 내용</u></strong></strong></span></span></span>'+
				'<div style="margin-left:20px"><span style="color:#000000"><span style="font-size:18px">담보설정내용</span></span></div>'+
				'<br /><br />'+
				'<span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px"><strong><strong>6. <u>종합의견</u></strong></strong></span></span></span>'+
				'<div style="margin-left:20px"><span style="color:#000000; font-size:18px; text-indent:-20px">종합의견</span></div>'+
				'<div style="padding-left:20px">&nbsp;</div>'+
				'<span style="font-size:18px"><span style="color:#000000"> <span style="font-size:18px"><strong><strong>7. <u>기타사항</u></strong></strong></span> </span></span>'+
				'<div style="padding-left:40px; text-indent:-20px"><span style="font-size:18px"><span style="color:#000000"><span style="font-size:18px">1)&nbsp;</span></span></span></div>'+
				'<div style="padding-left:40px; text-indent:-20px"><span style="font-size:18px"><span style="color:#000000">2)&nbsp;</span></span></div>'+
				'<div style="padding-left:40px; text-indent:-20px"><span style="font-size:18px"><span style="color:#000000">3)&nbsp;</span></span></div>'+
				'<span style="font-size:18px"><span style="color:#000000"> </span></span>'
	},
	{
		title: '담보물건정보',
		image: 'template_dambo1.PNG',
		description: '담보물건정보 샘츨입니다',
		html: '<div class="con_area">'+
					'<div class="scroll-con">'+
						'<div class="m-scroll"><!--모바일 스크롤 off-->'+
							'<div class="table" style="border-collapse:collapse; border-image:none; border:1px solid #999999; display:table; min-width:450px; table-layout:fixed; width:98%">'+
								'<div style="border-top-color:#999999; border-top-style:solid; border-top-width:3px; display:table-row">'+
								'<div style="background-color:#d9e5ff; border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#223a5e; display:table-cell; font-weight:bold; min-width:95px; padding:5px 3px; text-align:center; vertical-align:middle">담보물 내용</div>'+
								'<div style="background-color:#d9e5ff; border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#223a5e; display:table-cell; font-weight:bold; padding:5px; text-align:center; vertical-align:middle; width:60px">종류</div>'+
								'<div style="background-color:#d9e5ff; border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#223a5e; display:table-cell; font-weight:bold; min-width:95px; padding:5px 3px; text-align:center; vertical-align:middle; width:20%">면적</div>'+
								'<div style="background-color:#d9e5ff; border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#223a5e; display:table-cell; font-weight:bold; min-width:95px; padding:5px; text-align:center; vertical-align:middle; width:20%">감정가액</div>'+
							'</div>'+
							'<div style="border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; display:table-row">'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00㎡</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00원</div>'+
							'</div>'+
							'<div style="border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:1px; display:table-row">'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00㎡</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00원</div>'+
							'</div>'+
							'<div style="border-bottom-color:#999999; border-bottom-style:solid; border-bottom-width:3px; display:table-row">'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">oo아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">아파트</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00㎡</div>'+
								'<div style="border-right-color:#999999; border-right-style:solid; border-right-width:1px; color:#000000; display:table-cell; padding:10px; vertical-align:middle">00원</div>'+
							'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'►&nbsp;본인 거주하며 전입세대 없음&nbsp;<br />'+
				'►&nbsp;감정가액은 KB부동산시세 일반평균가를 적용&nbsp;'
	},
	{
		title: 'Image and Title22',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: '<h3>' +
			// Use src=" " so image is not filtered out by the editor as incorrect (src is required).
			'<img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />' +
			'Type the title here12323' +
			'</h3>' +
			'<p>' +
			'Type the text here' +
			'</p>'
	},
	{
		title: 'Strange Template',
		image: 'template2.gif',
		description: 'A template that defines two columns, each one with a title, and some text.',
		html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
			'<tr>' +
				'<td style="width:50%">' +
					'<h3>Title 1</h3>' +
				'</td>' +
				'<td></td>' +
				'<td style="width:50%">' +
					'<h3>Title 2</h3>' +
				'</td>' +
			'</tr>' +
			'<tr>' +
				'<td>' +
					'Text 1' +
				'</td>' +
				'<td></td>' +
				'<td>' +
					'Text 2' +
				'</td>' +
			'</tr>' +
			'</table>' +
			'<p>' +
			'More text goes here.' +
			'</p>'
	},
	{
		title: 'Text and Table',
		image: 'template3.gif',
		description: 'A title with some text and a table.',
		html: '<div style="width: 80%">' +
			'<h3>' +
				'Title goes here' +
			'</h3>' +
			'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
				'<caption style="border:solid 1px black">' +
					'<strong>Table title</strong>' +
				'</caption>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
			'</table>' +
			'<p>' +
				'Type the text here' +
			'</p>' +
			'</div>'
	} ]
} );
