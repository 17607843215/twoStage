

$(function($) {

    //封装ajax


    //轮播图请求
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'haitaocarousel'}, "$('.bannerbox .bannerList a').eq(idx).find('img').attr({src:item.src});");

    //newGoods请求
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'newGoods'}, "$('#newGoods ul li').eq(idx).find('img').attr({src:item.src});");

    //limitGoods请求
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'limitGoods'},
        "$('.limitGoods ul li').eq(idx).find('a').attr({name:item.id}).find('img').attr({src:item.src,name:item.id});" +
        "$('.limitGoods ul li').eq(idx).find('.right  h3').eq(1).find('a').html(item.h3_2);" +
        "$('.limitGoods ul li').eq(idx).find('.right h3').eq(0).find('a').html(item.h3);" +
        "$('.limitGoods ul li').eq(idx).find('.right p').eq(0).find('.afterPrice').html(item.afterPrice);" +
        "$('.limitGoods ul li').eq(idx).find('.right p').eq(0).find('.beforePrice').html(item.beforePrice);" +
        "$('.limitGoods ul li').eq(idx).find('.right p').eq(1).find('span').html(item.limit_good);");

    $('.today ul li').click(function(e){
        e = e.target;
        if(e.tagName === 'A' || e.tagName === 'IMG'){
            // console.log(666)
            // console.log($(e).attr('name'))
            location.href = 'html/details.html?' + 'id='+$(e).attr('name')+'&dataTable=xiangqingTable';
        }

    })
    // window.location.href = ''

    //每日上新 请求
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'everydaynews'},
        "$('.newGoodss li').eq(idx).find('a').attr({href:'html/details.html'}).find('img').attr({src:item.src});" +
        "$('.newGoodss li').eq(idx).find('a:eq(1)').html(item.title).attr({title:item.title});" +
        "$('.newGoodss li').eq(idx).find('p:last').find('span').html(item.afterPrice);" +
        "$('.newGoodss li').eq(idx).find('p:last').find('del').html(item.beforePrice)");

    //motherChild请求
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'motherchild'},
        "$('.motherOwn .ownCenter ul li').eq(idx).find('img').attr({src:item.src});" +
        "$('.motherOwn .ownCenter ul li').eq(idx).find('h3').html(item.h3);" +
        "$('.motherOwn .ownCenter ul li').eq(idx).find('p').html(item.description);");

    //guessYouLike
    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'guessyoulike'}, "" +
        "$('.guessYourLike ul li').eq(idx).find('.yourLikeB h4 a').html(item.h3);" +
        "$('.guessYourLike ul li').eq(idx).find('.yourLikeB h4 a').html(item.h3).attr({title:item.h3});" +
        "$('.guessYourLike ul li').eq(idx).find('a img').attr({src:item.src});" +
        "$('.guessYourLike ul li').eq(idx).find('.yourLikeB .price span').html(item.afterprice);" +
        "$('.guessYourLike ul li').eq(idx).find('.yourLikeB .price del').html(item.beforeprice);" +
        "$('.guessYourLike ul li').eq(idx).find('.yourLikeB .price a').html(item.appraise);");

    myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'hotBrand'},
        "$('.hotGrand .right li').eq(idx).find('img').attr({src:item.src,title:item.title});" +
        "$('.hotGrand .right li').eq(idx).find('p').html(item.title);");


    //数据库表名
    let dataTable = ['meiyong', 'clothsshoe', 'jiaju', 'yingyang', 'shuma', 'huwai'], i = 0;
    let articleId = [];
    // function articleHaveId(){
    //     for(let i = 0;i<$('#main .container article[id]').length;i++){
    //         articleId.push($('#main .container article[id]:eq('+i+')').attr('id'));
    //     }
    //     console.log(new Set(articleId))
    // }
    let tableName = '';
    $('#indexLeft a[href*="#"]').click(loadingMore);

    $(window).scroll(function () {

            if (window.innerHeight + $(document).scrollTop() == document.body.scrollHeight && $('.container .today').length <=10) {
                $('#main .container #motherHot').clone(true).attr({id:tableName}).appendTo('#lastToday');
                $('#main .container .hotSellBrand:last').clone(true).appendTo('#lastToday');

                myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: dataTable[i]}, "$('.today:last .title h2').html(item.name);");
                articleId.push(dataTable[i]);
                i++;
                console.log(articleId)
                tableName = '';
            }


        //asideLeft 固定定位
        if ($(document).scrollTop() > 618) {
            $('#indexLeft').css({
                position: 'fixed',
                top: '60px'
            });
        }
        else {
            $('#indexLeft').css({
                position: 'absolute',
                top: '618px'
            });
        }

        if ($(document).scrollTop() > 618) {
            $('#indexRight').css({
                position: 'fixed',
                top: '60px'
            });
        }
        else {
            $('#indexRight').css({
                position: 'absolute',
                top: '618px'
            });
        }


        //吸顶
        if ($(document).scrollTop() > 31) {
            $('#SearchCar .xiding').css({
                display: 'block',
                position: 'fixed'
            })
        } else {
            $('#SearchCar .xiding').css({
                display: 'none',
                position: 'absolute'
            })
        }


    })

    //allGoods hover
    $('#leaderNav .includeGoods li').hover(
        function () {
            $(this).css({
                borderLeft: '8px solid #de2643'

            }).find('i').css({
                marginLeft:'-8px'
            })
        },
        function () {
            $(this).css({
                borderLeft: '0 none'
            }).find('i').css({
                marginLeft:'0'
            })
        }
    )

        //锚点跳转滑动效果

    function loadingMore() {

        if($('#main').find('#'+this.href.slice(this.href.match('#').index+1)).length === 0){
            tableName = this.href.slice(this.href.match('#').index+1);
            articleId.push(this.href.slice(this.href.match('#').index+1));
            console.log(articleId)
            $('#main .container #motherHot').clone(true).attr({id:tableName}).appendTo('#lastToday');
            $('#main .container .hotSellBrand:last').clone(true).appendTo('#lastToday');
            myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: tableName}, "$('.today:last .title h2').html(item.name);");


            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                            scrollTop: targetOffset
                        },
                        1000);
                    // console.log(dataTable)
                    // return dataTable;
                }
            }
            // return dataTable;
        }else{
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                            scrollTop: targetOffset
                        },
                        1000);
                    // return dataTable;
                }
                // return dataTable;
            }
        }

    }

    // console.log(tableName);




})