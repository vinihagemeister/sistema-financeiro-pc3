import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogConfirmacaoExclusao } from './dialog-confirmacao-exclusao.component';

describe('DialogConfirmacaoExclusao', () => {
  let component: DialogConfirmacaoExclusao;
  let fixture: ComponentFixture<DialogConfirmacaoExclusao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmacaoExclusao ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmacaoExclusao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
