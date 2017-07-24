var d = new Date();
var HOUR = d.getHours();
var MINUTE = d.getMinutes();

console.log("24 hour clock:" + HOUR + ":" + MINUTE);
var Front = "";
//Give the above values, give the approximate time.
//This is a sample of how to use if then else.
if (MINUTE == 0) { front = "It's exactly ";  }
else if (MINUTE == 5) { front = "It's 5 after ";  }
else if (MINUTE == 10) { front = "It's 10 after ";  }
else if (MINUTE == 15) { front = "It's a quarter after ";  }
else if (MINUTE == 20) { front = "It's 20 after ";  }
else if (MINUTE == 30) { front = "It's half past ";  }
else if (MINUTE == 40) { front = "It's 20 before "; HOUR++;  }
else if (MINUTE == 45) { front = "It's a quarter before "; HOUR++;  }
else if (MINUTE == 50) { front = "It's 10 before "; HOUR++;  }
else if (MINUTE == 55) { front = "It's 5 before "; HOUR++;  }
else if (MINUTE >   0 && MINUTE < 30) { front = "It's just after ";  }
else if (MINUTE >  30 && MINUTE < 60) { front = "It's a little before "; HOUR++; }
else front = "It's confusing '" + MINUTE + "' for minutes ";

if (HOUR == 0)  {
        Period = "AM";
        HOUR = 12;
    }
if (HOUR > 0 && HOUR <= 12  ) {
    Period = "AM";
}
else {
  HOUR -= 12;
  Period = "PM";
}


rear = "" + HOUR;

if (Period === "AM") {
    rear += ' in the morning';
}
else if (Period === "PM") {
    rear += ' in the evening';
}
else {
    rear += " ??I don't understand period '" + Period + "'." ;
}
console.log(front + rear);
