$("a[id='budowa']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-budowa").offset().top }, "slow");
    document.title = ('Oczy | Budowa');
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
    return false;
});

$("a[id='wady']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-wady").offset().top }, "slow");
    document.title = ('Oczy | Wady');
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
    return false;
});

$("a[id='ochrona']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ochrona").offset().top }, "slow");
    document.title = ('Oczy | Ochrona');
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
    return false;
});

$("a[id='fakty']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-fakty").offset().top }, "slow");
    document.title = ('Oczy | Fakty');
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
    return false;
});

$("a[id='ciekawostki']").click(function () {
    $("html, body, content").animate({ scrollTop: $("#to-ciekawostki").offset().top }, "slow");
    document.title = ('Oczy | Ciekawostki');
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
    return false;
});

$("a[id='glowna']").click(function () {
    window.location.reload();
}); 




if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    $("html, body, content").animate({ scrollTop: $("#to-glowna").offset().top });
    document.getElementById("menu-items").classList.remove("menu-items-visible");
    document.getElementById("toggle").checked = false;
};


