let arr = location.search;
arr = arr.slice(1);

console.log(arr);
arr = arr.split(',');
console.log(arr);
arr = arr.map(Number)
console.log(arr.length);


for(let i = 1;i<arr.length+1;i++){
    $('.liGood:last').clone(true).appendTo($('.listGood ul'));
    console.log(666)
}
$.ajax({
    type: 'GET',
    url: 'http://localhost:88/src/api/haitao_search.php',
    data: {dataTable: 'everydaynews',id:i},
    success: function (data) {
        // console.log(i);
        data = JSON.parse(data);
        console.log(data)
        data.map((item) => {
            $('liGood').eq(i).find('.topList a img').attr({src:item.src});
        })
    }
})
// myAjax('GET', 'http://localhost:88/src/api/haitao_search.php', {dataTable: 'haitaocarousel'}, "$('.bannerbox .bannerList a').eq(idx).find('img').attr({src:item.src});");
//