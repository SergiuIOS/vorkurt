import { Component, OnInit }                     from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter }                                from 'rxjs/operators';

@Component( {
  selector: 'elix-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.sass' ],
} )
export class ItemComponent implements OnInit {
  crumbFormat : { label : string; url : string };
  breadcrumbs : Array<{ label : string; url : string }>;
  
  constructor (private router : Router, private route : ActivatedRoute) {
    this.router.events
        .pipe( filter( (event) => event instanceof NavigationEnd ) )
        .subscribe( (event) => {
          this.breadcrumbs = [];
          let currentRoute = this.route.root,
              url = '';
          do {
            const childrenRoutes = currentRoute.children;
            currentRoute = {} as ActivatedRoute;
            childrenRoutes.forEach( (route) => {
              if ( route.outlet === 'primary' ) {
                const routeSnapshot = route.snapshot;
                
                url +=
                    '/' +
                    routeSnapshot.url.map( (segment) => segment.path ).join( '/' );
                this.breadcrumbs.push( {
                  label: route.snapshot.data.breadCrumb,
                  url: url,
                } );
                console.log( url );
                
                currentRoute = route;
              }
            } );
          } while ( currentRoute );
        } );
  }
  
  goToPage (action : string) {
  }
  
  ngOnInit () {
  }
}
