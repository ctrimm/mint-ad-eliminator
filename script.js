window.addEventListener ("load", myMain, false);

function myMain (evt) {
    // Fire the updateDOM() function once every .2 seconds
    // This is called every .2s in case various DOM elements are not present while the page is loading
    var jsInitChecktimer = setInterval (updateDOM, 200);

    // updateDOM grabs various bits of info, hides other elements, and adds the overlay w/ total bills
    function updateDOM () {
        var backgroundGradientDOM = document.querySelector(".background-gradient");
        var bodyDOM = document.querySelector("#body-mint");

        var billsAmountDueDOM = document.querySelector(".billsAmountDue");
        var systemMessagesDOM = document.querySelector("#systemMessages");
        var overviewSelectedDOM = document.querySelector("li#overview .selected");

        // If all are present, hide the .background-gradient div and add overlay
        if (backgroundGradientDOM && billsAmountDueDOM && bodyDOM && overviewSelectedDOM && systemMessagesDOM && window.location.href.indexOf("https://mint.intuit.com/overview.event") > -1) {
            // clearInterval timer so updateDOM() will not be called anymore.
            clearInterval (jsInitChecktimer);

            backgroundGradientDOM.style.display = "none";

            // quick and dirty solution for inserting proper stylized content (yes, in-line styles are bad)
            bodyDOM.insertAdjacentHTML("beforeend", "<div style='height:100vh; background-color: #add8e6;'><div style='text-align:center; color:white; font-size: 150px; font-weight:800; padding-top:35vh;'>"+billsAmountDueDOM.innerText+"</div><div style='text-align: center;'><a href='/bills.event' style='font-size: 18px; font-weight: 800;'>Update My Bills</a></div></div>");
        }
    }
}
