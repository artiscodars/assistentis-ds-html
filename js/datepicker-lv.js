/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
(async function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["../widgets/datepicker"], factory);
  } else {
    // Browser globals
    factory(jQuery.datepicker);
  }
})(async function (datepicker) {
  "use strict";

  const holidaysResponse = await fetch("/js/holidays.json");
  const holidaysData = await holidaysResponse.json();
  const holidays = holidaysData.holidays.map((holiday) => new Date(holiday.date));

  const workingDaysResponse = await fetch("/js/workingdays.json");
  const workingDaysData = await workingDaysResponse.json();
  const workingDays = workingDaysData.workingdays.map((workingday) => new Date(workingday.date));

  datepicker.regional.lv = {
    closeText: "Aizvērt",
    prevText: "Iepr.",
    nextText: "Nāk.",
    currentText: "Šodien",
    monthNames: [
      "Janvāris",
      "Februāris",
      "Marts",
      "Aprīlis",
      "Maijs",
      "Jūnijs",
      "Jūlijs",
      "Augusts",
      "Septembris",
      "Oktobris",
      "Novembris",
      "Decembris",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jūn",
      "Jūl",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    dayNames: [
      "svētdiena",
      "pirmdiena",
      "otrdiena",
      "trešdiena",
      "ceturtdiena",
      "piektdiena",
      "sestdiena",
    ],
    dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
    dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
    weekHeader: "Ned.",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
    beforeShowDay: function (date) {
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isHoliday = holidays.some(
        (holiday) => holiday.getDate() === date.getDate() && holiday.getMonth() === date.getMonth() && holiday.getFullYear() === date.getFullYear()
      );
      const isWorkingDay = workingDays.some(
        (workingDay) => workingDay.getDate() === date.getDate() && workingDay.getMonth() === date.getMonth() && workingDay.getFullYear() === date.getFullYear()
      );
    
      if (isHoliday) {
        return [true, "holiday", "Holiday"];
      } else if (isWeekend && !isWorkingDay) {
        return [true, "weekend", "Weekend"];
      }
    
      return [true];
    },
    
  };
  datepicker.setDefaults(datepicker.regional.lv);


  return datepicker.regional.lv;
});

