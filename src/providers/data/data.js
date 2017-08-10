var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
var DataProvider = (function () {
    function DataProvider(storage) {
        this.storage = storage;
    }
    DataProvider.prototype.getData = function () {
        return this.storage.get('checklists');
    };
    DataProvider.prototype.save = function (data) {
        var saveData = [];
        //Remove observables
        data.forEach(function (checklist) {
            saveData.push({
                title: checklist.title,
                items: checklist.items
            });
        });
        var newData = JSON.stringify(saveData);
        this.storage.set('checklists', newData);
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Storage])
], DataProvider);
export { DataProvider };
//# sourceMappingURL=data.js.map