/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"worklist/worklistApplication/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"worklist/worklistApplication/test/integration/pages/Worklist",
	"worklist/worklistApplication/test/integration/pages/Object",
	"worklist/worklistApplication/test/integration/pages/NotFound",
	"worklist/worklistApplication/test/integration/pages/Browser",
	"worklist/worklistApplication/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "worklist.worklistApplication.view."
	});

	sap.ui.require([
		"worklist/worklistApplication/test/integration/WorklistJourney",
		"worklist/worklistApplication/test/integration/ObjectJourney",
		"worklist/worklistApplication/test/integration/NavigationJourney",
		"worklist/worklistApplication/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});