import { Component, OnInit } from '@angular/core';
import { NamespaceService, Namespace } from 'src/app/namespace/namespace.service';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  public namespace: any;

  constructor(private namespaceservice: NamespaceService) { }

  getNamespaces(): void {
    this.namespaceservice.getNamespaces().subscribe(
      data => {
       this.namespace = data;
       console.log(this.namespace);
    });
    console.log('component:');
    console.log(this.namespaceservice.getNamespaces());
    return this.namespace;
  }

  ngOnInit() {
    this.getNamespaces();
  }

}
