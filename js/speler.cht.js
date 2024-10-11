$(document).ready(function() {
    console.log('document ready');

    var totalSpelers = 0;
    var spelerAantal = 0;
    $("#total").html('Totaal: ' + totalSpelers + ' (Spelers: ' + spelerAantal + ')');


    $(".speler").click(function(e) {
        console.log('click');

        var spelerPunten = $(this).find(".punten").attr('data-punten');


        active = $(this).find('.card').hasClass('bg-success');
        console.log(active);

        if (active) {
            // remove speler 
            $(this).find('.card').removeClass('bg-success').addClass('bg-info');
            totalSpelers -= Number(spelerPunten);
            spelerAantal--;
        } else {
            // add speler
            $(this).find('.card').removeClass('bg-info').addClass('bg-success');
            totalSpelers += Number(spelerPunten);
            spelerAantal++;
        }

        //alert(totalSpelers);
        $("#total").text('Totaal: ' + totalSpelers + '  (Spelers: ' + spelerAantal + ')');
        //$("#total").text('totaal: '+totalSpelers);

        if ((totalSpelers <= 12) && (spelerAantal == 5)) {
            $("#total").addClass('bg-groen');
        } else {
            $("#total").removeClass('bg-groen');
        }

        if ((totalSpelers > 12) || (spelerAantal > 5)) {
            $("#total").addClass('bg-rood');
        } else {
            $("#total").removeClass('bg-rood');
        }
        
    });
});