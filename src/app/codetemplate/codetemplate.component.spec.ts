import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetemplateComponent } from './codetemplate.component';

describe('CodetemplateComponent', () => {
  let component: CodetemplateComponent;
  let fixture: ComponentFixture<CodetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodetemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
