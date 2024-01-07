import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProdcatService {

  endpointsauth = `${environment.BACK_END}/api/v1/prodcat/all/mongo`;

   token = this.authservice.getToken();
   endpointreg = 'http://localhost:8000/products/produs/';
   producturl="http://localhost:8443/api/product/"
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  //.set('Authorization:',`Bearer ${this.token}`);
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}` })
  };


  constructor(private http: HttpClient,private authservice: AuthService) { }



  getAllProducts(){
    return this.http.get(this.endpointsauth,this.httpOptions);

  }


  fetchProducts(){
    return this.http.get(this.producturl);
  }

  getAllprods(){
    const httpOptionsdj = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
  };
    return this.http.get(this.endpointreg,httpOptionsdj);
  }
}
