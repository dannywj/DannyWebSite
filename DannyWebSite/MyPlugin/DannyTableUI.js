/***************************************************
* DannyTableUI
* 表格隔行变色
* Ver:1.0
* Author:DannyWang
* Date:2013-10-15
* 表格隔行变色，鼠标所在行高亮显示，需要自定义class
* Example：
        var myClass = {
            evenRowClass: 'evenc1',
            oddRowClass: 'oddc1',
            hoverRowClass: 'hoverc1'
        };
        $("#TableId").dannyTableUI(myClass);
****************************************************/
(function ($) {
    $.fn.dannyTableUI = function (options) {
        //定义默认值
        var defaults = {
            evenRowClass: 'evenc',
            oddRowClass: 'oddc',
            hoverRowClass: 'hoverc'
        };
        //合并用户自定义属性，默认属性
        var options = $.extend(defaults, options);
        //隔行变色
        this.each(function () {
            var table = $(this);
            table.find("tr:even").addClass(options.evenRowClass);
            table.find("tr:odd").addClass(options.oddRowClass);

            table.find("tr").bind("mouseover", function () {
                $(this).addClass(options.hoverRowClass);
            });
            table.find("tr").bind("mouseout", function () {
                $(this).removeClass(options.hoverRowClass);
            });
        });
    }
})(jQuery);