import { TestBed } from '@angular/core/testing';
import { CrossBorderLetterComponent } from './cross-border-letter.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe(CrossBorderLetterComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAnimations()],
    });
  });

  it('renders', () => {
    cy.mount(CrossBorderLetterComponent);
    cy.contains('Cross Border Letter - Trip Details')
    
  });

});

