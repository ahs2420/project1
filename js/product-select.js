$(function(){
    $(".product-select-submit").click(function(){
        var target=$("form[name=product-select]");
        var chkItem=$(".buy-item-chk:checked");
        var isSubmit=true;
        if(chkItem.length<1){
            alert("리워드를 선택해 주세요.");
            isSubmit=false;
            return;
        }
        chkItem.each(function(){
            var chkItemName=$(this).attr("name");
            var chkItemOpt=$("[name="+chkItemName+"-option]");
            var chkItemCnt=$("[name="+chkItemName+"-count]");
            if(!chkItemCnt.val()){
                alert("수량을 입력해 주세요.");
                chkItemOpt.focus();
                isSubmit=false;
                return;
            }
            if($(this).data("type")=="option"){
                if(!chkItemOpt.val()){
                    alert("옵션을 선택해 주세요.");
                    chkItemOpt.focus();
                    isSubmit=false;
                    return;
                }
            }
        });
        
        if(isSubmit){
            target.submit();
            //alert("성공");
        }else{
            return false;
        }
        
    });
});