function toReal(e, t) {
    return t + " " + e.formatMoney(2, ",", ".");
}
Number.prototype.formatMoney = function (e, t, a) {
    var r = this,
        i = ((e = isNaN((e = Math.abs(e))) ? 2 : e), (t = null == t ? "." : t), (a = null == a ? "," : a), r < 0 ? "-" : ""),
        o = parseInt((r = Math.abs(+r || 0).toFixed(e))) + "",
        n = (n = o.length) > 3 ? n % 3 : 0;
    return (
        i +
        (n ? o.substr(0, n) + a : "") +
        o.substr(n).replace(/(d{3})(?=d)/g, "$1" + a) +
        (e
            ? t +
              Math.abs(r - o)
                  .toFixed(e)
                  .slice(2)
            : "")
    );
};
var theme = {
        header: function () {
            jQuery(".icon-search").click(function () {
                jQuery(".bar-top .search").addClass("active"),
                    setTimeout(function () {
                        jQuery(".bar-top .input-search").focus();
                    }, 250);
            }),
                jQuery(".box-search .reset").click(function () {
                    jQuery(".bar-top .search").removeClass("active"), jQuery(".box-search input").val("");
                }),
                jQuery(".footer .title").click(function () {
                    jQuery(this).toggleClass("active");
                }),
                jQuery(".text.rastreio span").click(function () {
                    jQuery(this).next().toggleClass("active");
                }),
                jQuery(document).click(function (e) {
                    jQuery(e.target).closest(".rastreio").length || jQuery(".rastreio .modal-white").removeClass("active");
                }),
                jQuery(".list-nav > li .sub").click(function (e) {
                    e.preventDefault(), jQuery(this).toggleClass("active"), jQuery(this).next().toggleClass("active");
                }),
                jQuery(".bar-top .bars").click(function () {
                    jQuery(".nav-mobile").addClass("active");
                }),
                jQuery(".sidebar-category .sub-filter").click(function (e) {
                    jQuery(this).toggleClass("active");
                }),
                jQuery(".sidebar-category li.sub .sub-filter").click(function (e) {
                    e.preventDefault();
                }),
                jQuery(".video-button").click(function () {
                    jQuery(".video-modal").addClass("active").find("[data-src]").attr("data-src", jQuery(this).data("url"));
                    new LazyLoad({ elements_selector: ".iframe-lazy" });
                }),
                this.sidebar();
        },
        sidebar: function () {
            jQuery(".hide-menu").is(":visible") || jQuery(".shadow-cart").before(jQuery(".box-fixed").parent().contents()),
                jQuery(".button-filter").click(function () {
                    jQuery(".box-fixed").addClass("active");
                }),
                jQuery(".filter__label").click(function () {
                    setTimeout(function () {
                        jQuery(".smart-filter").submit();
                    }, 50);
                });
        },
        resets: function () {
            jQuery('.page-search #Vitrine input[type="image"]').after('<button type="submit" class="botao-commerce">BUSCAR</button>'),
                jQuery('.page-search #Vitrine input[type="image"]').remove(),
                jQuery(".advancedSearchFormBTimg").addClass("botao-commerce"),
                jQuery('.page-central_senha input[type="image"]').after('<button type="submit" class="botao-commerce">CONTINUAR</button>').remove(),
                jQuery(".col-panel .tablePage, .page-extra .page-content table,.page-extras .page-content table, .board_htm table").wrap('<div class="table-overflow"></div>'),
                jQuery(".caixa-cadastro #email_cadastro").attr("placeholder", "Seu e-mail"),
                jQuery('.page-contact form input[type="image"]').after('<div class="flex justify-end"><button type="submit" class="botao-commerce">ENVIAR</button></div>').remove();
        },
        icPrev:
            '<div class="arrow prev"><svg class="icon" viewBox="0 0 451.847 451.847">        <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0   c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744   c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path>    </svg></div>',
        icNext:
            '<div class="arrow next"><svg class="icon"  viewBox="0 0 451.846 451.847">        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>    </svg></div>',
        bannerFull: function () {
            if (jQuery(".banner-full").length) {
                var e = jQuery(".banner-full").data("config");
                jQuery(".banner-full .slick").slick({ dots: !0, arrows: !1, infinite: !0, speed: 300, slidesToShow: 1, fade: e.fade, autoplay: !0, autoplaySpeed: e.time, useTransform: !0, lazyLoad: "ondemand" });
            }
        },
        bannerInfo: function () {
            if (jQuery(".banner-info").length) {
                var e = jQuery(".banner-info").data("config");
                jQuery(".banner-info .slide").slick({ dots: !1, arrows: !0, prevArrow: this.icPrev, nextArrow: this.icNext, infinite: !0, speed: 300, slidesToShow: 1, fade: e.fade, autoplay: !0, autoplaySpeed: e.time, useTransform: !0 });
            }
        },
        slideProduct: function () {
            jQuery(".list-slide")
                .on("init", function () {
                    new LazyLoad({ elements_selector: ".lazySlide" });
                })
                .slick({
                    dots: !1,
                    arrows: !0,
                    prevArrow: this.icPrev,
                    nextArrow: this.icNext,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 4,
                    useTransform: !0,
                    responsive: [
                        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                        { breakpoint: 550, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                    ],
                }),
                jQuery(".slide-category")
                    .on("init", function () {
                        new LazyLoad({ elements_selector: ".lazySlide" });
                    })
                    .slick({
                        dots: !1,
                        arrows: !0,
                        prevArrow: this.icPrev,
                        nextArrow: this.icNext,
                        infinite: !1,
                        speed: 300,
                        slidesToShow: 3,
                        useTransform: !0,
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                            { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ],
                    }),
                setTimeout(function () {
                    jQuery(".slide-brand")
                        .on("init", function () {
                            new LazyLoad({
                                elements_selector: ".lazy-first-brand",
                                callback_load: function (e) {
                                    new LazyLoad({ elements_selector: ".lazy-brand", callback_load: function (e) {} });
                                },
                            });
                        })
                        .slick({
                            dots: !1,
                            arrows: !0,
                            prevArrow: theme.icPrev,
                            nextArrow: theme.icNext,
                            false: !0,
                            speed: 300,
                            slidesToShow: 6,
                            slidesToScroll: 1,
                            useTransform: !0,
                            infinite: !1,
                            responsive: [
                                { breakpoint: 991, settings: { slidesToShow: 6, slidesToScroll: 2 } },
                                { breakpoint: 650, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                                { breakpoint: 450, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                                { breakpoint: 350, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                            ],
                        });
                }, 150),
                jQuery("#form-comments #bt-submit-comments").before('<button class="botao-commerce">Enviar</button>').remove();
        },
        image: function (e, t) {
            "object" == typeof t ? (t = jQuery(t)) : console.error("not type object"), ((t.height() - t.width()) / t.width()) * 100 > e ? t.addClass("vertical") : t.addClass("horizontal");
        },
        instagram: function (e) {
            if ("679572" != jQuery("html").attr("data-store")) {
                var t = jQuery("#instagram .list"),
                    a = e.split(".")[0],
                    r = parseInt(a);
                jQuery.ajax({
                    url: "https://api.instagram.com/v1/users/" + r + "/media/recent",
                    dataType: "jsonp",
                    type: "GET",
                    async: !0,
                    data: { access_token: e, count: 5 },
                    success: function (e) {
                        if (e.data.length > 0) {
                            t.html("");
                            for (var a = 0; a < e.data.length; a++)
                                t.append('<div class="item"><a class="box-image" href="' + e.data[a].link + '" target="_blank"><img class="lazy-insta transform" data-src="' + e.data[a].images.low_resolution.url + '"></a></div>');
                            new LazyLoad({
                                elements_selector: ".lazy-insta",
                                callback_load: function (e) {
                                    theme.image(0, e);
                                },
                            });
                        }
                    },
                    error: function (e) {
                        console.log("error: ", e);
                    },
                });
            } else
                new LazyLoad({
                    elements_selector: ".lazy-insta",
                    callback_load: function (e) {
                        theme.image(0, e);
                    },
                });
        },
        getAjax: function (e, t, a, r) {
            jQuery.ajax({ method: e, url: t, data: a, async: !0 }).success(function (e) {
                r(e);
            });
        },
        shipping: function () {
            jQuery(".crazy_cep").mask("00000-000");
            jQuery(".new-frete").submit(function (e) {
                e.preventDefault();
                var t = jQuery("#shippingSimulatorButton").attr("data-url"),
                    a = jQuery(this).find("input").val().split("-"),
                    r = jQuery("#product-container").find("#selectedVariant").val() ? jQuery("#product-container").find("#selectedVariant").val() : 0;
                (t = t
                    .replace("cep1=%s", "cep1=" + a[0])
                    .replace("cep2=%s", "cep2=" + a[1])
                    .replace("acao=%s", "acao=" + r)
                    .replace("dade=%s", "dade=1")),
                    "" !== jQuery("#selectedVariant").val()
                        ? (jQuery(".box-frete .result").html('<div class="load-css"><div class="icon"></div></div>'),
                          theme.getAjax("get", t, {}, function (e) {
                              jQuery(".box-frete .result").html(e),
                                  jQuery(".box-frete .result").find("table:first, p").remove(),
                                  jQuery(".box-frete .result").find("img").parent().remove(),
                                  jQuery(".box-frete .result").find("th:last").text("Prazo:"),
                                  jQuery(".box-frete .result").find('th[colspan="2"]').removeAttr("colspan"),
                                  jQuery(".box-frete .result").find("[width]").removeAttr("width");
                          }))
                        : jQuery(".box-frete .result").html("Escolha uma variação");
            });
        },
        startZoom: function () {
            jQuery(".nav-images .list").slick({
                dots: !1,
                arrows: !0,
                prevArrow: this.icPrev,
                nextArrow: this.icNext,
                infinite: !1,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: !0,
                asNavFor: ".image-show .list",
                focusOnSelect: !0,
            }),
                jQuery(".image-show .list")
                    .slick({
                        asNavFor: ".nav-images .list",
                        dots: !1,
                        arrows: !1,
                        infinite: !1,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        useTransform: !0,
                        lazyLoad: "ondemand",
                        responsive: [{ breakpoint: 767, settings: { dots: !0 } }],
                    })
                    .on("afterChange", function (e, t, a) {
                        var r = t.currentSlide;
                        r += 1;
                        var i = jQuery(".image-show").find('.box-img[data-id="' + r + '"] .zoom');
                        i.find("img:first").next().length || i.zoom({ touch: !1, url: i.find("img").attr("data-src") });
                    }),
                jQuery(".image-show").find('.box-img[data-id="1"] .zoom').zoom({ touch: !1 });
        },
        removeZoom: function (e) {
            jQuery(".nav-images .list,.image-show .list").slick("unslick"),
                jQuery(".nav-images .list,.image-show .list").find(".item").remove(),
                console.log(e),
                e.forEach(function (e, t) {
                    var a = ++t;
                    jQuery(".nav-images .list").append('<div class="item"><div class="box-img" data-id="' + a + '">                <img src="' + e.thumbs[90].https + '" alt="image">            </div></div>'),
                        jQuery(".image-show .list").append(
                            '            <div class="item">            <div class="box-img" data-id="' +
                                a +
                                '">                <div class="zoom">                    <img data-lazy="' +
                                e.https +
                                '" alt="image">                </div>            </div></div>'
                        );
                }),
                this.startZoom();
        },
        productVariant: function () {
            jQuery(".box-variants").on("click", ".lista_cor_variacao li[data-id]", function () {
                var e = "/web_api/variants/" + jQuery(this).data("id");
                theme.getAjax("get", e, {}, function (e) {
                    var t = e.Variant.VariantImage;
                    t.length && theme.removeZoom(t);
                });
            }),
                jQuery(".box-variants").on("click", ".lista-radios-input", function () {
                    var e = "/web_api/variants/" + jQuery(this).find("input").val();
                    theme.getAjax("get", e, {}, function (e) {
                        var t = e.Variant.VariantImage;
                        t.length && theme.removeZoom(t);
                    });
                }),
                jQuery(".box-variants").on("change", "select", function () {
                    var e = "/web_api/variants/" + jQuery(this).val();
                    theme.getAjax("get", e, {}, function (e) {
                        var t = e.Variant.VariantImage;
                        t.length && theme.removeZoom(t);
                    });
                }),
                jQuery(".produto img").each(function () {
                    jQuery(this).attr("src", jQuery(this).attr("src").replace("/90_", "/"));
                    var e = "";
                    "" !== jQuery(this).parent().attr("href") && (e = 'href="' + jQuery(this).parent().attr("href") + '"'),
                        jQuery(this)
                            .parents("span")
                            .after("<a " + e + ' class="product-name">' + jQuery(this).attr("alt") + "</a>");
                }),
                jQuery(".page-product").on("click", "#detalhes_formas", function () {
                    var e = jQuery("#form_comprar").data("id"),
                        t = jQuery("#preco_atual").val(),
                        a = "/mvc/store/product/payment_options_details?loja=" + theme.storeId() + "&IdProd=" + e + "&preco=" + t;
                    console.log(a),
                        jQuery(".payment-modal").addClass("active"),
                        jQuery(".payment-modal .append").html('<div class="load-css"><div class="icon"></div></div>'),
                        theme.getAjax("get", a, {}, function (e) {
                            jQuery(".payment-modal .append").html(e).find(".tablePage").wrap('<div class="overflow-payment"></div>');
                        });
                }),
                jQuery("#form_comprar").bind("submit", function () {
                    if (
                        (setTimeout(function () {
                            if (jQuery("body").hasClass("modal-open")) {
                                jQuery("#loading-product-container").show();
                                var e = setInterval(function () {
                                    jQuery(".cart-preview-loading-modal").hasClass("tray-hide") &&
                                        (cart.showCart(), jQuery("#loading-product-container").hide(), jQuery("body").find(".botao-continuar-comprando .botao-commerce-img").trigger("click"), clearInterval(e));
                                }, 50);
                            }
                        }, 100),
                        jQuery(".tray-kit").length)
                    )
                        setTimeout(function () {
                            if (jQuery("#span_erro_carrinho_kit").is(":visible")) return console.log("true kit visible"), !1;
                            jQuery("#loading-product-container").show();
                            var e = setInterval(function () {
                                jQuery(".cart-preview-loading-modal").hasClass("tray-hide") &&
                                    (cart.showCart(), jQuery("#loading-product-container").hide(), jQuery("body").find(".botao-continuar-comprando .botao-commerce-img").trigger("click"), clearInterval(e));
                            }, 50);
                        }, 50);
                    else {
                        jQuery("#loading-product-container").show();
                        var e = setInterval(function () {
                            jQuery(".cart-preview-loading-modal").hasClass("tray-hide") &&
                                (cart.showCart(), jQuery("#loading-product-container").hide(), jQuery("body").find(".botao-continuar-comprando .botao-commerce-img").trigger("click"), clearInterval(e));
                        }, 50);
                    }
                }),
                jQuery(".compreJunto form").bind("submit.botao-compre-junto", function () {
                    if (!jQuery(this).find(".blocoAlerta").is(":visible")) {
                        jQuery("#loading-product-comprejunto").show();
                        var e = setInterval(function () {
                            jQuery(".cart-preview-loading-modal").hasClass("tray-hide") &&
                                (cart.showCart(), jQuery("#loading-product-comprejunto").hide(), jQuery("body").find(".botao-continuar-comprando .botao-commerce-img").trigger("click"), clearInterval(e));
                        }, 50);
                    }
                });
        },
        productVisited: function () {
            var e = jQuery(".content-visited"),
                t = "/loja/funcoes/paginacao_produtos_visitados.php?loja=" + this.storeId() + "&cont=0&prod_visitados=4&id=" + jQuery("#form_comprar").attr("data-id");
            theme.getAjax("get", t, {}, function (t) {
                var a = [];
                if (
                    (e.html(t),
                    e.find("li").each(function () {
                        var e = jQuery(this),
                            t = {
                                img: e.find(".FotoLista img").attr("src").replace("/90_", "/180_"),
                                name: e.find(".NomeProdLista").text(),
                                price: e.find(".ValoresLista .precoAvista").text(),
                                payment: e.find(".ValoresLista").html(),
                                link: e.find("a:first").attr("href"),
                            };
                        a.push(t);
                    }),
                    console.log("lista visitados: ", a),
                    a.length)
                ) {
                    e.html('<div class="list-slide visited"></div>'),
                        a.forEach(function (t) {
                            var a =
                                '<div class="item"><div class="product">                <div class="image">                    <a href="{link}" class="space-image">                        <img class="transform lazyHis" data-src="{img}" alt="{name}">                        <div class="view">VER DETALHES</div>                    </a>                </div>                <a href="{link}" class="info-product">                <div class="product-name">{name}</div>                <div class="box-price">                    <div class="price"><div class="price-off">{price}</div></div>                    <div class="product-payment">{payment}</div>                </div>                </a>            </div></div>';
                            (a = (a = (a = (a = (a = a.replace(/{name}/g, t.name)).replace(/{price}/g, t.price)).replace(/{img}/g, t.img)).replace(/{link}/g, t.link)).replace(
                                /{payment}/g,
                                t.payment.replace('<img src="https://images.tcdn.com.br/assets/store/img/sobconsulta.gif" alt="Preço sob Consulta" title="Preço sob Consulta" border="0">', '<p class="consulta-product">Sob Consulta</p>')
                            )),
                                e.find(".list-slide").append(a);
                        });
                    new LazyLoad({ elements_selector: ".lazyHis" });
                    e.find(".list-slide").slick({
                        dots: !1,
                        arrows: !0,
                        prevArrow: theme.icPrev,
                        nextArrow: theme.icNext,
                        infinite: !1,
                        speed: 300,
                        slidesToShow: 4,
                        useTransform: !0,
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                            { breakpoint: 550, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        ],
                    });
                } else e.parents(".section-showcase").remove();
            });
        },
        storeId: function () {
            return jQuery("html").attr("data-store");
        },
        depoimento: function () {
            console.log("depoimento function"),
                jQuery("#depoimento a").prepend('<div class="botao-commerce">ENVIAR</div>').find("img").remove(),
                jQuery(".page-content h2:first").appendTo(".depoimentos-modal .append"),
                jQuery(".page-content h2:last").remove(),
                jQuery("#comentario_cliente").appendTo(".depoimentos-modal .append"),
                jQuery(".page-content .container").append('<div class="botao-commerce depoimento-event">Deixe seu depoimento</div>'),
                jQuery(".botao-commerce.depoimento-event").click(function () {
                    jQuery(".depoimentos-modal").addClass("active");
                });
        },
        present: function () {
            jQuery('#form_presentes input[type="image"]').prev().html('<div class="botao-commerce">Continuar Comprando</div>'),
                jQuery('#form_presentes input[type="image"]').wrap('<div class="relative-button"></div>').after('<button class="botao-commerce">Avançar</button>').remove();
        },
        slideCatalog: function () {
            jQuery(".slide-catalog").slick({ dots: !1, arrows: !1, infinite: !0, speed: 300, slidesToShow: 1, fade: !0, autoplay: !0, autoplaySpeed: 5e3, useTransform: !0, lazyLoad: "ondemand" });
        },
        noticiasInterna: function () {
            jQuery("#listaNoticiaProdutos img").each(function () {
                var e = jQuery(this).attr("src").replace("90_", "180_");
                jQuery(this).attr("src", e);
            });
        },
    },
    cart = {
        session: function () {
            return jQuery("html").attr("data-session");
        },
        idStore: function () {
            return jQuery("html").attr("data-store");
        },
        removeProduct: function (e) {
            console.log("remove: ", e);
            var t = parseInt(jQuery(e).attr("data-id")),
                a = parseInt(jQuery(e).attr("data-variant")),
                r = 0 == a ? "" : "/" + a,
                i = "" == jQuery(e).attr("data-add") ? "" : "/?additional_information=" + jQuery(e).attr("data-add").replace(/br>/g, "br/>");
            jQuery
                .ajax({ method: "DELETE", url: "/web_api/carts/" + cart.session() + "/" + t + r + i })
                .success(function (e) {
                    console.log(e), cart.listProduct();
                })
                .fail(function (e) {
                    console.log("error remove product: ", e.responseText), cart.listProduct();
                });
        },
        listProduct: function () {
            jQuery
                .ajax({ method: "GET", url: "/web_api/cart/" + cart.session() })
                .success(function (e) {
                    cart.forProduct(e);
                })
                .fail(function (e) {
                    var t = jQuery.parseJSON(e.responseText);
                    cart.forProduct([]), console.log("error list product: ", t);
                });
        },
        number: function (e) {
            jQuery(".cart-header .number").text(e);
        },
        total: function (e) {
            jQuery(".cart-sidebar .total .value").text(toReal(parseFloat(e), "R$"));
        },
        filterVariantSimple: function (e, t) {
            for (var a = 0; a < e.length; ) {
                if (e[a].Variant.Sku[0].value == t) return e[a].Variant.id;
                a++;
            }
            return 500;
        },
        forProduct: function (e) {
            var t = jQuery(".cart-sidebar .content-cart .list");
            t.find("*").remove(), t.parent().removeClass("empty");
            var a = jQuery(".botao-commerce.buy"),
                r = (a.hasClass("https_true") ? "" : "https://" + cart.idStore() + ".commercesuite.com.br") + "/checkout?session_id=" + cart.session() + "&store_id=" + cart.idStore();
            a.attr("href", r);
            var i = 0,
                o = 0,
                n = [];
            e.length
                ? (e.forEach(function (e) {
                      (e = e.Cart), console.log(e);
                      var a = e.additional_information.replace(/\//g, "");
                      (prices = e),
                          t.append(cart.templateProduct(e.product_id, e.variant_id, e.product_name, e.product_image.thumbs[90].https, e.quantity, e.price, e.product_url.https, a, e.additional_info_kit)),
                          (i += parseInt(e.quantity)),
                          (o += parseFloat(e.price) * parseInt(e.quantity)),
                          n.push(parseInt(e.product_id));
                  }),
                  cart.number(i),
                  cart.total(o))
                : (t.append('<div class="error"><div clas="text">Carrinho Vazio</div></div>'),
                  t.parent().addClass("empty"),
                  cart.number(0),
                  jQuery("body")
                      .find(".add-cart .buy-product")
                      .each(function () {
                          jQuery(this).hasClass("active") && jQuery(this).removeClass("active").find(".text").text("Comprar");
                      }));
        },
        startCart: function () {
            jQuery(".cart-header").click(function () {
                cart.showCart();
            }),
                jQuery(".shadow-cart, .header-cart .box-prev, .close-nav,.box-fixed .close-box,.close-modal,.close-icon,.modal-theme .shadow").click(function (e) {
                    jQuery(".cart-sidebar, .nav-mobile,.box-fixed,.modal-theme").removeClass("active");
                }),
                jQuery(".product-submit").submit(function (e) {
                    e.preventDefault();
                    var t = jQuery(this).find(".select").val(),
                        a = jQuery(this).find(".quantity").val(),
                        r = jQuery(this).find(".quantity").attr("data-id");
                    t && cart.addVariantComplete(t, a, r);
                });
        },
        showCart: function () {
            cart.listProduct(), jQuery(".modal-theme").removeClass("active"), jQuery(".cart-sidebar").addClass("active");
        },
        templateProduct: function (e, t, a, r, i, o, n, s) {
            var c =
                '            <div class="item">                <div class="box-cart flex align-center">                    <div class="box-image">                        <a href="{url}" class="image">                            <img src="{image}" alt="{name}">                        </a>                    </div>                    <div class="info-product">                        <div class="line-top flex justify-between">                            <a href="{url}" class="name t-color">{name}</a>                            <div class="remove" data-id="{id}" data-variant="{variant}" data-add="{addMsg}" onclick="cart.removeProduct(this)"></div>                        </div>                        <div class="line-down flex align-center">                            <div class="qnt">Qnt: {length}</div>                            <div class="price">{price}</div>                        </div>                    </div>                </div>            </div>        ';
            return (
                (c = (c = (c = (c = (c = (c = (c = c.replace(/{url}/g, n)).replace(/{image}/g, r)).replace(/{name}/g, a)).replace(/{id}/g, e)).replace(/{variant}/g, t)).replace(/{length}/g, i)).replace(/{addMsg}/g, s)),
                (o = toReal(parseFloat(o), "R$")),
                (c = c.replace(/{price}/g, o))
            );
        },
        addVariantComplete: function (e, t, a) {
            var r = cart.session();
            jQuery
                .ajax({
                    method: "POST",
                    url: "/web_api/cart/",
                    contentType: "application/json; charset=utf-8",
                    data: '{"Cart":{"session_id":"' + cart.session() + '","product_id":"' + a + '","quantity":"' + t + '","variant_id":"' + e + '", "customer_id":"' + r + '"}}',
                })
                .success(function (e, t, a) {
                    cart.showCart();
                })
                .fail(function (e, t, a) {
                    window.location.href = jQuery(".add-cart-modal").find(".image a").attr("href");
                });
        },
        addInfoModal: function (e) {
            console.log("product: ", e);
            var t = jQuery(".add-cart-modal");
            if (
                (t.addClass("active"),
                t.find("#variant_modal").removeClass("required").val(0),
                t.find(".terms").remove(),
                t.find("#alert-modal-add").addClass("tray-hide"),
                t.find(".list-variants").remove(),
                t.find(".action-add .add-cart").removeAttr("disabled"),
                t.find(".quant input").val(1),
                t.find("#product_modal").val(e.id),
                t.find(".image").html('<a href="' + e.link + '"><img src="' + e.image + '" alt="' + e.name + '" /></a>'),
                t.find(".box-info > .name").text(e.name),
                t.find(".box-info > .sku").html("<strong>Sku: </strong>" + e.id),
                t.find(".box-info > .sku").html("<strong>Sku: </strong>" + e.id),
                "0" !== e.terms && t.find(".box-info form").append('<div class="terms">Clicando em comprar você aceita os termos de uso do produto</div>'),
                e.variant)
            ) {
                t.find("#variant_modal").addClass("required"), console.log("variants: ", e.variant);
                var a = [],
                    r = [];
                e.variant.forEach(function (e) {
                    var t = e.Variant.Sku[0].value;
                    -1 === a.indexOf(t) && a.push(t);
                }),
                    e.variant[0].Variant.Sku.length > 1 &&
                        e.variant.forEach(function (e) {
                            var t = e.Variant.Sku[1].value;
                            -1 === r.indexOf(t) && r.push(t);
                        }),
                    console.log(a);
                var i = "";
                if (
                    (a.forEach(function (e, t) {
                        i += '<option value="' + e + '">' + e + "</option>";
                    }),
                    t
                        .find(".action-add")
                        .before(
                            '            <div class="list-variants">                <div class="variant-title">' +
                                e.variant[0].Variant.Sku[0].type +
                                '</div>                <select required class=" select variants">                    <option hidden value="">Selecionar</option>                    ' +
                                i +
                                "                </select>            </div>            "
                        ),
                    r.length)
                ) {
                    var o = "";
                    r.forEach(function (e) {
                        o += '<option value="' + e + '">' + e + "</option>";
                    }),
                        t
                            .find(".action-add")
                            .before(
                                '                <div class="list-variants">                    <div class="variant-title">' +
                                    e.variant[0].Variant.Sku[1].type +
                                    '</div>                    <select required class=" select variants">                        <option hidden value="">Selecionar</option>                        ' +
                                    o +
                                    "                    </select>                </div>            "
                            );
                }
            }
            "number" === e.price.type
                ? e.price.promotional_price
                    ? t
                          .find(".box-price")
                          .html(
                              '                    <div class="price">De: ' +
                                  toReal(parseFloat(e.price.price), "R$") +
                                  '</div>                    <div class="price-promotion">' +
                                  toReal(parseFloat(e.price.promotional_price), "R$") +
                                  '</div>                    <div class="payment">' +
                                  e.price.payment +
                                  "</div>                "
                          )
                    : t.find(".box-price").html('                    <div class="price-promotion">' + toReal(parseFloat(e.price.price), "R$") + '</div>                    <div class="payment">' + e.price.payment + "</div>                ")
                : price.type;
            var n = t.find(".select:eq(0)"),
                s = t.find(".select:eq(1)");
            n.length &&
                n.change(function () {
                    console.log(jQuery(this).val()),
                        "" === jQuery(this).val() || s.length
                            ? "" !== s.val() && t.find("#variant_modal").val(cart.filterVariant(e.variant, n.val(), s.val())).removeClass("required")
                            : t.find("#variant_modal").val(cart.filterVariantSimple(e.variant, n.val())).removeClass("required");
                }),
                s.length &&
                    s.change(function () {
                        console.log(jQuery(this).val()), "" !== jQuery(this).val() && "" !== n.val() && t.find("#variant_modal").val(cart.filterVariant(e.variant, n.val(), s.val())).removeClass("required");
                    });
        },
        filterVariant: function (e, t, a) {
            for (var r = 0; r < e.length; ) {
                if ((console.log(e[r].Variant.Sku[0].value, t, e[r].Variant.Sku[1].value, a), e[r].Variant.Sku[0].value == t && e[r].Variant.Sku[1].value == a)) return e[r].Variant.id;
                r++;
            }
            return 500;
        },
        submitAdd: function () {
            jQuery(".add-cart-modal form").submit(function (e) {
                e.preventDefault();
                var t = jQuery(this).find("#product_modal").val(),
                    a = jQuery(this).find("#quant_modal").val(),
                    r = jQuery(this).find("#variant_modal");
                r.hasClass("required")
                    ? jQuery("#alert-modal-add").removeClass("tray-hide")
                    : (jQuery(".action-add .add-cart").attr("disabled"), cart.addVariantComplete(r.val(), a, t), console.log("product: ", t, "quant: ", a, "variant: ", r.val()));
            });
        },
        showModal: function (e) {
            console.log(e),
                this.ajaxGet("/web_api/products/" + e.id, function (t) {
                    if (!t.error) {
                        console.log(t);
                        var a = t.Product,
                            r = a.ProductImage.length ? a.ProductImage[0].https : "";
                        "0" !== a.has_variation
                            ? cart.getVariant(a, e.list_variant, function (e) {
                                  cart.addInfoModal({
                                      image: r,
                                      link: a.url.https,
                                      name: a.name,
                                      id: a.id,
                                      price: { type: "number", promotional_price: "0" !== a.promotional_price && a.promotional_price, price: a.price, payment: a.payment_option_html },
                                      terms: a.has_acceptance_terms,
                                      variant: e,
                                  });
                              })
                            : cart.addInfoModal({
                                  image: r,
                                  link: a.url.https,
                                  name: a.name,
                                  id: a.id,
                                  price: { type: "number", promotional_price: "0" !== a.promotional_price && a.promotional_price, price: a.price, payment: a.payment_option_html },
                                  terms: a.has_acceptance_terms,
                                  variant: !1,
                              });
                    }
                });
        },
        addToCart: function (e, t, a) {
            var r = dataLayer[0].customerId ? dataLayer[0].customerId : 0;
            jQuery
                .ajax({
                    method: "POST",
                    url: "/web_api/cart/",
                    contentType: "application/json; charset=utf-8",
                    data: '{"Cart":{"session_id":"' + cart.session() + '","product_id":"' + e + '","quantity":"' + t + '","variant_id":"' + a + '", "customer_id":"' + r + '"}}',
                })
                .success(function (e, t, a) {
                    cart.showCart();
                })
                .fail(function (e, t, a) {
                    window.location.href = buy.parents(".product-box").find(".product-image").attr("href");
                });
        },
        ajaxGet: function (e, t) {
            jQuery
                .ajax({ method: "GET", url: e })
                .success(function (e) {
                    t(e);
                })
                .fail(function (e, a, r) {
                    t({ error: !0 });
                    var i = $.parseJSON(e.responseText);
                    console.log(i);
                });
        },
        templateInfo: function (e, t, a) {
            console.log("template:", t);
            var r = '<a href="' + e.url.https + '" class="image">            <img src="' + e.ProductImage[0].thumbs[180].https + '" alt="image">        </a>';
            jQuery(".modal-product .content-product .box-image").html(r);
            var i = '<option value="{val}">{text}</option>',
                o = "";
            t.forEach(function (e) {
                parseInt(e.Variant.available) &&
                    (e.Variant.Sku.length > 1
                        ? (o += i.replace("{val}", e.Variant.id).replace("{text}", e.Variant.Sku[0].value + " - " + e.Variant.Sku[1].value))
                        : (o += i.replace("{val}", e.Variant.id).replace("{text}", e.Variant.Sku[0].value)));
            });
            var n =
                '<input type="hidden" class="quantity" data-id="' +
                e.id +
                '" value="' +
                a +
                '"><div class="name"><a href="' +
                e.url.https +
                '">' +
                e.name +
                '</a></div>            <div class="price"></div>            <div class="vars">            <div class="var-text">Selecione uma opção:</div>            <select required class="select"><option value="">Selecione</option>' +
                o +
                '</select>            </div>            <button class="submit-product">COMPRAR</button>        ';
            jQuery(".modal-product .content-product form").html(n);
        },
        getVariant: function (e, t, a) {
            console.log(e), jQuery(".modal-product").addClass("active");
            var r = e.Variant,
                i = [];
            r.forEach(function (e, o) {
                var n = "/web_api/variants/" + e.id;
                cart.ajaxGet(n, function (e) {
                    i.push(e), r.length == i.length && a(cart.orderVariant(r, i, t));
                });
            });
        },
        orderVariant: function (e, t, a) {
            console.log(e, t, a);
            var r = [];
            return (
                a.forEach(function (e, a) {
                    t.forEach(function (t) {
                        e.id == t.Variant.id && (t.Variant.Sku.length > 1 || Number(t.Variant.available)) && r.push(t);
                    });
                }),
                console.log("antes:", t),
                console.log("depois:", r),
                r
            );
        },
        addVariant: function (e, t) {
            console.log(e), jQuery(".modal-product").addClass("active");
            var a = e.Variant,
                r = [];
            a.forEach(function (i, o) {
                var n = "/web_api/variants/" + i.id;
                cart.ajaxGet(n, function (i) {
                    r.push(i), a.length == r.length && cart.templateInfo(e, r, t);
                });
            });
        },
    };
jQuery(document).ready(function () {
    theme.header(),
        theme.resets(),
        cart.submitAdd(),
        jQuery(".noticias li").wrapInner('<div class="box-noticia"></div>'),
        jQuery(".page-next a").append(theme.icNext),
        jQuery(".page-prev a").prepend(theme.icPrev),
        jQuery(".section-avaliacoes .dep_dados").wrap('<a href="/depoimentos-de-clientes"></a>'),
        jQuery(".dep_lista li:hidden").remove(),
        jQuery(".dep_lista").slick({
            dots: !1,
            arrows: !0,
            prevArrow: theme.icPrev,
            nextArrow: theme.icNext,
            infinite: !0,
            speed: 300,
            slidesToShow: 3,
            useTransform: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            responsive: [
                { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 550, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        jQuery(".add-cart-modal .increment-page .low").click(function () {
            var e = jQuery(".box-add-cart .quant input");
            e.val(1 == parseInt(e.val()) ? 1 : parseInt(e.val()) - 1);
        }),
        jQuery(".add-cart-modal .increment-page .add").click(function () {
            var e = jQuery(".box-add-cart .quant input");
            e.val(parseInt(e.val()) + 1);
        }),
        theme.slideCatalog(),
        jQuery("html").hasClass("page-product") && (theme.productVisited(), theme.shipping(), theme.startZoom(), theme.productVariant()),
        jQuery("html").hasClass("page-depoimentos") && theme.depoimento(),
        jQuery("html").hasClass("page-finalizar_presentes") && theme.present(),
        cart.startCart(),
        jQuery("#instagram").is(":visible") && theme.instagram(jQuery("#instagram").attr("data-token"));
    new LazyLoad({ elements_selector: ".lazyload" });
    theme.bannerFull(), theme.bannerInfo(), theme.slideProduct(), theme.noticiasInterna();
});
var _extends =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
        },
    _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              };
!(function (e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.LazyLoad = t());
})(this, function () {
    "use strict";
    var e = {
            elements_selector: "img",
            container: document,
            threshold: 300,
            data_src: "src",
            data_srcset: "srcset",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            callback_load: null,
            callback_error: null,
            callback_set: null,
            callback_enter: null,
        },
        t = function (e, t) {
            return e.getAttribute("data-" + t);
        },
        a = function (e) {
            return e.filter(function (e) {
                return !t(e, "was-processed");
            });
        },
        r = function (e, t) {
            var a,
                r = new e(t);
            try {
                a = new CustomEvent("LazyLoad::Initialized", { detail: { instance: r } });
            } catch (e) {
                (a = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: r });
            }
            window.dispatchEvent(a);
        },
        i = function (e, a) {
            var r = a.data_src,
                i = a.data_srcset,
                o = e.tagName,
                n = t(e, r);
            if ("IMG" === o) {
                !(function (e, a) {
                    var r = a.data_srcset,
                        i = e.parentNode;
                    if ("PICTURE" === i.tagName)
                        for (var o, n = 0; (o = i.children[n]); n += 1)
                            if ("SOURCE" === o.tagName) {
                                var s = t(o, r);
                                s && o.setAttribute("srcset", s);
                            }
                })(e, a);
                var s = t(e, i);
                return s && e.setAttribute("srcset", s), void (n && e.setAttribute("src", n));
            }
            "IFRAME" !== o ? n && (e.style.backgroundImage = 'url("' + n + '")') : n && e.setAttribute("src", n);
        },
        o = "classList" in document.createElement("p"),
        n = function (e, t) {
            o ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
        },
        s = function (e, t) {
            e && e(t);
        },
        c = function (e, t, a) {
            e.removeEventListener("load", t), e.removeEventListener("error", a);
        },
        l = function (e, t, a) {
            var r = e.target;
            (function (e, t) {
                o
                    ? e.classList.remove(t)
                    : (e.className = e.className
                          .replace(new RegExp("(^|\\s+)" + t + "(\\s+|jQuery)"), " ")
                          .replace(/^\s+/, "")
                          .replace(/\s+jQuery/, ""));
            })(r, a.class_loading),
                n(r, t ? a.class_loaded : a.class_error),
                s(t ? a.callback_load : a.callback_error, r);
        },
        d = function (e, t) {
            s(t.callback_enter, e),
                ["IMG", "IFRAME"].indexOf(e.tagName) > -1 &&
                    ((function (e, t) {
                        var a = function a(i) {
                                l(i, !0, t), c(e, a, r);
                            },
                            r = function r(i) {
                                l(i, !1, t), c(e, a, r);
                            };
                        e.addEventListener("load", a), e.addEventListener("error", r);
                    })(e, t),
                    n(e, t.class_loading)),
                i(e, t),
                (function (e, t, a) {
                    e.setAttribute("data-" + t, a);
                })(e, "was-processed", !0),
                s(t.callback_set, e);
        },
        u = function (t, a) {
            (this._settings = _extends({}, e, t)), this._setObserver(), this.update(a);
        };
    u.prototype = {
        _setObserver: function () {
            var e = this;
            if ("IntersectionObserver" in window) {
                var t = this._settings;
                this._observer = new IntersectionObserver(
                    function (r) {
                        r.forEach(function (a) {
                            if (a.isIntersecting || a.intersectionRatio > 0) {
                                var r = a.target;
                                d(r, t), e._observer.unobserve(r);
                            }
                        }),
                            (e._elements = a(e._elements));
                    },
                    { root: t.container === document ? null : t.container, rootMargin: t.threshold + "px" }
                );
            }
        },
        update: function (e) {
            var t = this,
                r = this._settings,
                i = e || r.container.querySelectorAll(r.elements_selector);
            (this._elements = a(Array.prototype.slice.call(i))),
                this._observer
                    ? this._elements.forEach(function (e) {
                          t._observer.observe(e);
                      })
                    : (this._elements.forEach(function (e) {
                          d(e, r);
                      }),
                      (this._elements = a(this._elements)));
        },
        destroy: function () {
            var e = this;
            this._observer &&
                (a(this._elements).forEach(function (t) {
                    e._observer.unobserve(t);
                }),
                (this._observer = null)),
                (this._elements = null),
                (this._settings = null);
        },
    };
    var m = window.lazyLoadOptions;
    return (
        m &&
            (function (e, t) {
                if (t.length) for (var a, i = 0; (a = t[i]); i += 1) r(e, a);
                else r(e, t);
            })(u, m),
        u
    );
});
