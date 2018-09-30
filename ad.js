
document.ready(function () {
    var targetNode = document.getElementById('bs-example-navbar-collapse-1');

    var rNode = document.createElement('ul');
    var rNodeLi = document.createElement('li');
    var rNodeLiA = document.createElement('a');
    rNodeLiA.href = 'https://promotion.aliyun.com/ntms/act/vmpt/aliyun-group/home.html?accounttraceid=96b1b91a-a011-4076-9ad4-b2aec8feda18&userCode=yunrwdj5';
    rNodeLiA.target = '_blank'
    rNodeLiA.appendChild(document.createTextNode("进来看看，支持一下本站"));
    rNodeLi.appendChild(rNodeLiA);
    rNode.appendChild(rNodeLi);
    rNode.className = 'nav navbar-nav navbar-right';
    targetNode.appendChild(rNode);

    var menuLi = document.createElement('li');
    var menuLiA = document.createElement('a');
    menuLiA.href = 'https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=yunrwdj5';
    menuLiA.target = '_blank'
    menuLi.appendChild(menuLiA)
    targetNode.getElementsByTagName('ul')[0].appendChild(menuLi);
})