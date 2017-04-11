window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        var backgroundGradientDOM = document.querySelector(".background-gradient");
        var bodyDOM = document.querySelector("#body-mint");

        var billsAmountDueDOM = document.querySelector(".billsAmountDue");
        var systemMessagesDOM = document.querySelector("#systemMessages");
        var overviewSelectedDOM = document.querySelector("li#overview .selected");

        if (backgroundGradientDOM && billsAmountDueDOM && bodyDOM && overviewSelectedDOM && systemMessagesDOM && window.location.href.indexOf("https://mint.intuit.com/overview.event") > -1) {
            clearInterval (jsInitChecktimer);

            backgroundGradientDOM.style.display = "none";

            bodyDOM.insertAdjacentHTML("beforeend", "<div style='height:100vh; background-color: #add8e6;'><div style='text-align:center; color:white; font-size: 150px; font-weight:800; padding-top:35vh;'>"+billsAmountDueDOM.innerText+"</div></div>");
        }
    }
}
