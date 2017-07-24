var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

//Give the above values, give the approximate time.
//This is a sample of how to use if then else.
Console.log("It's ");
if (MINUTE == 0) { Console.log("exactly ");  }
else if (MINUTE == 5) { Console.log("5 after ");  }
else if (MINUTE == 10) { Console.log("10 after ");  }
else if (MINUTE == 15) { Console.log("a quarter after ");  }
else if (MINUTE == 20) { Console.log("20 after ");  }
else if (MINUTE == 30) { Console.log("half past ");  }
else if (MINUTE == 40) { Console.log("20 before "); HOUR--;  }
else if (MINUTE == 45) { Console.log("a quarter before "); HOUR--;  }
else if (MINUTE == 50) { Console.log("10 before "); HOUR--;  }
else if (MINUTE == 55) { Console.log("5 before "); HOUR--;  }
else if (MINUTE >   0 && MINUTE < 30) { Console.log("just after ");  }
else if (MINUTE >  30 && MINUTE < 60) { Console.log("before "); HOUR--; }
else console.log("confusing '" + MINUTE + "' for minutes ");

//Correct for decrement from 1 oclock
if (HOUR == 0)  {
    if (PERIOD == "AM") {
        PERIOD = "PM";
        HOUR = 12;
    }
    else {
        PERIOD = "AM"
        HOUR = 12;
    }
}

//validate and print hour.
if (HOUR >= 1 || HOUR <= 12) {
    console.log("" + HOUR); 
}
else {
    console.log("Say what? Hour is '" + HOUR + "'");
} 

if (PERIOD === "AM") {  
    console.log(' in the morning'); 
}
else if (PERIOD === "PM") {  
    console.log(' in the evening'); 
}
else { 
    console.log(" ??I don't understand period '" + PERIOD + "'.") ; 
}