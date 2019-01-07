import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class NamespaceService {

  private names: Observable<Object>; // 用来接收http服务返回的流
  namespaces: Array<any> = [];

  constructor(private http: HttpClient) { }
  // 获取列表数据
  getNamespaces(): Observable<Namespace[]> {
    return this.http.get<Namespace[]>('/api/namespace');
    }
  // 获取单个表单数据
 getNamespace(name: string): Observable<Namespace[]> {
    return this.http.get<Namespace[]>('/api/namespace' + name);
  }

}

export class Namespace {
  constructor(
    public id: number ,
    public name: string
    ) {
  }
}
