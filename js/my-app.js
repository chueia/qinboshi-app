// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}
var myApp = new Framework7();

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container', {
    pagination: '.swiper-pagination'
});
// ;
// (function(win) {
//     var doc = win.document;
//     var docEl = doc.documentElement;
//     var tid;

//     function refreshRem() {
//         var width = docEl.getBoundingClientRect().width;
//         if (width > 540) { // 最大宽度
//             width = 540;
//         }
//         var rem = width / 1242; 
//         docEl.style.fontSize = rem + 'px';
//     }

//     win.addEventListener('resize', function() {
//         clearTimeout(tid);
//         tid = setTimeout(refreshRem, 300);
//     }, false);
//     win.addEventListener('pageshow', function(e) {
//         if (e.persisted) {
//             clearTimeout(tid);
//             tid = setTimeout(refreshRem, 300);
//         }
//     }, false);

//     refreshRem();

// })(window);
var myApp = new Framework7();

var mySwiper = myApp.swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationHide: false,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    initialSlide: 0,

});
// var mySwiper = document.querySelector('.swiper-container').swiper

// // Now you can use all slider methods like
// mySwiper.slideNext();
// console.log(mySwiper.initialSlide);

// 城市JS
var city = {
    北京: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "海淀区", "丰台区", "石景山区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "门头沟区", "密云县", "延庆县"],
    天津: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "北辰区", "津南区", "武清区", "宝坻区", "滨海新区", "静海县", "宁河县", "蓟县"],
    上海: ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明县"],
    重庆: ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"],
    河北: ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"],
    山西: ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"],
    辽宁: ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"],
    吉林: ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜族自治州"],
    黑龙江: ["哈尔滨", "齐齐哈尔", "鹤岗", "双鸭山", "鸡西", "大庆", "伊春", "牡丹江", "佳木斯", "七台河", "黑河", "绥化", "大兴安岭"],
    江苏: ["南京", "苏州", "无锡", "常州", "镇江", "南通", "泰州", "扬州", "盐城", "连云港", "徐州", "淮安", "宿迁"],
    浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"],
    安徽: ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"],
    福建: ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"],
    江西: ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"],
    山东: ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽"],
    河南: ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店"],
    湖北: ["武汉", "黄石", "十堰", "荆州", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "黄冈", "咸宁", "随州", "恩施"],
    湖南: ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西"],
    广东: ["广州", "深圳", "珠海", "汕头", "韶关", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"],
    海南: ["海口", "三亚"],
    四川: ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜", "凉山"],
    贵州: ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "毕节", "黔西南", "黔东南", "黔南"],
    云南: ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "德宏", "怒江", "迪庆", "大理", "楚雄", "红河", "文山", "西双版纳"],
    陕西: ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"],
    甘肃: ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏", "甘南"],
    青海: ["西宁", "海东", "海北", "海南", "黄南", "果洛", "玉树", "海西"],
    内蒙古: ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "锡林郭勒盟", "兴安盟", "阿拉善盟"],
    广西: ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"],
    西藏: ["拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里"],
    宁夏: ["银川", "石嘴山", "吴忠", "固原", "中卫"],
    新疆维吾尔自治区: ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "和田", "阿克苏", "喀什", "克孜勒苏", "巴音郭楞", "昌吉", "博尔塔拉", "伊犁", "塔城", "阿勒泰"],
    香港: ["香港岛", "九龙东", "九龙西", "新界东", "新界西"], 澳门: ["澳门半岛", "离岛"], 台湾: ["台北", "高雄", "基隆", "新竹", "台中", "嘉义", "台南市"]
};
var pickerDependent = myApp.picker({
    input: '#picker-dependent',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '内蒙古', '广西', '西藏', '宁夏', '香港', '澳门', '台湾'],
            onChange: function (picker, country) {
                if (picker.cols[1].replaceValues) {
                    picker.cols[1].replaceValues(city[country]);
                }
            }
        },
        {
            values: city.北京,
            width: 160,
        },
    ]
});

