$('html').mousewheel(function(event, delta) {    
    this.scrollLeft -= (delta * 30);        
    event.preventDefault();    
 });  

$( '#intro .contentBG' ).on('click', function(){
    $(this).addClass('on')
    $('#intro .contentBG>p').eq(0).css({ display:'none'})
})
$('#intro .contentBG').css({
    transform:'translateZ( -4000px )',
    marginTop: '30%' ,
    marginLeft: '50%' ,
})
$('#intro .contentBG > img').on('click',function(){
    $('#intro .contentBG').css({
        transform:'translateZ( 0px )',
        marginTop: 0 ,
        marginLeft: 0 ,
    })
    $('#intro .contentBG>p').eq(1).css({ display:'none'})
    $('#content .article').addClass('on')
    if ($('#content .article').hasClass('on')){
        $('.article .imgbox2').addClass('on')
        $('.sprite').addClass('on')
        $('.scrollevt').addClass('on')
    }
})



function draw ( jumsu, sname ) {
    var count = 0;
    var stop = setInterval (function(){
        count++
        if (count<=jumsu) {
            $(sname).find('.myscore').text(count+'%')
            .css({
                width:count+'%',
                opacity:1
            }) 
        } else {
            clearInterval(stop)
            return false
        }
    },10)
}

$(window).on('scroll', function(){
    var ww = $(window).width() - 300
    var scl = $(window).scrollLeft() 
    var snum = scl / 30
    var num = snum % 7

    $('.scrollevt').removeClass('on')

    if ( scl >= ww ) {
        $('.article .skill').addClass('on')
        if ( scl >= ww && $('.article .skill').hasClass('on') ){
            draw (70, '.html')
            draw (50, '.css')
            draw (70, '.javascript')
            draw (50, '.jquery')
            draw (50, '.react')
        }
    }
    if ( scl === (ww + 300) ) {
        $('.article .imgbox4 .design').addClass('on')
    }
    $('#content .sprite img').css({
        marginLeft: (num * -340 )+'px'
    })
    if ( num === 6 ) {
        $('#content .sprite img').css({
            marginLeft: '0px'
        })
    }
    if ( scl > ww*2 ) {
        $('#content .article .clickbus').addClass('on')
    }
    console.log(ww, scl)
})



$("#content .slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    pauseOnHover: false, // 마우스오버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="next"><span class="lnr lnr-chevron-right"></span></button>',
})

$('#content .article .bus').on('click',function(){
    $(this).toggleClass('on')
    $('#content .article .clickbus').removeClass('on')
})