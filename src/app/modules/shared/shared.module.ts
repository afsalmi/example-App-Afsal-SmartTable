import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoggedInGuard } from 'src/app/structure/services/logged-in.guard';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        Ng2SmartTableModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        Ng2SmartTableModule
    ],
    providers: [LoggedInGuard]
})
export class SharedModule { }
