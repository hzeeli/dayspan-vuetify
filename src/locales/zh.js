
export default {
  promptLabels: {
    actionRemove:       '确定移除这个事件吗？',
    actionExclude:      '是否确实要删除此事件？',
    actionCancel:       '是否确实要取消此活动？',
    actionUncancel:     '是否确定不取消此活动？',
    actionSetStart:     'Are you sure you want to set this occurrence as the first?',
    actionSetEnd:       'Are you sure you want to set this occurrence as the last?',
    actionMove:         '确定移动事件吗？',
    actionInclude:      '确定在此日期添加当前事件吗？',
    move:               '确定移动事件吗？',
    toggleAllDay:       'Are you sure you want to change whether this event occurs all day?',
    removeExistingTime: 'Are you sure you want to remove all event occurrences at this time?'
  },
  placeholder: {
    noTitle: '(无标题)'
  },
  patterns: {
    lastDay:        (day) => 'Last day of the month',
    lastDayOfMonth: (day) => 'Last day of ' + day.format('MMMM'),
    lastWeekday:    (day) => 'Last ' + day.format('dddd') + ' in ' + day.format('MMMM')
  },
  colors: [
    { text: '红色' },
    { text: '粉红' },
    { text: '紫色' },
    { text: '深紫' },
    { text: '靛蓝' },
    { text: '蓝色' },
    { text: '深蓝' },
    { text: '浅蓝' },
    { text: '青色' },
    { text: '湖水绿' },
    { text: '青橙绿' },
    { text: '浅绿' },
    { text: '橙色' },
    { text: '黄色' },
    { text: '琥珀色' },
    { text: '橙色' },
    { text: '深橙' },
    { text: '棕色' },
    { text: '蓝灰色' },
    { text: '灰色' },
    { text: '黑色' }
  ],
  icons: [
    { text: '提醒' },
    { text: '星' },
    { text: '爱心' },
    { text: '行动' },
    { text: '任务' },
    { text: '警告' },
    { text: '钱' },
    { text: 'Charge' },
    { text: '家' },
    { text: 'Play' },
    { text: '邮箱' },
    { text: '电话' },
    { text: 'Chart' },
    { text: 'Biking' },
    { text: '旅行' }
  ],
  defaults: {
    dsDay: {
      formats: {
        month:  'MMM'
      }
    },
    dsCalendarApp: {
      types: [
        { label: '日' },
        { label: '周' },
        { label: '月' },
        { label: '年' },
        { label: '日程表' },
        { label: '4 天' }
      ],
      formats: {
        today: 'dddd, MMMM D',
        xs: 'MMM'
      },
      labels: {
        next: (type) => type ? '下 ' + type.label.toLowerCase() : 'Next',
        prev: (type) => type ? '上 ' + type.label.toLowerCase() : 'Previous',
        moveCancel: '取消移动',
        moveSingleEvent: '移动事件',
        moveOccurrence: '移动到当前日期',
        moveAll: 'Move all event occurrences',
        moveDuplicate: '当前日期添加相同事件',
        promptConfirm: '确定',
        promptCancel: '取消',
        today: '今日'
      }
    },
    dsAgendaEvent: {
      formats: {
        firstLine:  'ddd',
        secondLine: 'MMM Do',
        start:      'dddd, MMMM D',
        time:       'h:mm a'
      },
      labels: {
        allDay:   '全天',
        options:  '设置',
        close:    '关闭',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     '忙',
        free:     '空闲'
      }
    },
    dsCalendarEventChip: {
      formats: {
        fullDay:          'ddd MMM Do YYYY',
        timed:            'ddd MMM Do YYYY'
      }
    },
    dsCalendarEventPopover: {
      formats: {
        start:    'dddd, MMMM D',
        time:     'h:mm a'
      },
      labels: {
        allDay:   '全天',
        options:  '设置',
        close:    '关闭',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     '忙',
        free:     '空闲'
      }
    },
    dsCalendarEventCreatePopover: {
      formats: {
        start:    'dddd, MMMM D',
        time:     'h:mm a'
      },
      labels: {
        subject:    '添加标题',
        allDay:   '全天',
        close:    '关闭',
        save:     '保存',
        day:      ['day', 'days'],
        days:     ['day', 'days'],
        minute:   ['minute', 'minutes'],
        minutes:  ['minute', 'minutes'],
        hour:     ['hour', 'hours'],
        hours:    ['hour', 'hours'],
        week:     ['week', 'weeks'],
        weeks:    ['week', 'weeks'],
        second:   ['second', 'seconds'],
        seconds:  ['second', 'seconds'],
        busy:     '忙',
        free:     '空闲',
        location: '添加地点',
        description: '添加描述',
        calendar: 'Calendar',
      },
      busyOptions: [
        {text: '忙'},
        {text: '空闲'}
      ]
    },
    dsSchedule: {
      labels: {
        editCustom:   'Edit'
      }
    },
    dsEvent: {
      labels: {
        moreActions:  '更多...',
        cancel:       '取消事件更改',
        save:         '保存',
        subject:      '标题',
        type:         '类型',
        exclusions:   'These are events or spans of time where a normally occurring event was excluded from the schedule. Events are excluded here if an event occurrence is moved.',
        inclusions:   'These are events or spans of time where events were added outside the normally occurring schedule. Events are added here if an event occurrence is moved.',
        cancelled:    'These are events or spans of time where events were cancelled.',
        edit:         'Edit event',
        add:          'Add event',
        location: '添加地点',
        description: '添加描述',
        calendar:     'Calendar',
        tabs: {
          details:    'Event Details',
          forecast:   'Forecast',
          removed:    'Removed',
          added:      'Added',
          cancelled:  'Cancelled'
        }
      },
      busyOptions: [
        {text: '忙'},
        {text: '空闲'}
      ]
    },
    dsScheduleActions: {
      labels: {
        remove:     '移除此日程',
        exclude:    'Remove this occurrence',
        cancel:     'Cancel this occurrence',
        uncancel:   'Undo cancellation',
        move:       '移动此日程',
        include:    '复制到新日期',
        setStart:   'Set as first occurrence',
        setEnd:     'Set as last occurrence',
        pickerOk:   'OK',
        pickerCancel:'Cancel'
      }
    },
    dsScheduleForecast: {
      labels: {
        prefix:     'The forecast shows previous & next',
        suffix:     'event occurrences within a years time.'
      }
    },
    dsScheduleFrequencyDay: {
      labels: {
        type: 'Days'
      },
      options: [
        { text: 'Any day' },
        { text: 'On the following days...' },
        { text: 'Every _ days starting on _' }
      ],
      types: [
        { text: 'Day of the month' },
        { text: 'Last day of the month' },
        { text: 'Day of the year' }
      ]
    },
    dsScheduleFrequencyDayOfWeek: {
      weekdays: ['周日', '周一', '周二', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      labels: {
        type: 'Days of week'
      },
      options: [
        { text: 'Any day of the week' },
        { text: 'On the following days of the week...' },
        { text: 'Every _ weekday starting on _' },
        { text: 'Weekends' },
        { text: 'Weekdays' }
      ]
    },
    dsScheduleFrequencyMonth: {
      labels: {
        type: '月份'
      },
      months: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ],
      options: [
        { text: 'Any month' },
        { text: 'On the following months...' },
        { text: 'Every _ months starting on _' }
      ]
    },

    dsScheduleFrequencyWeek: {
      labels: {
        type: '周'
      },
      options: [
        { text: 'Any week' },
        { text: 'On the following weeks...' },
        { text: 'Every _ weeks starting on _' }
      ],
      types: [
        { text: 'Week of the month (first week has a Thursday)' },
        { text: 'Weekspan of the month (starts on first day of month)' },
        { text: 'Full week of the month (0th = the week before if any)' },
        { text: 'Last weekspan of the month (starts on last day of month)' },
        { text: 'Last full week of the month (0th = the week after if any)' },
        { text: 'Week of the year (first week has a Thursday)' },
        { text: 'Weekspan of the year (starts on first day of year)' },
        { text: 'Full week of the year (0th = the week before if any)' },
        { text: 'Last weekspan of the year (starts on last day of year)' },
        { text: 'Last full week of the year (0th = the week after if any)' }
      ]
    },

    dsScheduleFrequencyYear: {
      labels: {
        type: '年'
      },
      options: [
        { text: 'Any year' },
        { text: 'On the following years...' },
        { text: 'Every _ years starting on _' }
      ]
    },

    dsScheduleSpan: {
      labels: {
        startless:  '开始时间',
        endless:    '结束时间'
      },
      formats: {
        start:      'MMMM Do, YYYY',
        end:        'MMMM Do, YYYY'
      }
    },

    dsScheduleTime: {
      labels: {
        remove:     'Remove time',
        add:        'Add time'
      }
    },

    dsScheduleTimes: {
      labels: {
        all:        '全天',
        minute:     '分钟',
        minutes:    '分钟',
        hour:       '小时',
        hours:      '小时',
        day:        '天',
        days:       '天',
        week:       '周',
        weeks:      '周',
        month:      '月',
        months:     '月',
        second:     '秒',
        seconds:    '秒'
      }
    },

    dsScheduleType: {
      formats: {
        date:       'LL'
      }
    },

    dsScheduleTypeCustomDialog: {
      labels: {
        save:     '保存',
        cancel:   '取消'
      }
    },

    dsWeekDayHeader: {
      formats: {
        weekday:    'ddd'
      }
    },

    dsWeeksView: {
      weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    },

    dsDaysView: {
      hours: [
        '    ', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
        '24:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ]
    },

    dsDayPicker: {
      weekdays: ['一', '二', '三', '四', '五', '六', '七'],
      labels: {
        prevMonth: '上一月',
        nextMonth: '下一月'
      }
    }
  }
}
