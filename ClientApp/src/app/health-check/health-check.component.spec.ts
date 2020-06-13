/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HealthCheckComponent } from './health-check.component';

let component: HealthCheckComponent;
let fixture: ComponentFixture<HealthCheckComponent>;

describe('health-check component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HealthCheckComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HealthCheckComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});