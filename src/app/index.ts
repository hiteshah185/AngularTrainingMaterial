import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CachingInterceptor } from "./services/Cache/caching-interceptors";

export const httpInterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
]