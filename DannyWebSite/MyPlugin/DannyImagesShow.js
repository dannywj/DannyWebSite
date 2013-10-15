/***************************************************
* DannyImagesShow
* 图片轮播
* Ver:1.0
* Author:DannyWang
* Date:2013-10-15
* 图片轮播
****************************************************/
(function ($) {
    $.fn.dannyImagesShow = function (options) {
        //定义默认值
        var defaults = {
            height: '400px',
            width: '100%',
            imgs: ['images/photo/1.JPG', 'images/photo/2.JPG']
        };
        //合并用户自定义属性，默认属性
        var options = $.extend(defaults, options);

        this.each(function () {
            var imgDiv = $(this);
            imgDiv.css("height", options.height);
            imgDiv.css("width", options.width);
            imgDiv.css("background-image", 'url("' + options.imgs[1] + '")');
            imgDiv.css("background-position", 'center');
            imgDiv.css("background-size", '100% 100%');

            var pagerHTML = '';
            pagerHTML += '<div style="float: left; height: ' + options.height + '; width: 30px; padding-left:10px; padding-top: ' + (options.height.replace('px', '') / 2 - 15) + 'px' + ';">';
            pagerHTML += '<a class="left">prev</a>';
            pagerHTML += '</div>';
            pagerHTML += '<div style="float: right; height: ' + options.height + '; width: 30px;padding-right:10px; padding-top: ' + (options.height.replace('px', '') / 2 - 15) + 'px' + ';">';
            pagerHTML += '<a class="right">next</a>';
            pagerHTML += '</div>';

            imgDiv.append(pagerHTML);

            var btnPrev = $(".left");
            var btnNext = $(".right");

            btnPrev.click(function () {
                imgDiv.css("background-image", 'url("' + options.imgs[0] + '")');
            });

            btnNext.click(function () {
                imgDiv.css("background-image", 'url("' + options.imgs[1] + '")');
            });
        });
    }
})(jQuery);