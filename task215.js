/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

Solution*/

function humanReadable (s) {
    const hours = String(Math.floor(s/3600)).length>1 ? `${Math.floor(s/3600)}`:`0${Math.floor(s/3600)}`
    const minutes = String(Math.floor((s-hours*3600)/60)).length>1 ? `${Math.floor((s-hours*3600)/60)}`:`0${Math.floor((s-hours*3600)/60)}`
    const seconds = String(s-minutes*60-hours*3600).length>1 ? `${s-minutes*60-hours*3600}`:`0${s-minutes*60-hours*3600}`
    return `${hours}:${minutes}:${seconds}`;
  }