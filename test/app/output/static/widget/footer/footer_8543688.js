define('<%=moduleName%>:widget/footer/footer.js', function(require, exports, module){ var option = {
    ele: '.mp-modules-footer',

    init: function() {
        $(this.el).removeClass('hide');
    },

    events: function() {}
};


module.exports = Ofa.Component(option); });