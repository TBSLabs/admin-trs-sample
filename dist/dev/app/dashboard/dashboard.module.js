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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var home_module_1 = require('./home/home.module');
var chart_module_1 = require('./charts/chart.module');
var blankPage_module_1 = require('./blank-page/blankPage.module');
var table_module_1 = require('./tables/table.module');
var forms_module_1 = require('./forms/forms.module');
var grid_module_1 = require('./grid/grid.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
var bsElement_module_1 = require('./bs-element/bsElement.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var index_2 = require('../shared/index');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.ModalModule,
                home_module_1.HomeModule,
                chart_module_1.ChartModule,
                table_module_1.TableModule,
                forms_module_1.FormModule,
                grid_module_1.GridModule,
                bsComponent_module_1.BSComponentModule,
                bsElement_module_1.BSElementModule,
                blankPage_module_1.BlankPageModule
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2hFLDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHNCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBc0JqRDtJQUFBO0lBQStCLENBQUM7SUFuQmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNmLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNYLDJCQUFXO2dCQUNkLHdCQUFVO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHlCQUFVO2dCQUNWLHdCQUFVO2dCQUNiLHNDQUFpQjtnQkFDZCxrQ0FBZTtnQkFDZixrQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLHVCQUFlLEVBQUUsd0JBQWdCLENBQUM7WUFDckUsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztTQUNuRSxDQUFDOzt1QkFBQTtJQUU2QixzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsdUJBQWUsa0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQmxhbmtQYWdlTW9kdWxlIH0gZnJvbSAnLi9ibGFuay1wYWdlL2JsYW5rUGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlcy90YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICcuL2dyaWQvZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgQlNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWNvbXBvbmVudC9ic0NvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQlNFbGVtZW50TW9kdWxlIH0gZnJvbSAnLi9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5pbXBvcnQge1RvcE5hdkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgIFx0Um91dGVyTW9kdWxlLFxuICAgIFx0RHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgIFx0SG9tZU1vZHVsZSxcbiAgICAgICAgQ2hhcnRNb2R1bGUsXG4gICAgICAgIFRhYmxlTW9kdWxlLFxuICAgICAgICBGb3JtTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgIFx0QlNDb21wb25lbnRNb2R1bGUsXG4gICAgICAgIEJTRWxlbWVudE1vZHVsZSxcbiAgICAgICAgQmxhbmtQYWdlTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
