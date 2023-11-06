import { Injector } from "@angular/core"
import { AnalyticService } from "../services/analytic.service"

export function PageAnalytics(pageName:string){
    return function(
        constructor:Function
    ){
        let injector = Injector.create({
            providers:[{provide:AnalyticService,useClass:AnalyticService}],
        });
        const analyticsService = injector.get(AnalyticService);
        const originalNgOnInit = constructor.prototype.ngOnInit;
        constructor.prototype.ngOnInit = function(...args:[]){
            analyticsService.track(pageName);
            originalNgOnInit && originalNgOnInit.apply(this,args);
        };

    };
}