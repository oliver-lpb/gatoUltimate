import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUnoComponent } from './tab-uno.component';

describe('TabUnoComponent', () => {
  let component: TabUnoComponent;
  let fixture: ComponentFixture<TabUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
