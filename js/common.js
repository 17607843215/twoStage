

    //封装ajax
    function myAjax(type, url, myData, tagOperate) {
        $.ajax({
            type: type,
            url: url,
            data: myData,
            success: function (data) {
                data = JSON.parse(data);
                let idx = 0;
                data.map((item) => {
                    eval(tagOperate)//字符串变可执行语句
                    idx++;
                })
            }
        })
    }


    //点击时发送请求
$('#limitGoods .title a').click(function () {
    console.log(666)
    $.ajax({
        type: "GET",
        url: 'http://localhost:88/src/api/haitao_search.php',//你的请求程序页面随便啦
        async: false,//同步：意思是当有返回值以后才会进行后面的js程序。
        data: {dataTable: 'everydaynews',id:4},//请求需要发送的处理数据
        success: function (msg) {
            msg = JSON.parse(msg);
            console.log(msg)
            let arr = [];
            msg.map(item=>{
                arr.push(item.id);
            })
            window.location.href = 'html/list.html?'+arr;
        }
    })
})



//轮播图
$(".numNav li").eq(0).css({
    "background": "#de2643",
})
$(function() {
    //$(".toRight").hide();
    //$(".toLeft").hide();
    $('.toRight').hover(function() {
        $(".toLeft").hide()
    }, function() {
        $(".toLeft").show()
    })
    $('.toLeft').hover(function() {
        $(".toRight").hide()
    }, function() {
        $(".toRight").show()
    })
})

var t;
var index = 0;
/////自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 5) {
        index = 0
    }
    // console.log(index)
    $(".numNav li").eq(index).css({
        "background": "#de2643",
    }).siblings().css({
        "background": "rgba(15,15,15,0.82)",
    })
        //
    $(".bannerList a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

///点击鼠标 图片切换
$(".numNav li").click(function() {
    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "#de2643",
    }).siblings().css({
        "background": "rgba(15,15,15,0.82)"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    console.log(index);

    $(".bannerList a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

/////////////上一张、下一张切换
$(".toLeft").click(function() {
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击.toRight  index=0时  再点击 .toLeft 为负数了 会出错
    {
        index = 5
    }
    console.log(index);
    $(".numNav li").eq(index).css({
        "background": "#de2643",
    }).siblings().css({
        "background": "rgba(15,15,15,0.82)"
    })

    $(".bannerList a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

$(".toRight").click(function() {
    index++;
    if (index > 5) {
        index = 0
    }
    console.log(index);
    $(this).css({
        "opacity": "0.5"
    })
    $(".numNav li").eq(index).css({
        "background": "#de2643",
    }).siblings().css({
        "background": "rgba(15,15,15,0.82)"
    })
    $(".bannerList a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});
$(".toLeft,.toRight").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })
///

///////鼠标移进  移出
$(".numNav li,.bannerList a img,.toRight,.toLeft ").hover(
    ////////鼠标移进
    function() {
        $('.toRight,.toLeft').show()
        clearInterval(t);

    },
    ///////鼠标移开
    function() {
        //$('.toRight,.toLeft').hide()
        //alert('aaa')
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 5) {
                index = 0
            }
            $(".numNav li").eq(index).css({
                "background": "#de2643",
            }).siblings().css({
                "background": "rgba(15,15,15,0.82)"
            })
            $(".bannerList a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    })


$('#leaderNav .includeGoods li').mouseover(function(){
        $(this).find('.allGoodsModel').css({display:'block'})
}).mouseleave(function(){
    $(this).find('.allGoodsModel').css({display:'none'})
});


    $('.your-mount-right span:first-of-type').css({
        background:'#f3f3f3',
        color:'#fff'

    })
    $('.your-mount-right span:first-of-type').click(function () {
        let value = $('.your-mount-right input').val();
        --value;

        value >= 1 ? $('.your-mount-right input').val(value):value = 1;
        value === 1? $('.your-mount-right span:first-of-type').css({
            background:'#f3f3f3',
            color:'#fff'
        }):'';

    })
    $('.your-mount-right span:last-of-type').click(function () {
        $('.your-mount-right span:first-of-type').css({
            background:'#fff',
            color:'#666'
        })

        let value = $('.your-mount-right input').val();
        ++value;
        $('.your-mount-right input').val(value);
        $('.allPrice span').html(value * $('.goods-pri span').html()+'   元');
    })



//放大镜
$('.leftDetails .top').mouseover(function(e){
    let index = $('.leftDetails .top ul').index($('.leftDetails .top ul li[style="display:block"]'));
    console.log(index)
    $('.floatBox').css({
        display:'block'
    });
    $('.bigBox').css({
        display:'block'
    })
});
$('.leftDetails .top').mouseleave(function(){
    $('.floatBox').css({
        display:'none'
    });
    $('.bigBox').css({
        display:'none'
    })
});
$('.leftDetails').mousemove(function(e){

    let left = e.clientX - $('#mainDetails .container .productDetails').prop('offsetLeft')- $('.top .floatBox').prop('offsetWidth')/2;
    let top = e.clientY - $('#mainDetails .container .productDetails').prop('offsetTop') - $('.top .floatBox').prop('offsetHeight')/2;

    if(left < 0 ) {
        left = 0;
    }
    else if(left >($('.leftDetails .top').prop('offsetWidth')- $('.floatBox').prop('offsetWidth'))){
        left = $('.leftDetails .top').prop('offsetWidth')- $('.floatBox').prop('offsetWidth');
    }


    if(top<0){
        top = 0;
    }else if(top > ($('.leftDetails .top').prop('offsetHeight')  - $('.floatBox').prop('offsetHeight'))){
        top = $('.leftDetails .top').prop('offsetHeight') - $('.floatBox').prop('offsetHeight');
    }


    $('.floatBox').css({
        left:left + 'px',
        top: top +'px'
    })



    let percentX = left / ($('.leftDetails .top').prop('offsetWidth') - $('.floatBox').prop('offsetWidth'));
    let percentY = top / ($('.leftDetails .top').prop('offsetHeight') - $('.floatBox').prop('offsetHeight'));


    $('.bigBox img').css({
        left:-percentX * ($('.bigBox img').prop('offsetWidth') - $('.bigBox').prop('offsetWidth')) + "px",
        top:-percentY * ($('.bigBox img').prop('offsetHeight') - $('.bigBox').prop('offsetHeight')) + 'px',
    })

    console.log($('.bigBox').prop('offsetWidth'))
});




