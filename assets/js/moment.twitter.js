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
    }
});
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
            var diff, num, unit, unitStr;
            diff = Math.abs(this.diff(moment()));
            unit = null;
            num = null;
            if (diff <= second) {
                unit = 'seconds';
                num = 1;
            } else if (diff < minute) {
                unit = 'seconds';
            } else if (diff < hour) {
                unit = 'minutes';
            } else if (diff < day) {
                unit = 'hours';
            } else if (format === 'short') {
                if (diff < week) {
                    unit = 'days';
                } else if (this.year() == year) {
                    return this.format('M月D日 HH:mm • ddda');
                } else {
                    return this.format('YYYY年M月D日 HH:mm • ddda');
                }
            } else {
                return this.format('YYYY年M月D日 HH:mm • ddda' );
            }
            if (!(num && unit)) {
                num = moment.duration(diff)[unit]();
            }
            unitStr = unit = formats[unit][format];
            if (format === 'long' && num > 1) {
                unitStr += 's';
            }
            return num + unitStr;
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