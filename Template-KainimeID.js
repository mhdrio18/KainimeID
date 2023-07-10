const serieskai=new BloggerScript({noImage:noThumbnail,sizeImage:"s320"});function getserieskai(e){let s=serieskai.getFeed(e),i="<ul>";s.forEach(e=>{let s=e.label.find(e=>kaiStudio.some(s=>s==e));if(i+=`<li><div class="imgseries"><a href="${e.link}"><img class="lazy" src="${noThumbnail}" data-src="${e.image}" loading="lazy" itemprop="image" title="${e.title}" alt="${e.title}" width="60" height="85"></a></div><div class="leftseries"><h4><a href="${e.link}">${e.title}</a></h4><span class="${e.label.find(e=>kaiGenre.some(s=>s==e))}"><b>Genres</b>: `,e.label.some(e=>kaiGenre.includes(e))){let a=e.label.filter(e=>kaiGenre.includes(e));a.forEach((s,l)=>{i+=`<a href="${e.link}">${s}</a>`,a.length-1!=l&&(i+=", ")})}i+="</span> ",s&&(i+=`<span>${s}</span> `),i+=`</div></li>`}),sk&&(sk.innerHTML=`${i} </ul>`)}if(sk=document.querySelector("#serieskai")){let e=sk.dataset.label||!1;serieskai.xhr("GET",`/feeds/posts/default${!1==e?"":`/-/${e}`}?alt=json-in-script&max-results=5`,getserieskai)}

