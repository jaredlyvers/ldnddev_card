jQuery(document).ready(function($){
    $('.ldnddev-card__image, .ldnddev-card__title, .ldnddev-card__copy').click(function(){
        if($(this).parent().hasClass('-active')){
            $(this).parent().removeClass('-active');
        }
        else{
            $(this).parent().addClass('-active');
        }
    });
    $('.ldnddev-card__close').click(function(){
        $(this).parent().parent().removeClass('-active');
    })
});