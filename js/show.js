var leftTri = [];
var leftNav = document.querySelectorAll(".leftNav");
for (var i = 0; i < leftNav.length; i++) {
    leftTri[i] = leftNav[i].getElementsByTagName("a")[0];
}
var index = 0;
var pages = 1;

function showCurrentYear(i) {
    for (var k = 0; k < leftNav.length; k++) {
        leftTri[k].className = '';
    }
    leftTri[i].className = 'active';
}
for (var i = 0; i < leftNav.length; i++) {
    (function(i) {
        leftNav[i].addEventListener("click", function() {
            showCurrentYear(i);
        }, false);
    })(i);
}

var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
var prev2 = document.getElementById("prevBtn");
var next2 = document.getElementById("nextBtn");
next.onclick = function() {
        next_pic();
    }
    /*next2.onclick = function() {
        next_pic();
    }
    prev2.onclick = function() {
        prev_pic();
    }*/
prev.onclick = function() {
    prev_pic();
}

var picF = document.querySelector(".showPic").getElementsByTagName('img');

function next_pic() {
    /*   index++;
       if (index > 5) {
           index = 0;
       }
        showCurrentYear();
       */
    if (pageOptions.pageTotal > pageOptions.curPage)
        pageOptions.curPage++;

    dynamicPagingFunc(pageOptions);
    for (var i = 0; i < picF.length; i++) {
        (function(i) {
            picF[i].style.opacity = '0';
            picF[i].style.transform = "translate3d(150px,0,0) scale3d(0.7,0.7,1) rotate3d(0,1,0,90deg)";
            setTimeout(function() {
                if (picF[i].className !== 'hide') {
                    picF[i].className = 'hide';
                } else {
                    picF[i].className = '';
                }
                picF[i].style.transform = "translate3d(0,0,0)";
                picF[i].style.opacity = '1';
            }, 300);
        })(i);
    }
}

function prev_pic() {
    /* index--;
     if (index < 0) {
         index = 5;
     }
      showCurrentYear();
     */
    if (pageOptions.curPage > 0) {
        pageOptions.curPage--;
    }
    dynamicPagingFunc(pageOptions);
    for (var i = 0; i < picF.length; i++) {
        (function(i) {
            picF[i].style.opacity = '0';
            picF[i].style.transform = " translate3d(0,-20%,30px)";
            setTimeout(function() {
                if (picF[i].className !== 'hide') {
                    picF[i].className = 'hide';
                } else {
                    picF[i].className = '';
                }
                picF[i].style.transform = "translate3d(0,0,0)";
                picF[i].style.opacity = '1';
            }, 300);
        })(i);
    }
}

var pageOptions = {
    pageTotal: 10, //后台有多少叶就读取多少，后台写
    curPage: pages,
    paginationId: ''
};
dynamicPagingFunc(pageOptions);

function dynamicPagingFunc(pageOptions) {
    var pageTotal = pageOptions.pageTotal || 1;
    var curPage = pageOptions.curPage || 1;
    var doc = document;
    var paginationId = doc.getElementById('' + pageOptions.paginationId + '') || doc.getElementById('pagination');
    var html = '';
    /*if (curPage > pageTotal) {
        curPage = 1;
    }*/
    /*总页数小于5，全部显示*/
    if (pageTotal <= 5) {
        html = appendItem(pageTotal, curPage, html);
        paginationId.innerHTML = html;
    }
    /*总页数大于5时，要分析当前页*/
    if (pageTotal > 5) {
        if (curPage <= 4) {
            html = appendItem(pageTotal, curPage, html);
            paginationId.innerHTML = html;
        } else if (curPage > 4) {
            html = appendItem(pageTotal, curPage, html);
            paginationId.innerHTML = html;
        }
    }
}

function appendItem(pageTotal, curPage, html) {
    var starPage = 0;
    var endPage = 0;
    html += '<a class="pageItem" id="prevBtn">&lt;</a>';
    if (pageTotal <= 5) {
        starPage = 1;
        endPage = pageTotal;
    } else if (pageTotal > 5 && curPage <= 4) {
        starPage = 1;
        endPage = 4;
        if (curPage == 4) {
            endPage = 5;
        }
    } else {
        if (pageTotal == curPage) {
            starPage = curPage - 3;
            endPage = curPage;
        } else {
            starPage = curPage - 2;
            endPage = curPage + 1;
        }
        html += '<a class="pageItem" id="first">1</a><span class="over">...</span>';
    }

    for (let i = starPage; i <= endPage; i++) {
        if (i == curPage) {
            html += '<a class="active2 pageItem" id="first">' + i + '</a>';
        } else {
            html += '<a href="#" class="pageItem">' + i + '</a>';
        }
    }

    if (pageTotal <= 5) {
        html += '<a href="javascript:;" class="pageItem" id="nextBtn">&gt;</a>';
    } else {
        if (curPage < pageTotal - 2) {
            html += '<span class="over">...</span>';
        }
        if (curPage <= pageTotal - 2) {
            html += '<a href="javascript:;" class="pageItem">' + pageTotal + '</a>';
        }
        html += '<a href="javascript:;" class="pageItem" id="nextBtn">&gt;</a>';
    }
    return html;
}