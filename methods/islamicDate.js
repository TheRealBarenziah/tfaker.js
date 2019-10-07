function gmod(n, m) {
  return ((n % m) + m) % m;
}

function kuwaiticalendar(adjust) {
  var myRes = new Array(8);
  var today = new Date();
  if (adjust && (typeof adjust === "number")) {
    myRes[0] = day; //calculated day (CE)
    myRes[1] = month - 1; //calculated month (CE)
    myRes[2] = year; //calculated year (CE)
    myRes[3] = jd - 1; //ju
    var adjustmili = 1000 * 60 * 60 * 24 * adjust;
    var todaymili = today.getTime() + adjustmili;
    today = new Date(todaymili);
  }
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  var m = month + 1;
  var y = year;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  var a = Math.floor(y / 100.);
  var b = 2 - a + Math.floor(a / 4.);
  if (y < 1583) b = 0;
  if (y == 1582) {
    if (m > 10) b = -10;
    if (m == 10) {
      b = 0;
      if (day > 4) b = -10;
    }
  }

  var jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

  b = 0;
  if (jd > 2299160) {
    a = Math.floor((jd - 1867216.25) / 36524.25);
    b = 1 + a - Math.floor(a / 4.);
  }
  var bb = jd + b + 1524;
  var cc = Math.floor((bb - 122.1) / 365.25);
  var dd = Math.floor(365.25 * cc);
  var ee = Math.floor((bb - dd) / 30.6001);
  day = (bb - dd) - Math.floor(30.6001 * ee);
  month = ee - 1;
  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;

  if (adjust) {
    var wd = gmod(jd + 1 - adjust, 7) + 1;
  } else {
    wd = gmod(jd + 1, 7) + 1;
  }

  var iyear = 10631. / 30.;
  var epochastro = 1948084;
  //  var epochcivil = 1948085;   <------------ EPOCHCIVIL unused var, if uncomment goto 68

  var shift1 = 8.01 / 60.;

  var z = jd - epochastro;
  var cyc = Math.floor(z / 10631.);
  z = z - 10631 * cyc;
  var j = Math.floor((z - shift1) / iyear);
  var iy = 30 * cyc + j;
  z = z - Math.floor(j * iyear + shift1);
  var im = Math.floor((z + 28.5001) / 29.5);
  if (im == 13) im = 12;
  var id = z - Math.floor(29.5001 * im - 29);

  myRes[0] = day; //calculated day (CE)
  myRes[1] = month - 1; //calculated month (CE)
  myRes[2] = year; //calculated year (CE)
  myRes[3] = jd - 1; //julian day number
  myRes[4] = wd - 1; //weekday number
  myRes[5] = id; //islamic date
  myRes[6] = im - 1; //islamic month
  myRes[7] = iy; //islamic year
  return myRes;
}

var correct = function (integer) {
  if (typeof integer === "number") {
    var intModulo = integer % 7;
    if (intModulo < 0) {
      console.log(intModulo + " negative correction")
    }
    else if (intModulo > 0 ) {
      console.log(intModulo + " positive correction")
    }
    else console.log(intModulo + " no correction")
    /*
    switch (intModulo) {
      case 0: return 1;
      case 1: return 1;
      case 2: return 1;
      case 3: return 1;
      case 4: return 1;
      case 5: return 1;
      case 6: return 1;
      default: return integer
      */
    }
  else if (integer === undefined) return 0;
  else return 0;
}
console.log(correct(undefined) + " undefined")
console.log(correct(0) + " corr 0")
console.log(correct(1) + " corr 1")
console.log(correct(7) + " corr 7")
console.log(correct(8) + " corr 8")
console.log(correct(10) + " corr 10")
console.log(correct(-7) + " corr -7")
console.log(correct(-10) + " corr -10")


//module.exports = exports = 

function islamicDate(adjustment) {
  var wdNames = new Array("Ahad", "Ithnin", "Thulatha", "Arbaa", "Khams", "Jumuah", "Sabt");
  var iMonthNames = new Array("Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir",
    "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja");

  if (adjustment === "zif" || adjustment === "fake") {
    var randomPast = kuwaiticalendar(-Math.round((Math.random() * 90) * 365.2422))
    var fakeIDate = wdNames[Math.round(Math.random() * 7)] + ", "
      + randomPast[5] + " " + iMonthNames[randomPast[6]] + " " + randomPast[7] + " AH"
    return fakeIDate;
  }

  else
    var iDate = kuwaiticalendar(adjustment);
    var realDay = iDate[4];
    var outputIslamicDate = wdNames[iDate[4]] + ", "
    + iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
  // console.log("real day should be = ", realDay)
  // console.log("adjustment = ", adjustment)
  return outputIslamicDate;
}
/*
console.log(islamicDate())
console.log(islamicDate(1)) // output should be Thulatha
console.log(islamicDate(2)) // ... should be Arbaa
console.log(islamicDate(3)) // ... should be Khams
*/

// original source : https://www.al-habib.info/islamic-calendar/hijricalendartext.htm