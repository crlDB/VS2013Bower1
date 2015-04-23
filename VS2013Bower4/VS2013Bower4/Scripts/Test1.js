﻿;
var bConfig = bConfig || {};

//Opstart belgoCip
$(document).ready(function () {



    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };



    // jspanel
    $.jsPanel({
        title: 'Bootstrap <small>Theme Danger</small>',
        content: '<div id="example"></div>',
        bootstrap: 'danger',
        position: 'center'
    });




    var container = document.getElementById('example'),
      storedData = {},
      savedKeys,
      resetState,
      stateLoaded,
      hot;

    function createBigData() {
        return [
          [1, "George Washington", "http://en.wikipedia.org/wiki/George_Washington", "30/04/1789", "4/03/1797", "Independent ", "Virginia"],
          [2, "John Adams", "http://en.wikipedia.org/wiki/John_Adams", "4/03/1797", "4/03/1801", "Federalist ", "Massachusetts"],
          [3, "Thomas Jefferson", "http://en.wikipedia.org/wiki/Thomas_Jefferson", "4/03/1801", "4/03/1809", "Democratic-Republican ", "Virginia"],
          [4, "James Madison", "http://en.wikipedia.org/wiki/James_Madison", "4/03/1809", "4/03/1817", "Democratic-Republican ", "Virginia"],
          [5, "James Monroe", "http://en.wikipedia.org/wiki/James_Monroe", "4/03/1817", "4/03/1825", "Democratic-Republican ", "Virginia"],
          [6, "John Quincy Adams", "http://en.wikipedia.org/wiki/John_Quincy_Adams", "4/03/1825", "4/03/1829", "Democratic-Republican/National Republican ", "Massachusetts"],
          [7, "Andrew Jackson", "http://en.wikipedia.org/wiki/Andrew_Jackson", "4/03/1829", "4/03/1837", "Democratic ", "Tennessee"],
          [8, "Martin Van Buren", "http://en.wikipedia.org/wiki/Martin_Van_Buren", "4/03/1837", "4/03/1841", "Democratic ", "New York"],
          [9, "William Henry Harrison", "http://en.wikipedia.org/wiki/William_Henry_Harrison", "4/03/1841", "4/04/1841", "Whig", "Ohio"],
          [10, "John Tyler", "http://en.wikipedia.org/wiki/John_Tyler", "4/04/1841", "4/03/1845", "Whig", "Virginia"],
          [11, "James K. Polk", "http://en.wikipedia.org/wiki/James_K._Polk", "4/03/1845", "4/03/1849", "Democratic ", "Tennessee"],
          [12, "Zachary Taylor", "http://en.wikipedia.org/wiki/Zachary_Taylor", "4/03/1849", "9/07/1850", "Whig", "Louisiana"],
          [13, "Millard Fillmore", "http://en.wikipedia.org/wiki/Millard_Fillmore", "9/07/1850", "4/03/1853", "Whig", "New York"],
          [14, "Franklin Pierce", "http://en.wikipedia.org/wiki/Franklin_Pierce", "4/03/1853", "4/03/1857", "Democratic ", "New Hampshire"],
          [15, "James Buchanan", "http://en.wikipedia.org/wiki/James_Buchanan", "4/03/1857", "4/03/1861", "Democratic ", "Pennsylvania"],
          [16, "Abraham Lincoln", "http://en.wikipedia.org/wiki/Abraham_Lincoln", "4/03/1861", "15/04/1865", "Republican/National Union", "Illinois"],
          [17, "Andrew Johnson", "http://en.wikipedia.org/wiki/Andrew_Johnson", "15/04/1865", "4/03/1869", "Democratic/National Union", "Tennessee"],
          [18, "Ulysses S. Grant", "http://en.wikipedia.org/wiki/Ulysses_S._Grant", "4/03/1869", "4/03/1877", "Republican ", "Ohio"],
          [19, "Rutherford B. Hayes", "http://en.wikipedia.org/wiki/Rutherford_B._Hayes", "4/03/1877", "4/03/1881", "Republican ", "Ohio"],
          [20, "James A. Garfield", "http://en.wikipedia.org/wiki/James_A._Garfield", "4/03/1881", "19/09/1881", "Republican ", "Ohio"],
          [21, "Chester A. Arthur", "http://en.wikipedia.org/wiki/Chester_A._Arthur", "19/09/1881", "4/03/1885", "Republican ", "New York"],
          [22, "Grover Cleveland", "http://en.wikipedia.org/wiki/Grover_Cleveland", "4/03/1885", "4/03/1889", "Democratic ", "New York"],
          [23, "Benjamin Harrison", "http://en.wikipedia.org/wiki/Benjamin_Harrison", "4/03/1889", "4/03/1893", "Republican ", "Indiana"],
          [24, "Grover Cleveland (2nd term)", "http://en.wikipedia.org/wiki/Grover_Cleveland", "4/03/1893", "4/03/1897", "Democratic ", "New York"],
          [25, "William McKinley", "http://en.wikipedia.org/wiki/William_McKinley", "4/03/1897", "14/9/1901", "Republican ", "Ohio"],
          [26, "Theodore Roosevelt", "http://en.wikipedia.org/wiki/Theodore_Roosevelt", "14/9/1901", "04/03/09", "Republican ", "New York"],
          [27, "William Howard Taft", "http://en.wikipedia.org/wiki/William_Howard_Taft", "04/03/09", "04/03/13", "Republican ", "Ohio"],
          [28, "Woodrow Wilson", "http://en.wikipedia.org/wiki/Woodrow_Wilson", "04/03/13", "04/03/21", "Democratic ", "New Jersey"],
          [29, "Warren G. Harding", "http://en.wikipedia.org/wiki/Warren_G._Harding", "04/03/21", "02/08/23", "Republican ", "Ohio"],
          [30, "Calvin Coolidge", "http://en.wikipedia.org/wiki/Calvin_Coolidge", "02/08/23", "04/03/29", "Republican ", "Massachusetts"],
          [31, "Herbert Hoover", "http://en.wikipedia.org/wiki/Herbert_Hoover", "04/03/29", "04/03/33", "Republican ", "Iowa"],
          [32, "Franklin D. Roosevelt", "http://en.wikipedia.org/wiki/Franklin_D._Roosevelt", "04/03/33", "12/04/45", "Democratic", "New York"],
          [33, "Harry S. Truman", "http://en.wikipedia.org/wiki/Harry_S._Truman", "12/04/45", "20/01/53", "Democratic", "Missouri"],
          [34, "Dwight D. Eisenhower", "http://en.wikipedia.org/wiki/Dwight_D._Eisenhower", "20/01/53", "20/01/61", "Republican ", "Texas"],
          [35, "John F. Kennedy", "http://en.wikipedia.org/wiki/John_F._Kennedy", "20/01/61", "22/11/63", "Democratic", "Massachusetts"],
          [36, "Lyndon B. Johnson", "http://en.wikipedia.org/wiki/Lyndon_B._Johnson", "22/11/63", "20/01/69", "Democratic", "Texas"],
          [37, "Richard Nixon", "http://en.wikipedia.org/wiki/Richard_Nixon", "20/01/69", "09/08/74", "Republican", "California"],
          [38, "Gerald Ford", "http://en.wikipedia.org/wiki/Gerald_Ford", "09/08/74", "20/01/77", "Republican", "Michigan"],
          [39, "Jimmy Carter", "http://en.wikipedia.org/wiki/Jimmy_Carter", "20/01/77", "20/01/81", "Democratic ", "Georgia"],
          [40, "Ronald Reagan", "http://en.wikipedia.org/wiki/Ronald_Reagan", "20/01/81", "20/01/89", "Republican ", "California"],
          [41, "George H. W. Bush", "http://en.wikipedia.org/wiki/George_H._W._Bush", "20/01/89", "20/01/93", "Republican ", "Texas"],
          [42, "Bill Clinton", "http://en.wikipedia.org/wiki/Bill_Clinton", "20/01/93", "20/01/01", "Democratic ", "Arkansas"],
          [43, "George W. Bush", "http://en.wikipedia.org/wiki/George_W._Bush", "20/01/01", "20/01/09", "Republican ", "Texas"],
          [44, "Barack Obama", "http://en.wikipedia.org/wiki/Barack_Obama", "20/01/09", "Incumbent ", "  Democratic   ", "Illinois"]
        ]
    }

    hot = new Handsontable(container, {
        data: createBigData(),
        rowHeaders: true,
        colHeaders: true,
        colWidths: [45, 200, 110, 280],
        columnSorting: true,
        columns: [
          { data: 0 },
          { data: 1 },
          { data: 6 },
          { data: 5 }
        ],
        manualColumnMove: true,
        manualColumnResize: true,
        minSpareRows: 1,
        contextMenu: true,
        persistentState: true
    });
   

    resetState = document.querySelector('.reset-state');
    stateLoaded = document.querySelector('.state-loaded');

    //Handsontable.Dom.addEvent(resetState, 'click', function () {
    //    hot.runHooks('persistentStateReset');
    //    hot.updateSettings({
    //        columnSorting: true,
    //        manualColumnMove: true,
    //        manualColumnResize: true
    //    });
    //    stateLoaded.style.display = 'none';
    //    hot.render();
    //});

    //// `storedData` will be modified by reference
    //hot.runHooks('persistentStateLoad', '_persistentStateKeys', storedData);

    //savedKeys = storedData.value;

    if (savedKeys && savedKeys.length > 0) {
        stateLoaded.style.display = 'block';
    }


    // jspanel
    $.jsPanel({
        title: 'Bootstrap <small>Theme Danger</small>',
        content: '<canvas id="myChart" width="400" height="400"></canvas>',
        bootstrap: 'danger',
        position: 'center',
        size: { width: 500, height: 500 }

    });
    var ctx = document.getElementById("myChart").getContext("2d");
    var myLineChart = new Chart(ctx).Line(data);



    var data2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    // jspanel
    $.jsPanel({
        title: 'Bootstrap <small>Theme Danger</small>',
        content: '<canvas id="myChart2" width="400" height="400"></canvas>',
        bootstrap: 'danger',
        position: 'center',
        size: { width: 500, height: 500 }

    });
    var ctx = document.getElementById("myChart2").getContext("2d");
    new Chart(ctx).Bar(data2, {
        barShowStroke: false
    });





    // start
//    bConfig.CS = new Config('/GIBAS/config');

    //Toon pagina inhoud
//    $("#mainPag").css("visibility", "visible");
//    $("#MenuDiv").css("visibility", "visible");
});
