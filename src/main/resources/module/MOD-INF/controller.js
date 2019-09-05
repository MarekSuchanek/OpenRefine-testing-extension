/*
 * Main JS file for Testing extension of OpenRefine
 */

function init() {
    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [
            "scripts/menu-bar-extension.js",
            "scripts/dialogs/testing-export-dialog.js",
        ]);
}



