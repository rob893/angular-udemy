import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
    
    @Output()
    public closeSidenav = new EventEmitter<void>();


    public constructor() { }

    public ngOnInit(): void {
    }

    public onClose(): void {
        this.closeSidenav.emit();
    }
}
