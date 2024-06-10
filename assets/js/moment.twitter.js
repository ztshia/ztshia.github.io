// 处理发布时间 moment.js
// moment.js locale
moment.updateLocale('zh-cn', {
    meridiem: function (hour, minute, isLowercase) {
        if (hour < 2) {
            return "子夜";
        } else if (hour < 6) {
            return "凌晨";
        } else if (hour < 8) {
            return "清晨";
        } else if (hour < 11 && minute < 30) {
            return "午前";
        } else if (hour < 13 && minute < 30) {
            return "正午";
        } else if (hour < 17) {
            return "午后";
        } else if (hour < 19) {
            return "傍晚";
        } else if (hour < 22) {
            return "晚上";
        } else {
            return "深夜";
        }
    },
    weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
});

// 中国公众假期列表
var holidays = {
    '01-01': '元旦',
    '02-14': '情人节',
    '05-01': '劳动节',
    '08-08': '生日',
    '10-01': '国庆节',
    '12-24': '平安夜',
    '12-25': '圣诞节',
'2021-02-12': '春节', '2021-02-11': '除夕', '2021-06-14': '端午', '2021-09-21': '中秋', '2022-02-01': '春节', '2022-01-31': '除夕', '2022-06-03': '端午', '2022-09-10': '中秋', '2023-01-22': '春节', '2023-01-21': '除夕', '2023-06-22': '端午', '2023-09-29': '中秋', '2024-02-10': '春节', '2024-02-09': '除夕', '2024-06-10': '端午', '2024-09-15': '中秋', '2025-01-29': '春节', '2025-01-28': '除夕', '2025-05-31': '端午', '2025-09-08': '中秋', '2026-02-17': '春节', '2026-02-16': '除夕', '2026-06-25': '端午', '2026-09-27': '中秋', '2027-02-06': '春节', '2027-02-05': '除夕', '2027-06-19': '端午', '2027-09-21': '中秋', '2028-01-28': '春节', '2028-01-27': '除夕', '2028-06-12': '端午', '2028-09-12': '中秋', '2029-02-16': '春节', '2029-02-15': '除夕', '2029-06-06': '端午', '2029-08-30': '中秋', '2030-02-04': '春节', '2030-02-03': '除夕', '2030-06-23': '端午', '2030-09-24': '中秋', '2031-01-25': '春节', '2031-01-24': '除夕', '2031-06-15': '端午', '2031-09-16': '中秋', '2032-02-12': '春节', '2032-02-11': '除夕', '2032-06-07': '端午', '2032-08-31': '中秋', '2033-02-01': '春节', '2033-01-31': '除夕', '2033-06-26': '端午', '2033-09-27': '中秋', '2034-02-17': '春节', '2034-02-16': '除夕', '2034-06-19': '端午', '2034-09-21': '中秋', '2035-02-06': '春节', '2035-02-05': '除夕', '2035-06-06': '端午', '2035-09-14': '中秋', '2036-01-26': '春节', '2036-01-25': '除夕', '2036-06-25': '端午', '2036-09-27': '中秋', '2037-02-13': '春节', '2037-02-12': '除夕', '2037-06-15': '端午', '2037-09-16': '中秋', '2038-02-02': '春节', '2038-02-01': '除夕', '2038-06-03': '端午', '2038-09-10': '中秋', '2039-01-23': '春节', '2039-01-22': '除夕', '2039-06-22': '端午', '2039-09-29': '中秋', '2040-02-10': '春节', '2040-02-09': '除夕', '2040-02-10': '春节', '2040-06-14': '端午', '2040-09-14': '中秋', '2041-01-26': '除夕', '2041-01-27': '春节', '2041-06-14': '端午', '2041-09-13': '中秋',
'2022-01-05': '小寒', '2022-01-20': '大寒', '2022-02-04': '立春', '2022-02-18': '雨水', '2022-03-05': '惊蛰', '2022-03-20': '春分', '2022-04-05': '清明', '2022-04-20': '谷雨', '2022-05-05': '立夏', '2022-05-21': '小满', '2022-06-06': '芒种', '2022-06-21': '夏至', '2022-07-07': '小暑', '2022-07-23': '大暑', '2022-08-07': '立秋', '2022-08-23': '处暑', '2022-09-08': '白露', '2022-09-23': '秋分', '2022-10-08': '寒露', '2022-10-23': '霜降', '2022-11-07': '立冬', '2022-11-22': '小雪', '2022-12-07': '大雪', '2022-12-22': '冬至', 
'2023-01-06': '小寒', '2023-01-21': '大寒', '2023-02-04': '立春', '2023-02-19': '雨水', '2023-03-06': '惊蛰', '2023-03-21': '春分', '2023-04-05': '清明', '2023-04-20': '谷雨', '2023-05-06': '立夏', '2023-05-21': '小满', '2023-06-06': '芒种', '2023-06-21': '夏至', '2023-07-07': '小暑', '2023-07-23': '大暑', '2023-08-08': '立秋', '2023-08-23': '处暑', '2023-09-08': '白露', '2023-09-23': '秋分', '2023-10-08': '寒露', '2023-10-23': '霜降', '2023-11-07': '立冬', '2023-11-22': '小雪', '2023-12-07': '大雪', '2023-12-22': '冬至', 
'2024-01-06': '小寒', '2024-01-20': '大寒', '2024-02-04': '立春', '2024-02-19': '雨水', '2024-03-05': '惊蛰', '2024-03-20': '春分', '2024-04-04': '清明', '2024-04-19': '谷雨', '2024-05-05': '立夏', '2024-05-21': '小满', '2024-06-05': '芒种', '2024-06-21': '夏至', '2024-07-07': '小暑', '2024-07-22': '大暑', '2024-08-07': '立秋', '2024-08-22': '处暑', '2024-09-07': '白露', '2024-09-22': '秋分', '2024-10-08': '寒露', '2024-10-23': '霜降', '2024-11-07': '立冬', '2024-11-22': '小雪', '2024-12-07': '大雪', '2024-12-21': '冬至', 
'2025-01-05': '小寒', '2025-01-20': '大寒', '2025-02-04': '立春', '2025-02-19': '雨水', '2025-03-06': '惊蛰', '2025-03-21': '春分', '2025-04-05': '清明', '2025-04-20': '谷雨', '2025-05-06': '立夏', '2025-05-21': '小满', '2025-06-06': '芒种', '2025-06-21': '夏至', '2025-07-07': '小暑', '2025-07-23': '大暑', '2025-08-08': '立秋', '2025-08-23': '处暑', '2025-09-08': '白露', '2025-09-23': '秋分', '2025-10-08': '寒露', '2025-10-23': '霜降', '2025-11-07': '立冬', '2025-11-22': '小雪', '2025-12-07': '大雪', '2025-12-22': '冬至', 
'2026-01-06': '小寒', '2026-01-21': '大寒', '2026-02-04': '立春', '2026-02-19': '雨水', '2026-03-06': '惊蛰', '2026-03-21': '春分', '2026-04-05': '清明', '2026-04-20': '谷雨', '2026-05-06': '立夏', '2026-05-21': '小满', '2026-06-06': '芒种', '2026-06-22': '夏至', '2026-07-08': '小暑', '2026-07-23': '大暑', '2026-08-08': '立秋', '2026-08-23': '处暑', '2026-09-08': '白露', '2026-09-23': '秋分', '2026-10-09': '寒露', '2026-10-24': '霜降', '2026-11-08': '立冬', '2026-11-23': '小雪', '2026-12-08': '大雪', '2026-12-22': '冬至', 
'2027-01-06': '小寒', '2027-01-21': '大寒', '2027-02-04': '立春', '2027-02-19': '雨水', '2027-03-06': '惊蛰', '2027-03-21': '春分', '2027-04-05': '清明', '2027-04-20': '谷雨', '2027-05-06': '立夏', '2027-05-21': '小满', '2027-06-06': '芒种', '2027-06-22': '夏至', '2027-07-08': '小暑', '2027-07-23': '大暑', '2027-08-08': '立秋', '2027-08-23': '处暑', '2027-09-08': '白露', '2027-09-23': '秋分', '2027-10-09': '寒露', '2027-10-24': '霜降', '2027-11-08': '立冬', '2027-11-23': '小雪', '2027-12-08': '大雪', '2027-12-22': '冬至', 
'2028-01-06': '小寒', '2028-01-21': '大寒', '2028-02-04': '立春', '2028-02-19': '雨水', '2028-03-05': '惊蛰', '2028-03-20': '春分', '2028-04-04': '清明', '2028-04-19': '谷雨', '2028-05-05': '立夏', '2028-05-21': '小满', '2028-06-05': '芒种', '2028-06-21': '夏至', '2028-07-07': '小暑', '2028-07-22': '大暑', '2028-08-07': '立秋', '2028-08-22': '处暑', '2028-09-07': '白露', '2028-09-22': '秋分', '2028-10-08': '寒露', '2028-10-23': '霜降', '2028-11-07': '立冬', '2028-11-22': '小雪', '2028-12-07': '大雪', '2028-12-21': '冬至', 
'2029-01-05': '小寒', '2029-01-20': '大寒', '2029-02-04': '立春', '2029-02-19': '雨水', '2029-03-06': '惊蛰', '2029-03-21': '春分', '2029-04-05': '清明', '2029-04-20': '谷雨', '2029-05-06': '立夏', '2029-05-21': '小满', '2029-06-06': '芒种', '2029-06-21': '夏至', '2029-07-07': '小暑', '2029-07-23': '大暑', '2029-08-08': '立秋', '2029-08-23': '处暑', '2029-09-08': '白露', '2029-09-23': '秋分', '2029-10-09': '寒露', '2029-10-24': '霜降', '2029-11-08': '立冬', '2029-11-23': '小雪', '2029-12-08': '大雪', '2029-12-22': '冬至', 
'2030-01-06': '小寒', '2030-01-21': '大寒', '2030-02-04': '立春', '2030-02-19': '雨水', '2030-03-06': '惊蛰', '2030-03-21': '春分', '2030-04-05': '清明', '2030-04-20': '谷雨', '2030-05-06': '立夏', '2030-05-21': '小满', '2030-06-06': '芒种', '2030-06-22': '夏至', '2030-07-08': '小暑', '2030-07-23': '大暑', '2030-08-08': '立秋', '2030-08-23': '处暑', '2030-09-08': '白露', '2030-09-23': '秋分', '2030-10-09': '寒露', '2030-10-24': '霜降', '2030-11-08': '立冬', '2030-11-23': '小雪', '2030-12-08': '大雪', '2030-12-22': '冬至',
'2031-01-06': '小寒', '2031-01-21': '大寒', '2031-02-04': '立春', '2031-02-19': '雨水', '2031-03-06': '惊蛰', '2031-03-21': '春分', '2031-04-05': '清明', '2031-04-20': '谷雨', '2031-05-06': '立夏', '2031-05-22': '小满', '2031-06-06': '芒种', '2031-06-22': '夏至', '2031-07-08': '小暑', '2031-07-23': '大暑', '2031-08-08': '立秋', '2031-08-23': '处暑', '2031-09-08': '白露', '2031-09-23': '秋分', '2031-10-09': '寒露', '2031-10-24': '霜降', '2031-11-08': '立冬', '2031-11-23': '小雪', '2031-12-08': '大雪', '2031-12-22': '冬至', 
'2032-01-06': '小寒', '2032-01-21': '大寒', '2032-02-05': '立春', '2032-02-19': '雨水', '2032-03-05': '惊蛰', '2032-03-20': '春分', '2032-04-04': '清明', '2032-04-19': '谷雨', '2032-05-05': '立夏', '2032-05-21': '小满', '2032-06-05': '芒种', '2032-06-21': '夏至', '2032-07-07': '小暑', '2032-07-22': '大暑', '2032-08-07': '立秋', '2032-08-22': '处暑', '2032-09-07': '白露', '2032-09-22': '秋分', '2032-10-08': '寒露', '2032-10-23': '霜降', '2032-11-07': '立冬', '2032-11-22': '小雪', '2032-12-07': '大雪', '2032-12-21': '冬至'


    // 添加更多假期
};
// moment.js twitter plugin
(function () {
    var day, formats, hour, initialize, minute, second, week;
    second = 1e3;
    minute = 6e4;
    hour = 36e5;
    day = 864e5;
    week = 6048e5;
    year = new Date().getFullYear();
    formats = {
        seconds: {
            short: ' 秒前',
            long: ' 秒前'
        },
        minutes: {
            short: ' 分前',
            long: ' 分前'
        },
        hours: {
            short: ' 小时前',
            long: ' 小时前'
        },
        days: {
            short: ' 天前',
            long: ' 天前'
        }
    };
    moment.locale('zh-cn'); 
    initialize = function (moment) {
        var twitterFormat;
        twitterFormat = function (format) {
            var diff, num, unit, unitStr, formattedDate;
            diff = Math.abs(this.diff(moment()));
            unit = null;
            num = null;
            var holidayKey = this.format('MM-DD');
            var holiday = holidays[holidayKey] || holidays[this.format('YYYY-MM-DD')];
            
            if (diff <= second) {
                unit = 'seconds';
                num = 1;
            } else if (diff < minute) {
                unit = 'seconds';
            } else if (diff < hour) {
                unit = 'minutes';
            } else if (diff < day) {
                unit = 'hours';
            } else if (diff < week && !holiday) {
                unit = 'days';
            } else {
                if (this.year() == year) {
                    formattedDate = this.format('M月D日 HH:mm');
                } else {
                    formattedDate = this.format('YYYY年M月D日 HH:mm');
                }
                if (holiday) {
                    formattedDate += ' · ' + holiday;
                }
                formattedDate += ' · ' + this.format('ddddA');
                return formattedDate;
            }
            
            if (!(num && unit)) {
                num = moment.duration(diff)[unit]();
            }
            unitStr = formats[unit][format];
            if (format === 'long' && num > 1) {
                unitStr += 's';
            }
            var relativeTime = num + unitStr;
            if (holiday) {
                relativeTime += ' · ' + holiday;
            }
            return relativeTime;
        };
        moment.fn.twitterLong = function () {
            return twitterFormat.call(this, 'long');
        };
        moment.fn.twitter = moment.fn.twitterShort = function () {
            return twitterFormat.call(this, 'short');
        };
        return moment;
    };

    if (typeof define === 'function' && define.amd) {
        define('moment-twitter', ['moment'], function (moment) {
            return this.moment = initialize(moment);
        });
    } else if (typeof module !== 'undefined') {
        module.exports = initialize(require('moment'));
    } else if (typeof window !== "undefined" && window.moment) {
        this.moment = initialize(this.moment);
    }

}).call(this);