import {Calendar} from '@fullcalendar/core';
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import resources from './controllers/resources.js';
import schedules from './controllers/events.js';
import headerToolbar from './user-interface/headerToolbar.js';

import './main.css';

const initialView = 'resourceTimelineDay';
const customViews = {
  resourceTimelineThreeDays: {
    type: 'resourceTimeline',
    duration: {days: 3},
    buttonText: '3 day',
  },
};

const plugins = [
  adaptivePlugin,
  interactionPlugin,
  dayGridPlugin,
  listPlugin,
  timeGridPlugin,
  resourceTimelinePlugin,
];

document.addEventListener('DOMContentLoaded', function() {
  const customButtons = {
    addEventButton: {
      text: 'Add Schedules',
      click: function(e) {
        e.preventDefault();
        calendar.addEvent(
            {
              id: '1',
              resourceId: 'nurse-b',
              start: '2021-05-13T02:00:00',
              end: '2021-05-13T13:00:00',
              title: 'Jane Smith, RN',
            },
            true, // scroll to the new resource?
        );
      },
    },
  };

  // Render calendar
  const calendarEl = document.getElementById('calendar');
  const calendar = new Calendar(calendarEl, {
    plugins: plugins,
    schedulerLicenseKey: 'XXX',
    now: '2021-05-13',
    editable: true, // enable draggable events
    aspectRatio: 1.8,
    scrollTime: '00:00', // undo default 6am scrollTime
    customButtons: customButtons,
    headerToolbar: headerToolbar,
    initialView: initialView,
    views: customViews,
    resourceAreaHeaderContent: 'Resources',
    resources: resources,
    events: schedules,
  });

  calendar.render();
});
