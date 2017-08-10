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
import { IonicPage, NavController, AlertController, Platform } from 'ionic-angular';
import { ChecklistModel } from '../../models/checklist-model';
import { DataProvider } from '../../providers/data/data';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';
var HomePage = (function () {
    function HomePage(nav, dataService, alertCtrl, storage, platform, keyboard) {
        this.nav = nav;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        this.keyboard = keyboard;
        this.checklists = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('introShown').then(function (result) {
                if (!result) {
                    _this.storage.set('introShown', true);
                    _this.nav.setRoot('IntroPage');
                }
            });
            _this.dataService.getData().then(function (checklists) {
                var savedChecklists = false;
                if (typeof (checklists) != "undefined") {
                    savedChecklists = JSON.parse(checklists);
                }
                if (savedChecklists) {
                    savedChecklists.forEach(function (savedChecklist) {
                        var loadChecklist = new ChecklistModel(savedChecklist.title, savedChecklist.items);
                        _this.checklists.push(loadChecklist);
                        loadChecklist.checklistUpdates().subscribe(function (update) {
                            _this.save();
                        });
                    });
                }
            });
        });
    };
    HomePage.prototype.addChecklist = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'New Checklist',
            message: 'Enter the name of your new checklist below:',
            inputs: [{
                    name: 'name'
                }],
            buttons: [{
                    text: 'Cancel'
                }, {
                    text: 'Save',
                    handler: function (data) {
                        var newChecklist = new ChecklistModel(data.name, []);
                        _this.checklists.push(newChecklist);
                        newChecklist.checklistUpdates().subscribe(function (update) {
                            _this.save();
                        });
                        _this.save();
                    }
                }]
        });
        prompt.present();
    };
    HomePage.prototype.renameChecklist = function (checklist) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Rename Checklist',
            message: 'Enter the new name of this checklist below:',
            inputs: [{
                    name: 'name'
                }],
            buttons: [{
                    text: 'Cancel'
                }, {
                    text: 'Save',
                    handler: function (data) {
                        var index = _this.checklists.indexOf(checklist);
                        if (index > -1) {
                            _this.checklists[index].setTitle(data.name);
                            _this.save();
                        }
                    }
                }]
        });
        prompt.present();
    };
    HomePage.prototype.viewChecklist = function (checklist) {
        this.nav.push('ChecklistPage', {
            checklist: checklist
        });
    };
    HomePage.prototype.removeChecklist = function (checklist) {
        var index = this.checklists.indexOf(checklist);
        if (index > -1) {
            this.checklists.splice(index, 1);
            this.save();
        }
    };
    HomePage.prototype.save = function () {
        this.keyboard.close();
        this.dataService.save(this.checklists);
    };
    return HomePage;
}());
HomePage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, DataProvider, AlertController, Storage, Platform, Keyboard])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map