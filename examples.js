function loadmore(a) {
    function b(a) {
        !a && (a = "加载数据失败"), alert(a)
    }

    function c(a) {
        if (a && "000000" === a.status) {
            var c = a;
            0 == c.detail.length && (maxid = minid = "");
            for (var d = 0; d < c.detail.length; d++)(!maxtime || c.detail[d].behot_time < maxtime) && (maxtime = c.detail[d].behot_time), createRecord(c.detail[d].title, c.detail[d].source, c.detail[d].article_url, c.detail[d].behot_time, c.detail[d].digg_count, c.detail[d].bury_count, c.detail[d].repin_count)
        } else {
            var e;
            a && (e = a.desc), b(e)
        }
    }

    $.ajax({
        url: "http://api.1-blog.com/biz/bizserver/news/list.do",
        data: a,
        method: "POST",
        timeout: 5e3,
        error: function () {
            b(), loading = !1
        },
        success: function (a) {
            c(a), loading = !1
        }
    })
}
function createRecord(a, b, c, d, e, f, g) {
    var h = $("#content"), i = $("<div />", {"class": "news_item"}), j = $("<div />", {"class": "newstitle"});
    j.html('<a href="' + c + '" target="_blank">' + a + "</a>"), i.append(j);
    var k = $("<div />", {"class": "newsorigin"}), l = $("<span />", {"class": "source"});
    l.html(b), k.append(l);
    var m = $("<span />", {"class": "time"});
    m.html(new Date(d).format("yyyy-MM-dd hh:mm:ss")), k.append(m), i.append(k);
    var n = $("<div />", {"class": "newspj"});
    n.html('<span class="zan">赞&nbsp;' + e + '</span>|<span class="cai">踩&nbsp;' + f + '</span>|<span class="store">收藏&nbsp;' + g + "</span>"), i.append(n), h.append(i)
}
var loading = !1, maxtime;
Zepto(function (a) {
    function b(a) {
        d = a.touches[0].clientX, e = a.touches[0].clientY
    }

    function c(b) {
        e - b.touches[0].clientY > 20 && document.body.clientHeight - document.body.scrollTop < window.screen.availHeight && a("#loadmore").click()
    }

    a("#loadmore").on("click", function () {
        if (!loading) {
            loading = !0;
            var a = {max_behot_time: maxtime ? maxtime : "", size: "20"};
            loadmore(a)
        }
    }), "scroll" in window && a("#loadmore").html("点击查看更多新闻");
    var d, e;
    "createTouch" in document && (a("#content").on("touchstart", b), a("#content").on("touchmove", c)), a("#loadmore").click()
});