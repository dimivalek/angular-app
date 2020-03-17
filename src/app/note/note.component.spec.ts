import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note.component';
import { NotehttpmethodsService } from './notehttpmethods.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NoteComponent],
      providers: [NotehttpmethodsService, HttpClientModule, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not receive null notes from the service', () => {
    let noteservice = fixture.debugElement.injector.get(NotehttpmethodsService);
    noteservice.receiveNotes().subscribe(data => component.fetchednotes = data);
    expect(component.fetchednotes).not.toBeNull;
  });

  it('should not receive empty notes from the service', () => {
    let noteservice = fixture.debugElement.injector.get(NotehttpmethodsService);
    noteservice.receiveNotes().subscribe(data => component.fetchednotes = data);
    expect(component.fetchednotes).not.toEqual([]);
  });

  /*it('should send note to the service', () => {
    let noteservice = fixture.debugElement.injector.get(NotehttpmethodsService);
    noteservice.saveNote(component.newnote, this.name, this.date)
      .subscribe((data) => console.log(data));
    expect(noteservice.saveNote).
  });*/

  it('should change the boolean value onclickDate', () => {
    //component.checkdate = false;
    component.onclickDate();
    expect(component.checkdate).toEqual(true);
  });

  it('should change the boolean value onclickName', () => {
    //component.checkname = false;
    component.onclickName();
    expect(component.checkname).toEqual(true);
  });

  it('should call onclickFetch when fetch button is clicked', async(() => {
    spyOn(component, 'onclickFetch');
    let button = fixture.debugElement.nativeElement.querySelector('#fetch');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onclickFetch).toHaveBeenCalled();
    });
  }));

  it('should call onclickSave when send button is clicked', async(() => {
    spyOn(component, 'onclickSave');
    let button = fixture.debugElement.nativeElement.querySelector('#save');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onclickSave).toHaveBeenCalled();
    });
  }));

  it('should call onclickDate when date button is clicked', async(() => {
    spyOn(component, 'onclickDate');
    let button = fixture.debugElement.nativeElement.querySelector('#date');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onclickDate).toHaveBeenCalled();
    });
  }));

  it('should call onclickName when name button is clicked', async(() => {
    spyOn(component, 'onclickName');
    let button = fixture.debugElement.nativeElement.querySelector('#name');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onclickName).toHaveBeenCalled();
    });
  }));

});
