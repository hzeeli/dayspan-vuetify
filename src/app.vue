<template>
  <v-app id="dayspan" v-cloak>

    <ds-calendar-app ref="app"
      :calendar="calendar"
      :read-only="readOnly"
      @change="saveState">
<!-- 
      <template slot="title">
        日历
      </template>



      <template slot="eventPopover" slot-scope="slotData">
         <ds-calendar-event-popover
          v-bind="slotData"
          :read-only="readOnly"
          @finish="saveState"
        ></ds-calendar-event-popover>
      </template> -->

      <!-- <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
        <ds-calendar-event-create-popover
          :calendar-event="placeholder"
          :calendar="calendar"
          :close="$refs.app.$refs.calendar.clearPlaceholder"
          @create-edit="$refs.app.editPlaceholder"
          @create-popover-closed="saveState"
        ></ds-calendar-event-create-popover>
      </template> -->

     <!--  <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
        <div>
          <v-icon class="ds-ev-icon"
            v-if="details.icon"
            size="14"
            :style="{color: details.forecolor}">
            {{ details.icon }}
          </v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
      </template>

      <template slot="drawerBottom">
        <v-container fluid>
          <v-layout wrap align-center>
            <v-flex xs12>
              <v-checkbox box
                label="只 读?"
                v-model="readOnly"
              ></v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-select
                label="Language"
                :items="locales"
                v-model="currentLocale"
                @input="setLocale"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </template> -->

    </ds-calendar-app>

  </v-app>
</template>

<script>
import { dsMerge } from './functions';
import { Calendar, Weekday, Month, Sorts } from 'dayspan';
import * as moment from 'moment';
import { getDictDataByType, getDepartmentTree, saveSchedule, getAllSchedule } from "@/api/index";

export default {

  name: 'dayspan',

  data: vm => ({
    storeKey: 'dayspanState',
    calendar: Calendar.months(),
    readOnly: false,
    currentLocale: vm.$dayspan.currentLocale,
    locales: [
      { value: 'en', text: 'English' },
      { value: 'zh', text: '中文' },
    ],
  }),
  created() {
    let val = window.top.document.getElementById("par_box");
    this.$store.dispatch('setToken', val)
  },
  mounted() {
    window.app = this.$refs.app;

    this.loadState();
    this.init();
  },

  methods: {
    getCalendarTime(calendarEvent) {
      let sa = calendarEvent.start.format('a');
      let ea = calendarEvent.end.format('a');
      let sh = calendarEvent.start.format('h');
      let eh = calendarEvent.end.format('h');

      if (calendarEvent.start.minute !== 0)
      {
        sh += calendarEvent.start.format(':mm');
      }

      if (calendarEvent.end.minute !== 0)
      {
        eh += calendarEvent.end.format(':mm');
      }

      return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
    },

    setLocale(code) {
      moment.lang(code);

      this.$dayspan.setLocale(code);
      this.$dayspan.refreshTimes();

      this.$refs.app.$forceUpdate();
    },

    saveState() {//保存日历事件
      /* let state = this.calendar.toInput(true);
      let json = JSON.stringify(state);

      localStorage.setItem(this.storeKey, json); */
    },

    loadState() {//加载日历事件
      let state = {};
      getAllSchedule().then(res=>{
        try {
          /* let savedState = JSON.parse(localStorage.getItem(this.storeKey)); */
          let savedState = res.result
          if (savedState) {
            state = savedState;
            state.preferToday = false;
          }
        }
        catch (e) {
          console.log( e );
        }

        let defaults = this.$dayspan.getDefaultEventDetails();

        state.events.forEach(ev => {
          ev.data = dsMerge( ev.data, defaults );
        });

        this.$refs.app.setState( state );

      })
      
    },
    init() {
      this.initDepts();
      this.initDicts();
    },
    initDicts() {
      getDictDataByType('scheduleType').then(res=>{
        if(res.success){
          this.$store.dispatch('setScheduleTypes', res.result)
        }
      })
      getDictDataByType('schedulePriority').then(res=>{
        if(res.success){
          this.$store.dispatch('setSchedulePrioritys', res.result)
        }
      })
      getDictDataByType('scheduleReminder').then(res=>{
        if(res.success){
          this.$store.dispatch('setScheduleReminder', res.result)
        }
      })
    },
    initDepts() {
      getDepartmentTree().then(res => {
        this.$store.dispatch('setDepartments', res.result)
      })
    },
  },
}
</script>

<style>

body, html, #app {
  width: 100%;
  height: 100%;
}

</style>
