import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token= localStorage.getItem('authToken');
  const baseURL = 'http://localhost:8000/';
  if(token){
    req=req.clone({
      url: baseURL + req.url,
      setHeaders: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }
  else
  {
    req=req.clone({
      url: baseURL + req.url
      
    });
  }
  return next(req);
};
