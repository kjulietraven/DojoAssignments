function bdayCountDown(daysUntilBday){
    var daysUntilBday = 50;

while (daysUntilBday >= 0){

if (daysUntilBday > 30)
{
    console.log(daysUntilBday + " days until my birthday. Such a long time.");
}

else if (daysUntilBday < 32 && daysUntilBday > 0)
{
    console.log(daysUntilBday + " DAYS UNTIL MY BIRTHDAY!!!");
}

else if (daysUntilBday == 0)
{
    console.log("HAPPY BIRTHDAY!");
}

daysUntilBday--

}
}

bdayCountDown()