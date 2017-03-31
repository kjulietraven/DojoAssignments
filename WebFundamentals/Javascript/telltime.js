function TellTime(HOUR, MINUTE, PERIOD){
    var HOUR = 8;
    var MINUTE = 50;
    var PERIOD = 'AM';

if (MINUTE > 30 && PERIOD == 'AM')
{
    console.log("It's almost " + (HOUR + 1) + " in the morning");
}

else if (MINUTE < 30 && PERIOD == 'PM')
{
    console.log("It's just after " + (HOUR - 1) + " in the evening");
}

}
