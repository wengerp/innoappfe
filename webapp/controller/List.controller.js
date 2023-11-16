sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    ],
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("ch.novobc.sapui5.controller.List", {
           
            onPressGo: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedParticipantId = this.getView().byId("inputMail").getValue(); //oEvent.getSource().getBindingContext().getProperty("participantId");
                oRouter.navTo("detail", {
                    participantId: encodeURIComponent(selectedParticipantId)
                });
            }
        });
    });
