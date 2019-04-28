<template>

  <div class="ds-event"
    :class="classes">

    <div class="ds-event-header ds-event-area">

      <div class="ds-event-cancel" v-if="hasCancel">

        <!-- Cancel -->
        <slot name="scheduleCancel" v-bind="{cancel, labels}">

          <v-tooltip bottom>
            <v-btn slot="activator" icon class="ds-button" @click="cancel">
              <v-icon dark>clear</v-icon>
            </v-btn>
            <span v-html="labels.cancel"></span>
          </v-tooltip>

        </slot>

      </div>

      <div class="ds-event-actions">

        <!-- Save -->
        <slot name="scheduleSave" v-bind="{hasSave, save, labels, readOnly}">

          <v-btn
            v-if="!isReadOnly"
            class="ds-button-tall ml-3 mt-0 mb-2" depressed
            color="primary"
            :disabled="!canSave"
            @click.stop="save">

            <span v-html="labels.save"></span>

          </v-btn>

        </slot>

        <!-- More Actions -->
        <slot name="scheduleActions" v-bind="{calendarEvent, schedule, calendar, actioned, readOnly}">

          <ds-schedule-actions
            v-if="calendarEvent && !isReadOnly"
            v-bind="{$scopedSlots}"
            v-on="$listeners"
            :schedule="schedule"
            :calendar-event="calendarEvent"
            :calendar="calendar"
            @finish="actioned">
            <v-btn class="ds-button-tall ml-1 mt-0 mb-2" depressed>
               {{ labels.moreActions }}
            </v-btn>
          </ds-schedule-actions>

        </slot>

      </div>

      <!-- Title -->
      <slot name="scheduleTitle" v-bind="{schedule, schedule, calendarEvent, details}">

        <!-- class="ds-textfield ds-calendar-event-title" -->
        <v-text-field 
          class="ds-event-title"
          :label="labels.subject"
          :readonly="isReadOnly"
          v-model="details.subject"
          :rules="[rules.required]"
        ></v-text-field>

      </slot>

    </div>

    <!-- <div class="ds-event-body ds-event-area">

      <slot name="schedule" v-bind="slotData">

        <ds-schedule
          :schedule="schedule"
          :day="day"
          :read-only="readOnly"
        ></ds-schedule>

      </slot>

    </div> -->

    <!-- Details -->
    <v-card flat>
      <v-card-text>

        <!-- Location -->
        <!-- <slot name="eventDetailsLocation" v-bind="slotData">
          <v-text-field v-if="$dayspan.supports.location"
            single-line hide-details solo flat
            prepend-icon="location_on"
            :label="labels.location"
            :readonly="isReadOnly"
            v-model="details.location"
          ></v-text-field>
        </slot>
 -->
        <!-- Description -->
        <!-- <slot name="eventDetailsDescription" v-bind="slotData">
          <v-textarea v-if="$dayspan.supports.description"
            hide-details single-line solo flat
            prepend-icon="subject"
            :label="labels.description"
            :readonly="isReadOnly"
            v-model="details.description"
          ></v-textarea>
        </slot> -->

        <!-- Calendar -->
        <!-- <slot name="eventDetailsCalendar" v-bind="slotData">
          <v-text-field v-if="$dayspan.supports.calendar"
            single-line hide-details solo flat readonly
            prepend-icon="event"
            :label="labels.calendar"
            :readonly="isReadOnly"
            v-model="details.calendar"
          ></v-text-field>
        </slot> -->

        <!-- Color -->
        <slot name="eventDetailsColor" v-bind="slotData">
          <v-select v-if="$dayspan.supports.color"
            label="颜色"
            :items="$dayspan.colors"
            :color="details.color"
            :disabled="isReadOnly"
            v-model="details.color">
            <template slot="item" slot-scope="{ item }">
              <v-list-tile-content>
                <div class="ds-color-option" :style="{backgroundColor: item.value}" v-text="item.text"></div>
              </v-list-tile-content>
            </template>
          </v-select>
        </slot>

        <!-- Icon -->
        <!-- <slot name="eventDetailsIcon" v-bind="slotData">
          <v-select v-if="$dayspan.supports.icon"
            single-line hide-details solo flat
            :prepend-icon="details.icon || 'help'"
            :items="$dayspan.icons"
            :disabled="isReadOnly"
            v-model="details.icon">
            <template slot="item" slot-scope="{ item }">
              <v-list-tile-avatar>
                <v-icon>{{ item.value }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                {{ item.text }}
              </v-list-tile-content>
            </template>
          </v-select>
        </slot> -->

        <!-- Busy -->
        <!-- <slot name="eventDetailsBusy" v-bind="slotData">
          <v-select v-if="$dayspan.supports.busy"
            single-line hide-details solo flat
            prepend-icon="work"
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.busy"
          ></v-select>
        </slot> -->

        <!-- <slot name="eventDetailsExtra" v-bind="slotData"></slot> -->

        <slot v-bind="slotData">
          <v-select
            label="类型" 
            clearable
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.type"
          ></v-select>
        </slot>

        <slot v-bind="slotData">
          <v-text-field 
            label="地点" 
            :disabled="isReadOnly"
            v-model="details.location"
          ></v-text-field >
        </slot>

        <slot v-bind="slotData">
          <v-select
            label="优先级" 
            clearable
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.priority"
          ></v-select>
        </slot>

        <slot v-bind="slotData">
          <v-select
            label="参与人" 
            clearable
            multiple
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.users"
          ></v-select>
        </slot>

        <slot v-bind="slotData">
          <v-select
            label="参与部门" 
            clearable
            multiple
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.departments"
          ></v-select>
        </slot>

        <slot v-bind="slotData">
          <v-select
            label="提醒方式" 
            clearable
            :items="busyOptions"
            :disabled="isReadOnly"
            v-model="details.reminders"
          ></v-select>
        </slot>

        <slot v-bind="slotData">
          <v-text-field 
            label="提前多久提醒我"
            :min=0
            :max=1440
            :rules="[rules.max1440]"
            type="number"
            :disabled="isReadOnly"
            v-model="details.inAdvance"
          ></v-text-field >
        </slot>

        <slot v-bind="slotData">
          <v-checkbox
            label="是否通知" 
            :disabled="isReadOnly"
            v-model="details.notice"
          ></v-checkbox>
        </slot>

        <slot v-bind="slotData">
          <v-textarea
            outline
            label="备注"
            :disabled="isReadOnly"
            counter=2
            v-model="details.remark"
          ></v-textarea>
        </slot>

      </v-card-text>
    </v-card>
  </div>

</template>

<script>
import { Day, Calendar, CalendarEvent, Schedule, Functions as fn } from 'dayspan';
import { getDictDataByType, getDepartmentTree } from "@/api/index";

export default {

  name: 'dsEvent',

  props:
  {
    targetSchedule:
    {
      required: true,
      type: Schedule
    },

    targetDetails:
    {
      type: Object,
      required: true
    },

    calendarEvent:
    {
      type: CalendarEvent
    },

    calendar:
    {
      type: Calendar
    },

    day:
    {
      type: Day
    },

    readOnly:
    {
      type: Boolean,
      default: false
    },

    labels:
    {
      validate(x) {
        return this.$dsValidate(x, 'labels');
      },
      default() {
        return this.$dsDefaults().labels;
      }
    },

    hasTitle:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasTitle;
      }
    },

    hasCancel:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasCancel;
      }
    },

    hasSave:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasSave;
      }
    },

    hasTabs:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasTabs;
      }
    },

    hasDetails:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasDetails;
      }
    },

    hasForecast:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasForecast;
      }
    },

    hasExclusions:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasExclusions;
      }
    },

    hasInclusions:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasInclusions;
      }
    },

    hasCancelled:
    {
      type: Boolean,
      default() {
        return this.$dsDefaults().hasCancelled;
      }
    },

    busyOptions:
    {
      type: Array,
      default() {
        return this.$dsDefaults().busyOptions;
      }
    }
  },

  data: vm => ({
    tab: 'details',
    schedule: new Schedule(),
    details: vm.$dayspan.getDefaultEventDetails(),
    rules: {
      required: value => !!value || '必填！',
      min8: v => v.length >= 8 || '至少8个字符',
      max1440: v => v <= 1440 || '最大为1440',
    },
  }),

  watch:
  {
    targetSchedule:
    {
      handler: 'updateSchedule',
      immediate: true
    },

    targetDetails:
    {
      handler: 'updateDetails',
      immediate: true
    }
  },

  computed:
  {
    slotData()
    {
      return {
        targetSchedule: this.targetSchedule,
        targetDetails: this.targetDetails,
        schedule: this.schedule,
        details: this.details,
        busyOptions: this.busyOptions,
        day: this.day,
        calendar: this.calendar,
        calendarEvent: this.calendarEvent,
        labels: this.labels,
        readOnly: this.readOnly
      };
    },

    classes()
    {
      return {
        'ds-has-cancel': this.hasCancel,
        'ds-event-small': this.$vuetify.breakpoint.smAndDown
      };
    },

    canSave()
    {
      return this.$dayspan.isValidEvent( this.details, this.schedule, this.calenderEvent );
    },

    repeats()
    {
      return !this.schedule.isSingleEvent();
    },

    showTitle()
    {
      return this.$dayspan.supports.title &&
        this.hasTitle;
    },

    showCancels()
    {
      return this.$dayspan.features.cancel &&
        this.repeats &&
        this.hasCancelled &&
        !this.schedule.cancel.isEmpty();
    },

    showForecast()
    {
      return this.$dayspan.features.forecast &&
        this.repeats &&
        this.hasForecast;
    },

    showExclusions()
    {
      return this.$dayspan.features.exclude &&
        this.repeats &&
        this.hasExclusions &&
        !this.schedule.exclude.isEmpty();
    },

    showInclusions()
    {
      return this.$dayspan.features.include &&
        this.repeats &&
        this.hasInclusions &&
        !this.schedule.include.isEmpty();
    },

    isReadOnly()
    {
      return this.readOnly || this.$dayspan.readOnly;
    }
  },

  methods:
  {
    save()
    {
      var ev = this.getEvent('save')
      debugger
      this.$emit('save', ev);

      if (!ev.handled)
      {
        if (ev.target && ev.schedule)
        {
          ev.target.set( ev.schedule );
        }

        if (ev.calendarEvent)
        {
          this.$dayspan.setEventDetails(
            ev.details,
            ev.targetDetails,
            ev.calendarEvent.event,
            ev.calendarEvent
          );

          this.$emit('update', ev);

          this.$emit('event-update', ev.calendarEvent.event);
        }
        else if (ev.create)
        {
          ev.created = this.$dayspan.createEvent( ev.details, ev.schedule );

          if (ev.calendar)
          {
            ev.calendar.addEvent( ev.created );
            ev.added = true;
          }

          this.$emit('create', ev);
        }

        if (ev.calendar && ev.refresh)
        {
          ev.calendar.refreshEvents();
        }

        ev.handled = true;

        if (ev.created)
        {
          this.$emit('event-create', ev.created);
        }
      }

      this.$emit('saved', ev);
    },

    actioned(ev)
    {
      this.$emit('actioned', ev);
    },

    cancel()
    {
      this.$emit('cancel', this.getEvent('cancel'));
    },

    updateSchedule(schedule)
    {
      this.schedule = schedule.clone();
      this.tab = 'details';
    },

    updateDetails(details)
    {
      this.details = this.$dayspan.copyEventDetails( details );
      this.tab = 'details';
    },

    getEvent(type, extra = {})
    {
      return fn.extend({

        type: type,
        day: this.day,
        schedule: this.schedule,
        target: this.targetSchedule,
        details: this.details,
        targetDetails: this.targetDetails,
        calendar: this.calendar,
        calendarEvent: this.calendarEvent,
        handled: false,
        refresh: true,
        create: true,
        added: false,
        $vm: this,
        $element: this.$el

      }, extra);
    },
    init() {
      this.initDepts();
      this.initDicts();
    },
    initDicts() {
      getDictDataByType('scheduleType').then(res=>{
        if(res.success){
          this.scheduleTypes = res.result
        }
      })
      getDictDataByType('schedulePriority').then(res=>{
        if(res.success){
          this.schedulePrioritys = res.result
        }
      })
      getDictDataByType('scheduleReminder').then(res=>{
        if(res.success){
          this.scheduleReminders = res.result
        }
      })
    },
    initDepts() {
      getDepartmentTree().then(res => {
        this.departments = res.result
      })
    },
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped lang="scss">

.ds-calendar-event-title {
  font-size: 18px;
  padding-right: 8px;
  padding-top: 4px;
}

.ds-color-option {
  width: 100%;
  color: white;
  padding: 4px;
}

.ds-button-tall {
  height: 48px;
}

.ds-event {

  &.ds-has-cancel {

    .ds-event-area {
      margin-left: 60px;
    }
  }

  &.ds-event-small {

    &.ds-has-cancel {

      .ds-event-area {
        margin-left: 0px;
      }
      .ds-event-header {
        margin-left: 60px;
        margin-bottom: 58px;
      }
    }

    .ds-event-title {
      position: absolute;
      right: 8px;
      left: -60px;
      top: 60px;
    }

    .ds-event-body {
      clear: both;
    }
  }

  .ds-event-area {
    position: relative;
  }

  .ds-event-actions {
    float: right;

    > * {
      display: inline-block;
    }
  }

  .ds-event-header {
    min-height: 60px;
  }

  .ds-event-cancel {
    position: absolute;
    left: -60px;
  }

  .v-input {
    margin-bottom: 8px;
  }
}

</style>
