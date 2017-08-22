/**
 * 窗口拖拽插件
 * @author tianci wang <wangtc@chujiu-data.com>
 * version: 1.0
 */
(function ($) {

    var DraggingDiv = function (el,options) {
        this.$el = $(el);
        this.options = options;
        this.initDragging();
        this.initMouseUp();
        this.initMouseDown();
    };

    $.fn.dragging = function(option){

        var that = $(this);
        var DEFAULT = {
            clickX: '',
            leftOffset: '',
            inx: '',
            nextW: '',
            dragging: false,
            doc: document,
            minWidth: '300',
            labBtn: that.find('.dragging-label'),
            wrapWidth: that.width(),
            labelNum: that.find('.dragging-label').size()
        };

        var options = $.extend(DEFAULT, option);

        new DraggingDiv(that, options);
    };

    DraggingDiv.prototype.initDragging = function (){

        var options = this.options;
        var $labBtn = options.labBtn;
        var that = this;
        var $el = this.$el;

        var content = $el.width();//只是获取content宽度
        var contentWithPadding = $el.innerWidth();//获取content+padding的宽度
        var widthPadding = (contentWithPadding - content)/2;
        var minWidth = options.minWidth;
        $el.mousemove(function(e){
            var dragging = that.getDragging();
            options = dragging.options;
            $labBtn = options.labBtn;
            var preWidth = $labBtn.eq(options.inx).prev().innerWidth();
            var nextWidth = $labBtn.eq(options.inx).next().innerWidth()
            if (options.dragging) {
                //鼠标位置横坐标
                options.clickX = e.pageX;

                preWidth = options.clickX - widthPadding + 10;
                for(var i = options.inx; i>0 ; i--) {
                    preWidth -= $labBtn.eq(i-1).prev().innerWidth();
                }
                options.nextW = options.clickX;
                nextWidth = options.wrapWidth - (options.nextW - widthPadding) - 11;//由于百分比的关系需要让1像素
                for(var i = options.inx; i<options.labelNum; i++) {
                    nextWidth -= $labBtn.eq(i + 1).next().innerWidth();
                }
                if(preWidth > minWidth && nextWidth > minWidth) {
                    $labBtn.eq(options.inx).prev().innerWidth( preWidth + 'px');
                    $labBtn.eq(options.inx).next().innerWidth(nextWidth + 'px');
                }
            }
        });
    };

    DraggingDiv.prototype.initMouseDown = function () {
        var $labBtn = this.options.labBtn;
        var that = this;
        var that_ = this.$el;
        $labBtn.bind('mousedown',function(){
            that.enabledDragging();
            that.options.leftOffset = that_.offset().left;
            that.options.inx = that_.find(".dragging-label").index(this);
        });
    };

    DraggingDiv.prototype.initMouseUp = function () {
        var options = this.options;
        var that = this;
        $(options.doc).mouseup(function(e) {
            that.disabledDragging();
            e.cancelBubble = true;
        })
    };

    DraggingDiv.prototype.getDragging = function () {
        return this;
    };

    DraggingDiv.prototype.disabledDragging = function () {
        this.options.dragging = false;
    };

    DraggingDiv.prototype.enabledDragging = function () {
        this.options.dragging = true;
    };

    $.fn.dragging.Constructor = DraggingDiv;
})(jQuery);
