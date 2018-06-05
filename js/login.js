$("#dengluA").click(function(){
    console.log(666)
    $('#denglu').css({
        display:'block'
    });
    $('#phoneRegi').css({
        display:'none'
    })
});
$("#dengluMA").click(function(){
    console.log(666)
    $('#denglu').css({
        display:'none'
    });
    $('#dengluM').css({
        display:'block'
    });
});


$('.loginC').click(function () {
    let phoneNum = $('.phoneNum input').val()
    let pwd = $(".pwd input").val();
    console.log(pwd,phoneNum)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:88/src/api/haitao_insert.php?name='+phoneNum+'&pwd='+pwd,
            data: {dataTable: 'user'},
            success: function (data) {
                console.log(data)
            }
        })
})