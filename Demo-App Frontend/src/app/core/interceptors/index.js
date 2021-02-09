import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./http-Interceptor/interceptor.service";
import { HttpErrorService } from "./http-Interceptor/http-error.service";
import { TokenInterceptorService } from "./token-Interceptor/token-interceptor.service";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorService, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
];
