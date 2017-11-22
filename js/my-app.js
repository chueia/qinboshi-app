var myApp = new Framework7(); 

 // Init slider and store its instance in mySwiper variable
 var mySwiper = myApp.swiper('.swiper-container', {
   pagination:'.swiper-pagination'
 });

//标签页切换JS
  $(".toolbar .tab-link").on('touchstart', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var a = $(this).attr('class').replace(/[^0-9]/ig, "");//取得下标数字
    var b = ".tab-" + a;//下标与.tab-组成字符串 选择相应元素
    $(b).addClass('show').siblings().removeClass('show');
    
});
//单品选择
$(document).on('click','.specification span',function(){
  $(this).addClass('choosed').siblings().removeClass('choosed')
})
//可视区域变换

$("input").on('click',function(){
  var __this = this;
  setTimeout(function(){
    __this.scrollIntoViewIfNeeded();
  },200);
})



//选择地址
var pickerDevice = myApp.picker({
  input: '#address',
  cols: [
      {
          textAlign: 'center',
          values: ['地址1', '地址2',]
      }
  ]
});
//选择数量
var pickerDevice = myApp.picker({
  input: '#nums',
  cols: [
      {
          textAlign: 'center',
          values: ['1', '2', '3', '4', '5', '10']
      }
  ]
});

//选择日期

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