import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrossBorderLetterComponent } from './cross-border-letter.component';

describe('CrossBorderLetterComponent', () => {
  let component: CrossBorderLetterComponent;
  let fixture: ComponentFixture<CrossBorderLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossBorderLetterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrossBorderLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
