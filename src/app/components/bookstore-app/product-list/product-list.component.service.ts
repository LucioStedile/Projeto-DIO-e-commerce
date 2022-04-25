import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()
export class BooksService
{
    private url = 'https://sheet.best/api/sheets/5354aae9-8ade-47fa-b5fc-4f7a6b4ea73d';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'appication/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url);
    }
}