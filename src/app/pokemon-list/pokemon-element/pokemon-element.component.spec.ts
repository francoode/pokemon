import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonElementComponent } from './pokemon-element.component';

describe('PokemonElementComponent', () => {
  let component: PokemonElementComponent;
  let fixture: ComponentFixture<PokemonElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
