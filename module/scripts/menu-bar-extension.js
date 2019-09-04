
ExporterManager.MenuItems.push({}); // separator
ExporterManager.MenuItems.push(
    {
        id:"testingExport",
        label: 'Testing export option',
        click: function() { TestingExportDialog.launch() }
    }
);
