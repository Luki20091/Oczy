$("a[id='budowa']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-budowa").offset().top }, "slow");
    document.title = ('Oczy | Budowa');
    closeMenu();
    return false;
});

$("a[id='wady']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-wady").offset().top }, "slow");
    document.title = ('Oczy | Wady');
    closeMenu();
    return false;
});

$("a[id='ochrona']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ochrona").offset().top }, "slow");
    document.title = ('Oczy | Ochrona');
    closeMenu();
    return false;
});

$("a[id='fakty']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-fakty").offset().top }, "slow");
    document.title = ('Oczy | Fakty');
    closeMenu();
    return false;
});

$("a[id='ciekawostki']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ciekawostki").offset().top }, "slow");
    document.title = ('Oczy | Ciekawostki');
    closeMenu();
    return false;
});

$("a[id='test']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-test").offset().top }, "slow");
    document.title = ('Oczy | Test');
    document.getElementById("answer").focus();
    closeMenu();
    return false;
});

$("a[id='glowna']").click(function () {
    window.location.reload();
}); 




if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    $("html, body, content").animate({ scrollTop: $("#to-glowna").offset().top });
    closeMenu();
};


