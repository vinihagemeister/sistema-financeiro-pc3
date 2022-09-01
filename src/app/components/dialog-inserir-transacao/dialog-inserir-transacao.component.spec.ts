import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInserirTransacaoComponent } from './dialog-inserir-transacao.component';

describe('DialogInserirTransacaoComponent', () => {
  let component: DialogInserirTransacaoComponent;
  let fixture: ComponentFixture<DialogInserirTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInserirTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogInserirTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
