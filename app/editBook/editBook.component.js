"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var EditBookComponent = (function () {
    function EditBookComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/baza-it255/prikaz.php')
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        }, function (err) {
            _this.router.navigate(['./']);
        });
    }
    EditBookComponent.prototype.openKnjige = function (id) {
        console.log("asd" + id);
        this.router.navigateByUrl('/openKnjige/' + id);
    };
    EditBookComponent.prototype.changeBook = function (id) {
        this.router.navigateByUrl('/changeBook/' + id);
    };
    EditBookComponent.prototype.deleteBook = function (event, id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('token', localStorage.getItem('token'));
        this.http.get('http://localhost/baza-it255/deleteBook.php?id=' + id)
            .subscribe(function (data) {
            console.log(data);
            event.srcElement.parentElement.parentElement.remove();
        });
    };
    EditBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editBook',
            templateUrl: './editBook.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], EditBookComponent);
    return EditBookComponent;
}());
exports.EditBookComponent = EditBookComponent;
//# sourceMappingURL=editBook.component.js.map