export class BaseResult<T> {
    message: string;
    sucess: boolean;
    data?: T;

}