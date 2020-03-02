import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output()
    public sidenavToggle = new EventEmitter<void>();


    constructor() { }

    ngOnInit(): void {
    }

    public onToggleSidenav(): void {
        this.sidenavToggle.emit();
    }
}
