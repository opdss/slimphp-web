$('document').ready(function () {
    var $node = $('#bs-example-navbar-collapse-1');
    var $right = $('<ul class="nav navbar-nav navbar-right"><li><a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=yunrwdj5" target="_blank">进来看看，支持一下本站</a></li></ul>');
    $node.append($right);

    $node.find('ul').eq(0).append($('<li><a href="https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=yunrwdj5" target="_blank">服务器支持</a></li>'));
})
