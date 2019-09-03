import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMissingnoComponent } from './pokemon-missingno.component';

describe('PokemonMissingnoComponent', () => {
  let component: PokemonMissingnoComponent;
  let fixture: ComponentFixture<PokemonMissingnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMissingnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMissingnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
