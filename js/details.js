

let params = location.search;
// console.log(params);
params = params.slice(1);
params = params.split('&');
console.log(params);
let goodsId;
let dataTable1,arrNew = [];
params.forEach(function(item){
    let arr = item.split('=');
    arrNew.push(arr[1]);
});

goodsId = arrNew[0];
dataTable1 = arrNew[1];

var str_a = '你好';
var str_b = 'hello';

function test(s){
    return window['top' + s];
}

// console.log(test('a')); //你好
// console.log(test('b')); //hello

    $.ajax({
        type: 'GET',
        url: 'http://localhost:88/src/api/haitao_search.php',
        data: {dataTable: 'xiangqingTable'},
        success: function (data) {
            data = JSON.parse(data);
            let idx = 0,i=0;
            data.map((item )=> {
                for(let key in item){
                    if(key.match('top')){
                        $('.leftDetails .top ul li').eq(idx).find('img').attr({src:item[key]});
                        idx++;
                    }
                }

            })
        }
    })


function detailAjax(type, url, myData,match, tagOperate){
    $.ajax({
        type: type,
        url: url,
        data: myData,
        success: function (data) {
            data = JSON.parse(data);
            let idx = 0,i=0;
            data.map((item )=> {
                for(let key in item){
                    if(key.match(match)){
                        // $('.leftDetails .top ul li').eq(idx).find('img').attr({src:item[key]});
                        eval(tagOperate)
                        idx++;
                    }
                }

            })
        }
    })
}

detailAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'xiangqingTable'},'top', "$('.leftDetails .top ul li').eq(idx).find('img').attr({src:item[key]});");

detailAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'xiangqingTable'},'bot', "$('.leftDetails .bottom ul li').eq(idx+1).find('img').attr({src:item[key]});");

detailAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'xiangqingTable'},'box', "$('.bigBox ul li').eq(idx).find('img').attr({src:item[key]});");


    // $.ajax({
    //     type: type,
    //     url: url,
    //     data: myData,
    //     success: function (data) {
    //         data = JSON.parse(data);
    //         console.log(data);
    //         let idx = 0;
    //         data.map((item) => {
    //             eval(tagOperate)//字符串变可执行语句
    //             idx++;
    //         })
    //     }
    // })

//
// myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: dataTable},
//     "$('.leftDetails .top ul li').eq(idx).find('img').attr({src:item.top1});");



$('#leaderNav .allGoods').hover(
        function(){
            $('#leaderNav .includeGoods').css({
                display:'block'
            })
        },
        function(){
            $('#leaderNav .includeGoods').css({
                display:'none'
            })
        }

)



$('.your-size-right ul li span').click(function () {
    $(this).css({
        border:'1px solid #de2634'
    }).parent().siblings().find('span').css({
        border:'1px solid #999'
    });

});

$('.your-color-right ul li span').click(function () {
    $(this).css({
        border:'2px solid #de2634'
    }).parent().siblings().find('span').css({
        border:'1px solid #999'
    });

});




//详细页面  数量
// $('.your-mount-right span:first-of-type').css({
//     background:'#f3f3f3',
//     color:'#fff'
//
// })
// $('.your-mount-right span:first-of-type').click(function () {
//     let value = $('.your-mount-right input').val();
//     --value;
//
//     value >= 1 ? $('.your-mount-right input').val(value):value = 1;
//     value === 1? $('.your-mount-right span:first-of-type').css({
//         background:'#f3f3f3',
//         color:'#fff'
//     }):'';
//
// })
// $('.your-mount-right span:last-of-type').click(function () {
//     $('.your-mount-right span:first-of-type').css({
//         background:'#fff',
//         color:'#666'
//     })
//
//     let value = $('.your-mount-right input').val();
//     ++value;
//     $('.your-mount-right input').val(value)
// })

//leftDetails

$('.leftDetails .bottom ul .pic').hover(
    function () {
        index = $(this).index()-1;
        // console.log($('.leftDetails .top ul li:eq('+index+')'))
        $('.leftDetails .top ul li:eq('+index+')').css({
            display:'block'
        }).parent().find('li').not('li:eq('+index+')').css({
            display:'none'
        })
})

$('.leftDetails .bottom ul .left').click(function(){
    // let index = $('.leftDetails .bottom ul .pic').index($('.leftDetails .bottom ul .pic'));
    --index;
    if(index<0){
        index = 3;
    }
    $('.leftDetails .top ul li:eq('+index+')').css({
        display:'block'
    }).parent().find('li').not('li:eq('+index+')').css({
        display:'none'
    })
    console.log(index)
})

$('.leftDetails .bottom ul .right').click(function(){
    // let index = $('.leftDetails .bottom ul .pic').index($('.leftDetails .bottom ul .pic'));
    ++index;
    if(index>3){
        index = 0;
    }
    $('.leftDetails .top ul li:eq('+index+')').css({
        display:'block'
    }).parent().find('li').not('li:eq('+index+')').css({
        display:'none'
    })
    console.log(index)
})


$('.goodsDetailsRightLeader span:eq(0)').addClass('clickUp').find('i').css({
    display:'block'
});

$('.goodsDetailsRightLeader span:eq(0)').click(function () {
    $('.goodsDetailsRightLeader span:eq(0)').addClass('clickUp').find('i').css({
        display:'block'
    });
    $('.goodsDetailsRightLeader span:eq(1)').removeClass('clickUp').find('i').css({
        display:'none'
    });
    $('.goodsDetailsRightDetails').css({
        display:'block'
    })


});

$('.goodsDetailsRightLeader span:eq(1)').click(function () {
    $('.goodsDetailsRightLeader span:eq(1)').addClass('clickUp').find('i').css({
        display:'block'
    });
    $('.goodsDetailsRightLeader span:eq(0)').removeClass('clickUp').find('i').css({
        display:'none'
    });
    $('.goodsDetailsRightDetails').css({
        display:'none'
    })
});

$('.dropGoodsProperty .drop a').click(function(){
$('.goodsProperty').toggleClass('heightAuto');
});


$('.explain .your-explain-right a:eq(1)').click(function () {
    console.log($('#indexRight .leibiao li:eq(2)').prop('offsetTop'))
    $('#jiaru').css({
        display:'block',
        left:$('#indexRight .leibiao li:eq(2)').prop('offsetTop'),
        transition:'1s'
    })
    // shoppingCartAnimate('.explain .your-explain-right')

})


//飞入购物车
// function shoppingCartAnimate(dom){
//     var goodsItem = $(dom).closest(".goodsItem");
//     var flyElm = goodsItem.clone();
//     $('body').append(flyElm);
//     flyElm.css({
//         'z-index': 9000,
//         'display': 'block',
//         'position': 'absolute',
//         'top': goodsItem.offset().top +'px',
//         'left': goodsItem.offset().left +'px',
//         'width': goodsItem.width() +'px',
//         'height': goodsItem.height() +'px'
//     });
//     flyElm.animate({
//         top: $('#shoppingCart').offset().top,
//         left: $('#shoppingCart').offset().left,
//         width: 10,
//         height: 10
//     }, 'slow', function() {
//         flyElm.remove();
//     });
// }





