sap.ui.define([
		"worklist/worklistApplication/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("worklist.worklistApplication.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);