"use client"
import React, { useEffect, useState } from 'react'

const DateTime = () => {
    useEffect(() => {
        const target = document.querySelector('span#dateTime');
        const d = new Date();

        // CREATING SOME MUTABLE VARIABLES
        var currentHour = d.getHours();
        var currentMinute = d.getMinutes();
        var AMorPM = "AM";
        var currentDay = d.getDay();
        var currentMonth = d.getMonth();

        // FORMATTING THE HOUR
        if (currentHour > 12 && currentHour <= 23) {
            currentHour -= 12;
        }

        // FORMATTING THE MINUTE
        if (parseInt(currentMinute) < 10) {
            currentMinute = '0' + currentMinute;
        }

        // FORMATTING AM/PM
        if (currentHour >= 12 && currentHour <= 23) {
            AMorPM = "PM";
        }

        // FORMATTING THE DAY
        switch (currentDay) {
            case 0:
                currentDay = "Sun";
                break;
            case 1:
                currentDay = "Mon";
                break;
            case 2:
                currentDay = "Tue";
                break;
            case 3:
                currentDay = "Wed";
                break;
            case 4:
                currentDay = "Thurs";
                break;
            case 5:
                currentDay = "Fri";
                break;
            case 6:
                currentDay = "Sat";
                break;
        }

        // FORMATTING THE MONTH
        switch (currentMonth) {
            case 0:
                currentMonth = "Jan";
                break;
            case 1:
                currentMonth = "Feb";
                break;
            case 2:
                currentMonth = "Mar";
                break;
            case 3:
                currentMonth = "Apr";
                break;
            case 4:
                currentMonth = "May";
                break;
            case 5:
                currentMonth = "Jun";
                break;
            case 6:
                currentMonth = "Jul";
                break;
            case 7:
                currentMonth = "Aug";
                break;
            case 8:
                currentMonth = "Sep";
                break;
            case 9:
                currentMonth = "Oct";
                break;
            case 10:
                currentMonth = "Nov";
                break;
            case 11:
                currentMonth = "Dec";
                break;
        }

        const currentTime = currentHour + ':' + currentMinute + ' ' + AMorPM;
        const currentDate = currentDay + ', ' + currentMonth + ' ' + d.getFullYear();

        const dateTime = currentTime + ' - ' + currentDate;

        target.innerText = dateTime;
    })
    return (
        <span id='dateTime'></span>
    )
}

export default DateTime