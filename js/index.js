
$('#intro').on('scroll touchmove mousewheel', function(e){
    e.preventDefault();
    e.stopPropagation(); 
    return false;
})
 

$( '#intro .contentBG' ).on('click', function(){
    $(this).addClass('on')
    $('#intro .contentBG>p').eq(0).css({ display:'none'})
    $('#intro .contentBG>p').eq(1).css({ display:'block'})
})

$('#intro .contentBG').css({
    transform:'translateZ( -4000px )',
    marginTop: '30%' ,
    marginLeft: '50%' ,
})



$('#intro .contentBG > p').eq(1).on('click',function(){
    if ( !$('#content').hasClass('active') ) {
        $('#content').addClass('active')
    }
    
    $('#intro .contentBG> p').eq(1).css({ color:'transparent'})
    $('#intro .contentBG').css({
        transform:'translateZ( 0px )',
        marginTop: 0 ,
        marginLeft: 0 ,
    })
    
    $('#content .article').addClass('on')
    if ($('#content .article').hasClass('on')){
        $('.article .imgbox2').addClass('on')
        $('.sprite').addClass('on')
        $('.scrollevt').addClass('on')
    }

    $('#intro').off('scroll touchmove mousewheel'); 

    $('html').mousewheel(function(event, delta) {    
    this.scrollLeft -= (delta * 30);        
    event.preventDefault();  
    }) 
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
    console.log(snum)

    $('.scrollevt').removeClass('on')
    
    if ( !$('#content').hasClass('active') ) {
        $(window).scrollLeft(0) 
    }

    $('.contentBG img:nth-of-type(2)').css({
        opacity: snum * 0.01 
    })

    if ( scl >= ww && !$('.imgbox4 .skill').hasClass('on')) {
        $('.imgbox4 .skill').addClass('on')
        draw (85, '.html')
        draw (80, '.css')
        draw (65, '.javascript')
        draw (70, '.jquery')
        draw (50, '.react')   
    }
    if ( scl >= (ww + 300) ) {
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
    if ( $('#content .article .bus').hasClass('on') ) {
    
        String.prototype.toKorChars = function() { 
            var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
            cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
            cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
            var str = this, 
            cnt = str.length, 
            chars = [], 
            cCode; 
            for (var i = 0; i < cnt; i++) { 
                cCode = str.charCodeAt(i); 
                if (cCode == 32) { 
                  chars.push(" ");
                  continue;
                } // 한글이 아닌 경우 
                if (cCode < 0xAC00 || cCode > 0xD7A3) { 
                    chars.push(str.charAt(i)); continue; 
                    } 
                cCode = str.charCodeAt(i) - 0xAC00; 
        
                jong = cCode % 28; 
                // 종성 
                jung = ((cCode - jong) / 28 ) % 21 
                // 중성 
                cho = (((cCode - jong) / 28 ) - jung ) / 21 
                // 초성 
        
                //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
                chars.push(cCho[cho]);
                chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
                if (cJong[jong] !== '') { 
                    chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
                }
               
            } 
            
            return chars; 
        }
        //타이핑할 문장
        var result1  = "프론트엔드 개발자";
        var result2  = "'김연주'";
        var typeing1=[], typeing2=[];;
        result1 = result1.split(''); // 한글자씩자름
        result2 = result2.split(''); // 한글자씩자름
        //각글자 초성,중성,종성으로 나눔
        for(var i =0; i<result1.length; i++){
            typeing1[i]=result1[i].toKorChars();
        }
        for(var i =0; i<result2.length; i++){
            typeing2[i]=result2[i].toKorChars();
        }
        //출력할 엘리먼트요소 가져옴 
        var resultDiv1 = document.getElementsByClassName("result1")[0];
        var resultDiv2 = document.getElementsByClassName("result2")[0];
        var text = "";
        var i=0; 
        var j=0; 
        //총글자수
        var imax1 = typeing1.length;
        var imax2 = typeing2.length;
        //setInterval을 이용해 반복적으로 출력 
        var inter = setInterval(typi,100);
        var inter2;       
        function typi(){
            //글자수만큼 반복후 종료 
          resultDiv1.classList.add("cursor");
            if(i<=imax1-1){
                //각 글자가 초성 중성 종성 순서대로 추가되도록 
                var jmax1 = typeing1[i].length;
                resultDiv1.innerHTML = text + typeing1[i][j];
                j++;
                if(j==jmax1){
                    text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                    i++;
                    j=0;
                }
            } else{
                clearInterval(inter);
                 text ="";
                i=0;
                j=0; 
           setTimeout(function(){    
              resultDiv1.classList.remove("cursor");
              setTimeout(function(){             
                 resultDiv2.classList.add("cursor");
                 setTimeout(function(){
                    inter2 = setInterval(typi2,100);
                 },200);
               },200);
             },200);
            }
        }  
        function typi2(){
            //글자수만큼 반복후 종료 
        
            if(i<=imax2-1){
                //각 글자가 초성 중성 종성 순서대로 추가되도록 
                var jmax2 = typeing2[i].length;
                resultDiv2.innerHTML = text + typeing2[i][j];
                j++;
                if(j==jmax2){
                    text+=  typeing2[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
                    i++;
                    j=0;
                }
            } else{
                clearInterval(inter);
            }
        }
    } else {
        $('.bustext .emph').removeClass('on')
    }
})

$('.bustext .lnr').on('mouseover',function(){
    $(this).next('.emph').addClass('on')
})    


