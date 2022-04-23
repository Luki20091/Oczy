







$("a[id='budowa']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-budowa").offset().top }, "slow");
    document.title = ('Oczy | Budowa');
    return false;
});

$("a[id='wady']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-wady").offset().top }, "slow");
    document.title = ('Oczy | Wady');
    return false;
});

$("a[id='ochrona']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ochrona").offset().top }, "slow");
    document.title = ('Oczy | Ochrona');
    return false;
});

$("a[id='fakty']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-fakty").offset().top }, "slow");
    document.title = ('Oczy | Fakty');
    return false;
});

$("a[id='ciekawostki']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ciekawostki").offset().top }, "slow");
    document.title = ('Oczy | Ciekawostki');
    return false;
});




if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    $("html, body, content").animate({ scrollTop: $("#to-glowna").offset().top });
};


