
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
 
  constructor() {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const apiReq = req.clone({ url: "http://localhost:8080/" + req.url}) 
    // send cloned request with header to the next handler.
    return next.handle(apiReq);
  }
}