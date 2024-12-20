import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (error.response && error.response.status) {
                    throw new HttpException(error.response.statusText, error.response.status);
                }

                throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
            }),
        );
    }
}
