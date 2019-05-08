const $ = require('jquery');


let pageLoad = () => {
    let $body = $("body");
    $(document).on({
        ajaxStart: function () {
            $body.addClass("loading");
        },
        ajaxStop: function () {
            $body.removeClass("loading");
        }
    });
};

module.exports = pageLoad();