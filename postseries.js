var getValue = $('.popup').attr("data-trailer");
document.querySelector("a.trailerbutton").href = getValue;

$(".resWarn").css("display","flex").hide().fadeIn(),$("#resEn").click((function(){$(".resWarn").fadeOut((function(){$(this).remove()}))})),$("#resEx").click((function(){window.location.href="/"}));

$(document).ready(function() {
    var i = $(".streaming").html();
    $(".linkstr").html(i)
}), $(".ime a").prepend("<div class='nfo'>Klik Gambar Untuk Streaming</div><b class='stream'><i class='fa fa-play-circle' aria-hidden='true'></i> Streaming</b>"), $(".animefull").before("<div class='mnu' id='mnu'><b>Streaming Box</b><a id='close'><i class='fa fa-close' aria-hidden='true'></i> <span>Close</span></a></div>"), $(".animefull").after('<hr class="hr"/>'), $(".ime b").click(function() {
    $(".hr").slideDown(100, function() {
        $(".animefull").delay(100).slideUp(1e3, function() {
            $(".hr").slideUp(100, function() {
                var i = $(".linkstr a:first").attr("name").replace("https://drive.google.com/open?id=", "https://safeloker.id/embed/?gdrive=");
                $(".ime img").attr("src"), $(".animefull").after("<div id='sampleVideo' style='display: none;opacity: 0;' class='frme'><div class='playerload' style='visibility' id='loadingplayer'></div><iframe src='" + i + "' frameborder='0' marginwidth='0' marginheight='0' scrolling='NO' width='100%' height='100%' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe></div>"), $(".frme").css("display", "block"), $(".frme").animate({
                    opacity: 1
                }, 100, function() {
                    $("#close i").attr("class", "fa fa-close").css("color", "#333"), $("#close span").html("Close").css("color", "#333"), $(".linkstr").slideDown(300, function() {
                        $(".mnu").slideDown(300, function() {
                            $("html, body").animate({
                                scrollTop: $("#mnu").offset().top
                            }, 300)
                        })
                    }), $(".linkstr").prepend("<b>Pilih Episode Dibawah Ini</b>"), $(".linkstr a").click(function() {
                        var i = $(this).html().replace("Ep", "Episode "),
                            e = "Nonton " + $(".infox h1").html() + " Episode " + i + " Sub Indo";
                        $(".linkstr b").animate({
                            color: "#dddddd"
                        }, 300, function() {
                            $(".linkstr b").html(e), $(".linkstr b").animate({
                                color: "#333333"
                            }, 300)
                        });
                        var l = this.name.replace("", "");
                        $(".frme iframe").attr("src", l)
                    })
                })
            })
        })
    })
}), $("#close").click(function() {
    $(".linkstr").slideUp(300, function() {
        $(".frme").animate({
            opacity: 0
        }, 300, function() {
            $(".frme").css("display", "none"), $(".frme").remove(), $(".linkstr b").remove(), $(".ime b").css("display", "block"), $(".mnu").slideUp(300, function() {
                $(".hr").slideDown(300, function() {
                    $(".animefull").slideDown(1e3, function() {
                        $(".hr").delay(300).slideUp(300)
                    }), $(".ime b").css("display", ""), $(".nfo").css("display", ""), $(".forfxd2").attr("class", "forfxd")
                })
            })
        })
    })
});
var g,coll=document.getElementsByClassName("collapsible");for(g=0;g<coll.length;g++)coll[g].addEventListener("click",function(){this.classList.toggle("active");var l=this.nextElementSibling;l.style.maxHeight?l.style.maxHeight=null:l.style.maxHeight=l.scrollHeight+"px"});
