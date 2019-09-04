var TestingExportDialog = {};

TestingExportDialog.launch = function() {
    this.frame = $(DOM.loadHTML("testing", "scripts/dialogs/testing-export-dialog.html"));
    this._elmts = DOM.bind(this.frame);

    if (this.missingSchema) {
        return;
    }

    this._level = DialogSystem.showDialog(this.frame);

    this._elmts.dialogHeader.text('Testing Export Form');
    this._elmts.nextButton.text('OK');
    this._elmts.cancelButton.text('Cancel');
    this._elmts.baseURILabel.text('Base URI');

    var self = this;
    var dismiss = function() {
        DialogSystem.dismissUntil(self._level - 1);
    };

    this.frame.find('.cancel-button').click(function() {
        dismiss();
    });
};