// 金额选择
var pickerDevice = myApp.picker({
    input: '#choose-gold',
    cols: [
        {
            textAlign: 'center',
            values: ['1000', '2000', '3000', '5000', '10000', '20000']
        }
    ]
});
//分期付款
var pickerDevice = myApp.picker({
    input: '#choose-bystages',
    cols: [
        {
            textAlign: 'center',
            values: ['1', '2', '3', '5', '10', '12']
        }
    ]
});
//分期时间
var pickerDevice = myApp.picker({
    input: '#choose-times',
    cols: [
        {
            textAlign: 'center',
            values: ['1个月', '2个月', '3个月', '5个月', '10个月', '12个月']
        }
    ]
});
//职业类别
var pickerDevice = myApp.picker({
    input: '#choose-job',
    cols: [
        {
            textAlign: 'center',
            values: ['企业主', '个体工商户', '上班人群', '学生', '无固定职业', '其他']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#choose-insurance',
    cols: [
        {
            textAlign: 'center',
            values: ['有', '无']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#choose-fund',
    cols: [
        {
            textAlign: 'center',
            values: ['有', '无']
        }
    ]
});

var pickerDevice = myApp.picker({
    input: '#choose-slip',
    cols: [
        {
            textAlign: 'center',
            values: ['有', '无']
        }
    ]
});

// 车辆情况
var pickerDevice = myApp.picker({
    input: '#choose-car',
    cols: [
        {
            textAlign: 'center',
            values: ['无车', '本人名下有车，无贷款', '本人名下有车，有按揭贷款', '本人名下有车，但已被抵押', '其他（请备注）']
        }
    ]
});

//还款方式
var pickerDevice = myApp.picker({
    input: '#repayment',
    cols: [
        {
            textAlign: 'center',
            values: ['pos机还款', '扫码还款']
        }
    ]
});

//还款日期js
var today = new Date();

var pickerInline = myApp.picker({
    input: '#picker-date',
    container: '#picker-date-container',
    toolbar: false,
    rotateEffect: true,

    value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],

    onChange: function (picker, values, displayValues) {
        var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
        if (values[1] > daysInMonth) {
            picker.cols[1].setValue(daysInMonth);
        }
    },

    formatValue: function (p, values, displayValues) {
        return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
    },

    cols: [
        // Months
        {
            values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
            displayValues: ('January February March April May June July August September October November December').split(' '),
            textAlign: 'left'
        },
        // Days
        {
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        },
        // Years
        {
            values: (function () {
                var arr = [];
                for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                return arr;
            })(),
        },
        // Space divider
        {
            divider: true,
            content: '  '
        },
        // Hours
        {
            values: (function () {
                var arr = [];
                for (var i = 0; i <= 23; i++) { arr.push(i); }
                return arr;
            })(),
        },
        // Divider
        {
            divider: true,
            content: ':'
        },
        // Minutes
        {
            values: (function () {
                var arr = [];
                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                return arr;
            })(),
        }
    ]
});
var calendarDefault = myApp.calendar({
    input: '#calendar-default',
});

// 标签页切换js
$(".toolbar .tab-link").on('touchstart', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var a = $(this).attr('class').replace(/[^0-9]/ig, "");//取得下标数字

    var b = ".tab-" + a;//下标与.tab-组成字符串 选择相应元素

    $(b).addClass('show').siblings().removeClass('show');
})

// 金融详情页收藏按钮
$('.jinrong-shop  .shop-box .shop-right i').on('touchstart', function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active')
    }

});

//二手车标签JS
$('.car-choose span').on('touchend', function () {
    var a = $(this).text();
    var text = '<span class="check-box"> ' + a + '&nbsp X</span>';

    $('.check').append(text);
});

$(document).on('touchend', '.check .check-box', function () {
    $(this).remove();
});
$('.resetting').on('touchend', function () {
    $('.check .check-box').remove();
});

//首页模拟点击
$('.box-main .box1').on('touchend', function () {
    $('.tab-all').removeClass('show');
    $('.tab-2').addClass('show');
    $('.tab-link').removeClass('active');
    $('.tab-link2').addClass('active');
});
$('.box-main .box2').on('touchend', function () {
    $('.tab-all').removeClass('show');
    $('.tab-3').addClass('show');
    $('.tab-link').removeClass('active');
    $('.tab-link3').addClass('active');
});
$('.box-main .box3').on('touchend', function () {
    $('.tab-all').removeClass('show');
    $('.tab-4').addClass('show');
    $('.tab-link').removeClass('active');
    $('.tab-link4').addClass('active');
});

//订单页模拟点击
$('.geren-footer .dingdan1').on('touchend', function () {
    $('#dingdan1').addClass('show').siblings().removeClass('show');
    $('.dingdan1').addClass('active').siblings().removeClass('active');
});
$('.geren-footer .dingdan2').on('touchend', function () {
    $('#dingdan2').addClass('show').siblings().removeClass('show');
    $('.dingdan2').addClass('active').siblings().removeClass('active');
});
$('.geren-footer .dingdan3').on('touchend', function () {
    $('#dingdan3').addClass('show').siblings().removeClass('show');
    $('.dingdan3').addClass('active').siblings().removeClass('active');
});
$('.geren-footer .dingdan4').on('touchend', function () {
    $('#dingdan4').addClass('show').siblings().removeClass('show');
    $('.dingdan4').addClass('active').siblings().removeClass('active');
});
// 首页载入代码

// function start(){
//     setTimeout(function start1(){
//         alert(1)
//     },2000);
// }


// $(document).on('touchend', '.tab-0', function () {
//     setTimeout(function(){
//         myApp.loginScreen();
//     },500)

// })
myApp.loginScreen();
// 登录页面js
$('.list-block .list-login').on('touchend', function () {
    var url = '/Rongxin/LoginServlet';
    var account = $('.login-screen-content .phone').val();
    var pass = $('.login-screen-content .password').val();
    if (account == undefined || pass == undefined) {
        alert('请输入手机号和密码');
        return false;
    } else if (!(/^1[34578]\d{9}$/.test(account))) {
        alert('请输入正确的手机号');
        return false;
    } else {
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                'account': account,
                'pass': pass,
            },
            dataType: 'json',
            cache: false,
            success: function (resu) {
                var obj = eval(resu);
               
                if (obj.res.indexOf('成功') >= 0) {
                    myApp.closeModal();
                    $('.navbar').removeClass('hide');
                    $('.toolbar').removeClass('hide');
                    $('.tab-0').removeClass('show');
                    $('.tab-1').addClass('show');
                }else{
                     alert(obj.res);
                }
            },
            error: function (resu) {
                var obj = eval(resu);
                alert(obj.res);

            }
        });

    }


});
// myApp.closeModal();
// $('.navbar').removeClass('hide');
// $('.toolbar').removeClass('hide');
// $('.tab-0').removeClass('show');
// $('.tab-1').addClass('show');

// 二手车收藏JS
$('.car-main .title i').on('touchend', function () {

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active')
    }

});

// AJAX

// 表单验证js


