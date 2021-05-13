
const timelineButtons = 'resourceTimelineDay,resourceTimelineThreeDays';
const gridButtons = 'timeGridWeek,dayGridMonth,listWeek';

const headerToolbar = {
    left: 'today prev,next',
    center: 'title',
    right: `addEventButton ${timelineButtons},${gridButtons}`,
  };

export default headerToolbar;
