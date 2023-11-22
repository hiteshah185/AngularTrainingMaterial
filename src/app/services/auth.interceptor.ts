import { HttpInterceptorFn } from "@angular/common/http";

// Read:https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints#authentication

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const token: string = localStorage.getItem('token') ?? '';
    request = request.clone({
        setHeaders: {
            Authorization: token ? `Token ${token}` : '',
        },
    });
    return next(request);
}