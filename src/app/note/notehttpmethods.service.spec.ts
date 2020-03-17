import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NotehttpmethodsService } from './notehttpmethods.service';
import { NoteFormat } from './noteformat';
import { HttpTestingController } from '@angular/common/http/testing';

describe('NotehttpmethodsService', () => {

  let service: NotehttpmethodsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NotehttpmethodsService,  HttpTestingController]
    });
    service = TestBed.inject(NotehttpmethodsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve notes from the API bia GET', () => {
    //TypeError: httpMock.expectOne is not a function
    let dummydate = new Date(Date.now());

    const dummyNotes: NoteFormat[] = [{
      note: 'hello',
      name: 'Dimitris',
      date: dummydate
    }, {
      note: 'hello again',
      name: 'Dimitris',
      date: dummydate
      }];

    service.receiveNotes().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyNotes);
    });

    const request = httpMock.expectOne(service._url + `/selectallnotes`, 'get call to api');
    expect(request.request.method).toBe('GET');
    request.flush(dummyNotes);

    afterEach(() => {
      httpMock.verify();
    });
  });
});
