/***************************************************
* DannyImagesShow
* 图片轮播
* Ver:1.0
* Author:DannyWang
* Date:2013-10-15
* 图片轮播
  Example: 
  var opt = {
            height: '500px',
            width: '100%',
            imgs: ['images/photo/6.JPG', 'images/photo/7.JPG', 'images/photo/8.JPG', 'images/photo/9.JPG']
        };
  $("#imgDiv").dannyImagesShow(opt);
****************************************************/
(function ($) {
    $.fn.dannyImagesShow = function (options) {
        //定义默认值
        var defaults = {
            height: '300px',
            width: '1000px',
            imgs: ['images/photo/1.JPG', 'images/photo/2.JPG', 'images/photo/3.JPG', 'images/photo/4.JPG', 'images/photo/5.JPG']
        };
        //合并用户自定义属性，默认属性
        var options = $.extend(defaults, options);
        var gNumber = 0;
        this.each(function () {
            var imgDiv = $(this);
            imgDiv.css("height", options.height);
            imgDiv.css("width", options.width);
            imgDiv.css("background-image", 'url("' + options.imgs[1] + '")');
            imgDiv.css("background-position", 'center');
            imgDiv.css("background-size", '100% 100%');

            var pagerHTML = '';
            pagerHTML += '<div id="leftbar" style="float: left; height: ' + (options.height.replace('px', '') - (options.height.replace('px', '') / 2 - 15)) + 'px' + '; width: 30px; padding-left:10px; padding-top: ' + (options.height.replace('px', '') / 2 - 15) + 'px' + ';">';
            pagerHTML += '<a id="leftbarButton" class="left">prev</a>';
            pagerHTML += '</div>';
            pagerHTML += '<div id="rightbar" style="float: right; height: ' + (options.height.replace('px', '') - (options.height.replace('px', '') / 2 - 15)) + 'px' + '; width: 30px;padding-right:10px; padding-top: ' + (options.height.replace('px', '') / 2 - 15) + 'px' + ';">';
            pagerHTML += '<a id="rightbarButton" class="right">next</a>';
            pagerHTML += '</div>';

            imgDiv.append(pagerHTML);

            var btnPrev = $(".left");
            var btnNext = $(".right");

            btnPrev.click(function () {
                var n = getImagesIndex();
                $("#imgDiv").hide();
                imgDiv.css("background-image", 'url("' + options.imgs[n - 1] + '")');
                $("#imgDiv").slideDown();
            });

            btnNext.click(function () {
                var n = getImagesIndex();
                $("#imgDiv").hide();
                imgDiv.css("background-image", 'url("' + options.imgs[n - 1] + '")');
                $("#imgDiv").slideDown();
            });

            $("#leftbar").bind("mouseover", function () {
                $("#leftbarButton").show();
            }).bind("mouseout", function () {
                $("#leftbarButton").hide();
            });

            $("#rightbar").bind("mouseover", function () {
                $("#rightbarButton").show();
            }).bind("mouseout", function () {
                $("#rightbarButton").hide();
            });

            $(".left").hide();
            $(".right").hide();
        });

        //获取随机数
        var getRandomNum = function (under, over) {
            switch (arguments.length) {
                case 1: return parseInt(Math.random() * under + 1);
                case 2: return parseInt(Math.random() * (over - under + 1) + under);
                default: return 0;
            }
        };

        //获取随机照片索引
        var getImagesIndex = function () {
            var n = getRandomNum(1, options.imgs.length);
            while (n === gNumber) {
                n = getRandomNum(1, options.imgs.length);
            }
            gNumber = n;
            return n;
        };
    }
})(jQuery);

//test