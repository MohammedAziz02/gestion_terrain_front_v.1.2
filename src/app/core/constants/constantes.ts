import { HttpHeaders } from "@angular/common/http";

export const URL_API = 'http://localhost:8080/';

export const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export const httpOptionsmulti_form = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};