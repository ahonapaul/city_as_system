let info = {
    historyStart : "A",
    historyText : "church in the corner of a quiet street, a haven for the block, was engulfed in flames on the night of December 20, 1997. In the early hours of the day, maintenance workers and the pastor’s family gathered around the rubble and ashes, their ears ringing from the silence. Just an hour or so ago, the fire department was here, filling the night’s quiet with the loud sirens and the shout of the firemen.",
    rebuildStart: "",
    rebuildText : "",
    presentStart : "",
    presentText : "",
    dates : [1896, 1968, 1997, 2013, 2020, 2023],
    peopleNames : ["Fowler and Hough", "Rev Charles Nesbitt", "Rev Owen L. Loftman", "Bryan E. Kelly"],
    churchNames : ["Bushwick Avenue Congretational Church", "Bethesda Baptist Church", "Restoration Worship Temple"],
    buildings : [1162, 1170],
    streets : ["Bushwick Ave", "Cornelia Street", "Putnam Avenue"]
}

document.querySelector(".text").innerHTML = info.dates[0];

document.querySelector(".history_start").innerHTML = info.historyStart;

document.querySelector(".history_text").innerHTML = info.historyText;

document.querySelector(".rebuild_start").innerHTML = info.rebuildStart;

document.querySelector(".rebuild_text").innerHTML = info.rebuildText;

document.querySelector(".present_start").innerHTML = info.presentStart;

document.querySelector(".present_text").innerHTML = info.presentText;