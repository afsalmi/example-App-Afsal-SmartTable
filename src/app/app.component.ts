
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
    }
    ngOnInit() {

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        )
            .subscribe(() => {

                const rt = this.getChild(this.activatedRoute)

                rt.data.subscribe(data => {
                    console.log(data);
                    this.titleService.setTitle(data.title)
                })
            })

    }

    getChild(activatedRoute: ActivatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }

    }


}