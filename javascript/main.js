//GLOBAL JS
var ele_list = document.querySelectorAll(".tab");
for (var x = 0; x < ele_list.length; x++) {
ele_list[x].addEventListener("click", function (e) {
mainContentselector(this.getAttribute("data-origin"));
e.preventDefault();
});
}
var openMain = function(){
    document.getElementById("homeLink").click();
}
openMain();
//tab style controller - controls active/inactive tab CSS and the 
//display of the tabs "contents"
function mainContentselector(origin){
    disableAll();
    activeTabController(origin);
    activateContent(origin);
}
function disableAll(){
    //Add any new tabs here vvvvv
    var contentID = ["home", "ops", "calendar", "tools", "device"];    
    var i;
    for(i=0; i < contentID.length; i++){
        //turning off all tabs
        var currentContainer = contentID[i];
        var currentContainerContent = (currentContainer + "Content");
        var currentContainerLink = (currentContainer + "Link");
        var currentContainerstyle = (currentContainer + "LinkTop");
        var currentTurnDown = document.getElementById(currentContainerContent);
        var currentTurnDownTab = document.getElementById(currentContainerLink);
        var currentTurnDownStyling = document.getElementById(currentContainerstyle);
        currentTurnDownTab.classList.remove("tabSelectedState");
        currentTurnDownStyling.classList.remove("tabDesignActive");
        currentTurnDownTab.classList.add("tabNonSelectedState");
        currentTurnDownStyling.classList.add("tabDesignInactive");
        //finished turning all off
        //turn off active containers
        var removeOpenContainers =  (contentID[i] + "Active");
        var _check = hasClass(currentTurnDown, removeOpenContainers);
        if(_check) {
            currentTurnDown.classList.remove(removeOpenContainers);
            break;
        }
        else {
                 
        }
    }
}

function hasClass(element, classCheck){
    return (' ' + element.className + ' ').indexOf(' ' + classCheck + ' ') > -1;
}

function activeTabController(activated){
    var origin = activated;
    var currentTabActive = document.getElementById(origin + "Link");
    var currentTabStyleingActive = document.getElementById(origin + "LinkTop");
    currentTabActive.classList.remove("tabNonSelectedState");
    currentTabStyleingActive.classList.remove("tabDesignInactive");
    currentTabActive.classList.add("tabSelectedState");
    currentTabStyleingActive.classList.add("tabDesignActive");
}

function activateContent(activatedWindow){
    var origin = activatedWindow;
    var currentWindow = (origin + "Content");
    var currentStyle = (origin);
    var newStyle = (origin + "Active");
    var _checkOld = hasClass(currentWindow, currentStyle);
    var _checkNew = hasClass(currentWindow, newStyle);
    var activatedContainer = document.getElementById(currentWindow);
    if (_checkOld){
        activatedContainer.classList.remove(currentStyle);
    }
    else if(_checkNew === false){
    	activatedContainer.classList.add(newStyle);
    }
}