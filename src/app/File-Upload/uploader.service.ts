import { MyStudentFormState } from './../form-advanced-04-with-unit-tests/sample.student.form.model';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { catchError, last, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(
    private _http: HttpClient,
    private _notification: LoggingService
  ) { }

  private apiEndPoint: string = '/upload/file';

  upload(file: File) {
    if (!file) { return; }
    const req = new HttpRequest('POST', this.apiEndPoint, file, {
      reportProgress: true
    });
    return this._http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => this.showProgress(message)),
      last(),
      catchError(this.handleError(file))
    )
  }
  private getEventMessage(event: any, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading File ${file.name} of size ${file.size}`;
      case HttpEventType.UploadProgress:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File ${file.name} is ${percentDone}% uploaded`;
      case HttpEventType.Response:
        return `File ${file.name} uploaded complete!`;
      default:
        return `File ${file.name} surprising upload event ${event.type}`;
    }
  }

  private handleError(file: File) {
    const userMessage: string = `${file.name} upload failed`;
    return (error: HttpErrorResponse) => {
      console.error(error);
      const message = (error.error instanceof Error) ?
        error.error.message : `server returned code ${error.status} with body ${error.error}`;
      this._notification.add(`${userMessage} ${message}`);
      return of(userMessage)
    };
  }

  private showProgress(message: string) {
    this._notification.add(message);
  }

  uploadMethod(file: FormData, selectedFile: any) {
    file.append('file', selectedFile);
    const req = new HttpRequest('POST', this.apiEndPoint, file, {
      reportProgress: true,
    });
    this._http.request(req).subscribe(
      (event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round(100 * event.loaded / event.total);
          console.log(`File is ${percentDone}% uploaded`);
        } else if (event instanceof HttpResponse) {
          console.log('File Upload Completed');
          console.log(event.body);
        }
      },
      err => console.error(err)
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(catchError(err => {
        this._notification.warning(err);
        return throwError(err);
      }));
  }

}
