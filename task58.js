/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

Solution*/

function formatDuration (seconds) {
    if (seconds == 0) return "now";
    let arr = [];
    arr.push(Math.floor(seconds / 31536000));
    if (arr[0] == 1) {
        arr.push("year");
    } else {
        arr.push("years");
    }
    arr.push(Math.floor((seconds - arr[0] * 31536000) / 86400));
    if (arr[2] == 1) {
        arr.push("day");
    } else {
        arr.push("days");
    }
    arr.push(Math.floor((seconds - arr[0] * 31536000 - arr[2] * 86400) / 3600));
    if (arr[4] == 1) {
        arr.push("hour");
    } else {
        arr.push("hours");
    }
    arr.push(Math.floor((seconds - arr[0] * 31536000 - arr[2] * 86400 - arr[4] * 3600) / 60));
    if (arr[6] == 1) {
        arr.push("minute");
    } else {
        arr.push("minutes");
    }
    arr.push(seconds - arr[0] * 31536000 - arr[2] * 86400 - arr[4] * 3600 - arr[6] * 60);
    if (arr[8] == 1) {
        arr.push("second");
    } else {
        arr.push("seconds");
    }
    if (arr[0] == 0 && arr[2] == 0 && arr[4] == 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[8]+" "+arr[9];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] == 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[6]+" "+arr[7];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] == 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[6]+" "+arr[7]+" and "+ arr[8]+" "+arr[9];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] != 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[4]+" "+arr[5];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] != 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[4] + " " + arr[5] + " and " + arr[8] + " " + arr[9];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] != 0 && arr[6] != 0 && arr[8] == 0) {
            return arr[4]+" "+arr[5]+" and "+ arr[6]+" "+arr[7];
    } else if (arr[0] == 0 && arr[2] == 0 && arr[4] != 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[4] + " " + arr[5] + ", " + arr[6] + " " + arr[7] + " and " + arr[8] + " " + arr[9];
    } else if (arr[0] == 0 && arr[2] != 0 && arr[4] == 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[2] + " " + arr[3];
    } else if (arr[0] == 0 && arr[2] != 0 && arr[4] == 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[2] + " " + arr[3]+" and "+ arr[8]+" "+arr[9];
    } else if (arr[0] == 0 && arr[2] != 0 && arr[4] == 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[2] + " " + arr[3]+" and "+ arr[6]+" "+arr[7];
    } else if (arr[0] == 0 && arr[2] != 0 && arr[4] == 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[2] + " " + arr[3]+", "+arr[6] + " " + arr[7]+" and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] == 0 && arr[2] != 0 && arr[4] != 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[2] + " " + arr[3]+" and "+ arr[4]+" "+arr[5];
    }
    else if (arr[0] == 0 && arr[2] != 0 && arr[4] != 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[2] + " " + arr[3]+", "+arr[4] + " " + arr[5]+" and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] == 0 && arr[2] != 0 && arr[4] != 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[2] + " " + arr[3]+", "+arr[4] + " " + arr[5]+" and "+ arr[6]+" "+arr[7];
    }
    else if (arr[0] == 0 && arr[2] != 0 && arr[4] != 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[2] + " " + arr[3]+", "+arr[4] + " " + arr[5]+", "+arr[6] + " " + arr[7]+" and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] == 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] == 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] == 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + " and "+ arr[6]+" "+arr[7];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] == 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[6] + " " + arr[7] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] != 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + " and "+ arr[4]+" "+arr[5];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] != 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[4] + " " + arr[5] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] != 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + ", " + arr[4] + " " + arr[5] + " and "+ arr[6]+" "+arr[7];
    }
    else if (arr[0] != 0 && arr[2] == 0 && arr[4] != 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[4] + " " + arr[5] + ", " + arr[6] + " " + arr[7] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] == 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + " and " + arr[2] + " " + arr[3] ;
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] == 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] == 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + " and "+ arr[6]+" "+arr[7];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] == 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + ", " + arr[6] + " " + arr[7] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] != 0 && arr[6] == 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + " and "+ arr[4]+" "+arr[5];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] != 0 && arr[6] == 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + ", "+ arr[4]+" "+arr[5] + " and "+ arr[8]+" "+arr[9];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] != 0 && arr[6] != 0 && arr[8] == 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + ", "+ arr[4]+" "+arr[5] + " and "+ arr[6]+" "+arr[7];
    }
    else if (arr[0] != 0 && arr[2] != 0 && arr[4] != 0 && arr[6] != 0 && arr[8] != 0) {
        return arr[0] + " " + arr[1] + ", " + arr[2] + " " + arr[3] + ", " + arr[4]+ " " +arr[5] +", "+ arr[6]+" "+arr[7]+ " and "+ arr[8]+" "+arr[9];
    }
}