$('.liveSearch').each(function () {
    const _0x821cx6 = location.protocol + '//' + location.hostname,
        _0x821cx7 = [];
    let _0x821cx8 = 0;
    $(this).on('click input', function () {
        0 == _0x821cx8 && $.ajax({
            type: 'GET',
            url: _0x821cx6 + '/feeds/posts/default/-/Series',
            data: {
                alt: 'json',
                "max-results": 0
            },
            dataType: 'jsonp',
            success: function (_0x821cx9) {
                let _0x821cxa = _0x821cx9.feed.openSearch$totalResults.$t,
                    _0x821cxb = _0x821cxa % 150 == 0 ? _0x821cxa / 150 - 1 : Math.floor(_0x821cxa / 150);
                if (_0x821cxa > _0x821cx8) {
                    $('#kaiLive').addClass('active');
                    for (let _0x821cx9 = 0; _0x821cx9 <= _0x821cxb; _0x821cx9++) {
                        $.ajax({
                            type: 'GET',
                            url: _0x821cx6 + '/feeds/posts/default/-/Series',
                            data: {
                                alt: 'json',
                                "start-index": 150 * _0x821cx9 + 1,
                                "max-results": 150
                            },
                            dataType: 'jsonp',
                            success: function (_0x821cx6) {
                                for (let _0x821cxd = 0; _0x821cxd < _0x821cx6.feed.entry.length + 1; _0x821cxd++) {
                                    if (_0x821cxa > _0x821cx8) {
                                        const _0x821cxa = {},
                                            _0x821cxe = _0x821cx6.feed.entry[_0x821cxd];
                                        _0x821cxa.title = _0x821cxe.title.$t;
                                        const _0x821cxf = null != _0x821cxe.content ? _0x821cxe.content.$t : _0x821cxe.summary.$t,
                                            _0x821cx10 = _0x821cxf.indexOf('<img'),
                                            _0x821cx11 = _0x821cxf.indexOf('src="', _0x821cx10) > -1 ? _0x821cxf.indexOf('src="', _0x821cx10) : _0x821cxf.indexOf("src='", _0x821cx10),
                                            _0x821cx12 = _0x821cxf.indexOf('"', _0x821cx11 + 5) > -1 ? _0x821cxf.indexOf('"', _0x821cx11 + 5) : _0x821cxf.indexOf("'", _0x821cx11 + 5),
                                            _0x821cx13 = _0x821cxf.substr(_0x821cx6 + 5, _0x821cx12 - _0x821cx6 - 5),
                                            _0x821cx14 = -1 != _0x821cx10 && -1 != _0x821cx11 && -1 != _0x821cx12 && '' != _0x821cx13 ? _0x821cx13 : 'https://images.bizlaw.id/gbr_artikel/images-2_294.webp';
                                        _0x821cxa.img = null != _0x821cxe.media$thumbnail ? _0x821cxe.media$thumbnail.url.replace('s72-c', 's400-rw') : _0x821cx14;
                                        for (let _0x821cx6 = 0; _0x821cx6 < _0x821cxe.link.length; _0x821cx6++) {
                                            _0x821cxa.url = _0x821cxe.link[_0x821cx6].href
                                        };
                                        for (var _0x821cx9 = 0; _0x821cx9 < _0x821cxe.category.length; _0x821cx9++) {
                                            'Ongoing' == _0x821cxe.category[_0x821cx9].term ? _0x821cxa.status = 'Ongoing' : 'Completed' == _0x821cxe.category[_0x821cx9].term ? _0x821cxa.status = 'Completed' : 'Upcoming' == _0x821cxe.category[_0x821cx9].term && (_0x821cxa.status = 'Upcoming')
                                        };
                                        for (var _0x821cxb = 0; _0x821cxb < _0x821cxe.category.length; _0x821cxb++) {
                                            (_0x821cxe.category[_0x821cxb].term.includes('Chapter ') || _0x821cxe.category[_0x821cxb].term.includes('Ep')) && (_0x821cxa.chapter = _0x821cxe.category[_0x821cxb].term.replace('Chapter', 'Ch.').replace('Ep', 'Ep'))
                                        };
                                        var _0x821cx15 = _0x821cxe.category.map(function (_0x821cx6) {
                                            return "<a href='/search/label/" + _0x821cx6.term + "?&max-results=20'>" + _0x821cx6.term + '</a>'
                                        });
                                        _0x821cxa.genres = kaiGenre2.filter(function (_0x821cx6) {
                                            if (_0x821cx15.includes(_0x821cx6)) {
                                                return _0x821cx6
                                            }
                                        }).join(', '), _0x821cx7.push(_0x821cxa), _0x821cx8++
                                    }
                                }
                            }
                        })
                    }
                }
            }
        })
    }), $(this).keyup(function () {
        let _0x821cx6 = $(this).val(),
            _0x821cx8 = '';
        if ('' != _0x821cx6) {
            $('#kaiLive').addClass('active');
            for (let _0x821cx9 = 0; _0x821cx9 < _0x821cx7.length; _0x821cx9++) {
                _0x821cx7[_0x821cx9].title.toUpperCase().search(_0x821cx6.toUpperCase()) > -1 && (_0x821cx8 += '<div class="Item"><a href="' + _0x821cx7[_0x821cx9].url + '"><img loading="lazy" alt="' + _0x821cx7[_0x821cx9].title + '" src="' + _0x821cx7[_0x821cx9].img + '" /></a><div class="liveInfo"><strong><a href="' + _0x821cx7[_0x821cx9].url + '">' + _0x821cx7[_0x821cx9].title + '</a></strong><span class="liveChap">' + _0x821cx7[_0x821cx9].status + '<i></i>' + _0x821cx7[_0x821cx9].chapter + '</span><div class="liveGen">' + _0x821cx7[_0x821cx9].genres + '</div></div></div>')
            };
            0 != _0x821cx8.length ? $('#kaiLive').html(_0x821cx8) : $('#kaiLive').html('<div class="infoLoading">No Result...</div>')
        } else {
            $('#kaiLive').removeClass('active'), $('#kaiLive').html('')
        }
    })
})

$(document).bind("contextmenu",(function(n){n.preventDefault()})),$(document).keydown((function(n){if(123===n.which)return!1}));

// Open Tab Download
jQuery(document).ready(function($){
    $('.slink a').each(function(){
        if( $(this).attr('href') && 0 != $(this).attr('href').indexOf('#') ) {
            $(this).attr('target', '_blank');
        }
    });
});
