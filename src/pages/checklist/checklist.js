var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
var ChecklistPage = (function () {
    function ChecklistPage(nav, navParams, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.checklist = this.navParams.get('checklist');
    }
    ChecklistPage.prototype.addItem = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Item',
            message: 'Enter the name of the task for this checklist below:',
            inputs: [
                {
                    name: 'name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.checklist.addItem(data.name);
                    }
                }
            ]
        });
        prompt.present();
    };
    ChecklistPage.prototype.toggleItem = function (item) {
        this.checklist.toggleItem(item);
    };
    ChecklistPage.prototype.removeItem = function (item) {
        this.checklist.removeItem(item);
    };
    ChecklistPage.prototype.renameItem = function (item) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Rename Item',
            message: 'Enter the new name of the task for this checklist below:',
            inputs: [
                {
                    name: 'name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.checklist.renameItem(item, data.name);
                    }
                }
            ]
        });
        prompt.present();
    };
    ChecklistPage.prototype.uncheckItems = function () {
        var _this = this;
        this.checklist.items.forEach(function (item) {
            if (item.checked) {
                _this.checklist.toggleItem(item);
            }
        });
    };
    return ChecklistPage;
}());
ChecklistPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-checklist',
        templateUrl: 'checklist.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AlertController])
], ChecklistPage);
export { ChecklistPage };
//# sourceMappingURL=checklist.js.map