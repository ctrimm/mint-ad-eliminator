window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        // var adviceDOM = document.querySelector(".AdviceView")
        var billsAmountDueDOM = document.querySelector(".billsAmountDue");
        var systemMessagesDOM = document.querySelector("#systemMessages");
        var mainSectionDOM = document.querySelector(".pageContents");

        if (billsAmountDueDOM && mainSectionDOM && systemMessagesDOM && window.location.href.indexOf("https://mint.intuit.com/overview.event") > -1) {
            clearInterval (jsInitChecktimer);
            alert("your url is mint.com");
            // adviceDOM.style.display = "none";
            console.log('billsAmountDue - ', billsAmountDueDOM.innerText);

            systemMessagesDOM.insertAdjacentHTML("beforeend", "<div style='text-align:center; color:red; font-size: 72px;'>"+billsAmountDueDOM.innerText+"</div>");

            mainSectionDOM.style.display = "none";
        }
    }
}