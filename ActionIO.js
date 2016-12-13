/* jshint esversion: 6 */
/* jshint browser: true */

class ActionIO {

    constructor(actionsAreaId) {
        this.actionsArea = document.getElementById(actionsAreaId);
        this.handleAction = null;
    }
    
    setHandleAction(handleAction) {
        this.handleAction = handleAction;
    }

    createAction(caption, action) {
        var actionElem = document.createElement("button"),
            self = this;
        actionElem.innerHTML = caption;
        actionElem.className = "actionStyle";
        actionElem.addEventListener("click", function () {
            self.handleAction(action);
        });
        this.actionsArea.appendChild(actionElem);
    }

    clearActions() {
        var actions = this.actionsArea.childNodes;
        for (var i = actions.length - 1; i >= 0; i--) {
            actions[i].remove();
        }
    }

}