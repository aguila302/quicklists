import { Observable } from 'rxjs/Observable';
var ChecklistModel = (function () {
    function ChecklistModel(title, items) {
        var _this = this;
        this.title = title;
        this.items = items;
        this.items = items;
        this.checklist = Observable.create(function (observer) {
            _this.checklistObserver = observer;
        });
    }
    ChecklistModel.prototype.addItem = function (item) {
        this.items.push({
            title: item,
            checked: false
        });
        this.checklistObserver.next(true);
    };
    ChecklistModel.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.checklistObserver.next(true);
    };
    ChecklistModel.prototype.renameItem = function (item, title) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items[index].title = title;
        }
        this.checklistObserver.next(true);
    };
    ChecklistModel.prototype.setTitle = function (title) {
        this.title = title;
        this.checklistObserver.next(true);
    };
    ChecklistModel.prototype.toggleItem = function (item) {
        item.checked = !item.checked;
        this.checklistObserver.next(true);
    };
    ChecklistModel.prototype.checklistUpdates = function () {
        return this.checklist;
    };
    return ChecklistModel;
}());
export { ChecklistModel };
//# sourceMappingURL=checklist-model.js.map