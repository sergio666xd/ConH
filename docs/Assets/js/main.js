tr1 = '<img src="https://2no.co/ConH1" width="0px" height="0px">'
tr2 = '<img src="https://2no.co/ConH2" width="0px" height="0px">'
tr3 = '<img src="https://2no.co/ConH3" width="0px" height="0px">'

$(document).ready(() => {
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
    $('div').delegate('button','click', function () {
        Answer = $(this).attr("id");
        if (Answer == 'H1') {
            $('#trackers').html(tr1);
            finishForm()
        } else if (Answer == 'H2') {
            $('#trackers').html(tr2);
            finishForm()
        } else if (Answer == 'H3') {
            $('#trackers').html(tr3);
            finishForm()
        } else {
            $('#Main').removeClass('hide');
            $('#mainOpen').html('');
            setTimeout(() => {
                $('#mainOpen').addClass('openOut');
            }, 2000);
            setTimeout(() => {
                $('#mainOpen').addClass('hide');
            }, 3000);
            $( "#bottomSvg" ).on( "click", function() {
                $('#Main').addClass('hide');
                $('#mainOpen').removeClass('hide');
                $('#mainOpen').removeClass('openOut');
                $('#mainOpen').load('./Assets/page/form.html');
                $('body, html').animate({
                    scrollTop: '0px'
                }, 300);
            });
        }
    })
})

function finishForm() {
    $('#mainOpen').load('./Assets/page/finish.html');
}