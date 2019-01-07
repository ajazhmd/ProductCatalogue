import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdCatViewComponent } from './prod-cat-view.component';

describe('ProdCatViewComponent', () => {
  let component: ProdCatViewComponent;
  let fixture: ComponentFixture<ProdCatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdCatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdCatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
