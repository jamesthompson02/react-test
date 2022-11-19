import React, { useState, useEffect } from 'react';

const Timer = ({deadlineDate, deadlineTime}) => {

    const [ updateRemainingDays, setRemainingDays ] = useState("");
    const [ updateRemainingHours, setRemainingHours ] = useState("");
    const [ updateRemainingMinutes, setRemainingMinutes ] = useState("");
    const [ updateRemainingSeconds, setRemainingSeconds ] = useState("");

    function updateDays(numOfDays) {
        return setRemainingDays(numOfDays);
    }

    function updateHours(numOfHours) {
        return setRemainingHours(numOfHours);
    }

    function updateMinutes(numOfMinutes) {
        return setRemainingMinutes(numOfMinutes);
    }

    function updateSeconds(numOfSeconds) {
        return setRemainingSeconds(numOfSeconds);
    }

    useEffect(() => {
        if (deadlineDate && deadlineTime) {
            const calculateEverything = setTimeout(() => {
                let numOfDays = calculateDaysRemaining();
                let numOfHours = calculateHoursRemaining();
                let numOfMinutes = calculateMinutesRemaining();
                let numOfSeconds = calculateSecondsRemaining();
                updateDays(numOfDays);
                updateHours(numOfHours);
                updateMinutes(numOfMinutes);
                updateSeconds(numOfSeconds);

            }, 1000)
            return () => clearTimeout(calculateEverything);

        }

    }, [updateRemainingSeconds])

    const test = () => {
        if (deadlineDate && deadlineTime) {
            let newDeadlineDate = deadlineDate;
            newDeadlineDate = newDeadlineDate.split("T");
            newDeadlineDate.splice(1, 0, "T");
            if (deadlineTime === "23:59") {
                newDeadlineDate[2] = "23:59:59.000Z";
                newDeadlineDate = newDeadlineDate.join("");
                return Date.parse(newDeadlineDate)
                
            } else {
                newDeadlineDate[2] = deadlineTime;
                newDeadlineDate[3] = ":00.000Z";
                newDeadlineDate = newDeadlineDate.join("");
                return Date.parse(newDeadlineDate)
            }

        } else {
            return "No deadline set for this task."


        }
    }

    const calculateDaysRemaining = () => {
        let deadlineDate = test();
        if (typeof(deadlineDate) !== "string") {
            let currentDateAndTime = Date.parse(new Date());
            let differenceBetweenDates = Math.floor(deadlineDate - currentDateAndTime);
            if (differenceBetweenDates > 0) {
                let numberOfDaysRemaining = Math.floor(differenceBetweenDates / (1000 * 60 * 60 * 24));
                return numberOfDaysRemaining;
            } else {
                return 0

            }
        } else {
            return null
        }

    }

    const calculateHoursRemaining = () => {
        let deadlineDate = test();
        if (typeof(deadlineDate) !== "string") {
            let currentDateAndTime = Date.parse(new Date());
            let differenceBetweenDates = Math.floor(deadlineDate - currentDateAndTime);
            if (differenceBetweenDates > 0) {
                let numberOfHoursRemaining = Math.floor(differenceBetweenDates / (1000 * 60 * 60 ));
                let numberOfDaysRemaining = calculateDaysRemaining();
                numberOfDaysRemaining = numberOfDaysRemaining * 24;
                numberOfHoursRemaining = numberOfHoursRemaining - numberOfDaysRemaining;
                return numberOfHoursRemaining;
            } else {
                return 0;

            }
        } else {
            return null;
        }
    }

    const calculateMinutesRemaining = () => {
        let deadlineDate = test();
        if (typeof(deadlineDate) !== "string") {
            let currentDateAndTime = Date.parse(new Date());
            let differenceBetweenDates = Math.floor(deadlineDate - currentDateAndTime);
            if (differenceBetweenDates > 0) {
                let numberOfMinutesRemaining = Math.floor(differenceBetweenDates / (1000 * 60));
                let numberOfHoursRemaining = calculateHoursRemaining();
                let numberOfDaysRemaining = calculateDaysRemaining();
                numberOfDaysRemaining = numberOfDaysRemaining * 24 * 60;
                numberOfHoursRemaining = numberOfHoursRemaining * 60;
                numberOfMinutesRemaining = numberOfMinutesRemaining - numberOfHoursRemaining - numberOfDaysRemaining;
                return numberOfMinutesRemaining;
            } else {
                return 0;

            }
        } else {
            return null;
        }
    }

    const calculateSecondsRemaining = () => {
        let deadlineDate = test();
        if (typeof(deadlineDate) !== "string") {
            let currentDateAndTime = Date.parse(new Date());
            let differenceBetweenDates = Math.floor(deadlineDate - currentDateAndTime);
            if (differenceBetweenDates > 0) {
                let numberOfSecondsRemaining = Math.floor(differenceBetweenDates / 1000);
                let numberOfMinutesRemaining = calculateMinutesRemaining();
                let numberOfHoursRemaining = calculateHoursRemaining();
                let numberOfDaysRemaining = calculateDaysRemaining();
                numberOfDaysRemaining = numberOfDaysRemaining * 24 * 60 * 60;
                numberOfHoursRemaining = numberOfHoursRemaining * 60 * 60;
                numberOfMinutesRemaining = numberOfMinutesRemaining * 60;
                numberOfSecondsRemaining = numberOfSecondsRemaining - numberOfMinutesRemaining - numberOfHoursRemaining - numberOfDaysRemaining;
                return numberOfSecondsRemaining;
            } else {
                return 0;

            }
        } else {
            return null;
        }
    }

   
    if (deadlineDate && deadlineTime) {
        if ((updateRemainingDays !== "" && updateRemainingDays !== 0) || (updateRemainingHours !== "" && updateRemainingHours !== 0)
        || (updateRemainingMinutes !== "" && updateRemainingMinutes !== 0) || (updateRemainingSeconds !== "" && updateRemainingSeconds !== 0)) {
            return (
                <>
                    <p>There are {updateRemainingDays} days {updateRemainingHours} hours {updateRemainingMinutes} minutes and {updateRemainingSeconds} seconds left </p>
                </>
            )

        }  else {
            return (
                <p>Deadline has passed</p>
            )
        }
    };
}

export default Timer;
