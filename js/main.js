//start shirnk navbar

$(document).ready(function () {
    $(window).scroll(function () {
        if($(document).scrollTop()>50){
            $('nav').addClass('shirnk');
            $('nav').removeClass('nav-color');
        }
        else {
            $('nav').removeClass('shirnk');
            $('nav').addClass('nav-color');
        }
    })
});

//end shirnk navbar

// isotpe plugin

$(document).ready(function () {
    $('.main-iso').isotope({
        itemSelector:'.item',
        layoutMode:'fitRows'
    });

    $('.iso-nav ul li').click(function () {
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector=$(this).attr('data-filter');
        $('.main-iso').isotope({
            filter:selector
        });
        return false;
    })
})

//end isotpe plugin

// pie chart

$(document).ready(function () {
    $('#demo-pie-1').pieChart({
        barColor: '#31e226',
        trackColor: '#fff',
        lineCap: 'round',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-2').pieChart({
        barColor: '#e2dc45',
        trackColor: '#fff',
        lineCap: 'butt',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-3').pieChart({
        barColor: '#31e226',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-4').pieChart({
        barColor: '#247aaf',
        trackColor: '#fff',
        lineCap: 'square',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

});

// end pie chart