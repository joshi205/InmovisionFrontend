import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private snack: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Solo mostrar mensaje si es error 403 (permiso denegado)
        if (error.status === 403) {
          this.snack.open("⛔ No tienes permiso para realizar esta acción", "Cerrar", { duration: 3000 });
        }
        return throwError(() => error);
      })
    );
  }
}