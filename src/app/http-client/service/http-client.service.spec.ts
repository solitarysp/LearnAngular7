import {TestBed} from '@angular/core/testing';

import {HttpClientService} from './http-client.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Data} from '@angular/router';

describe('HttpClientService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpClientService: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    httpClientService = TestBed.get(HttpClientService);
  });
// Expecting and answering request
  it('can test HttpClient.get', () => {
    const testData: Data = [
      'le',
      'thanh',
      'van'
    ];

    httpClientService.search().subscribe((value: Data) => {
      return expect(value).toEqual(testData);

    });
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/assets/jsonFake/jsonSearhc.json');
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // check header not null với name Authorization
    expect(req.request.headers.get('Authorization')).not.toBeNull();


    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('Handling more than one request', () => {
    const testData: Data = [
      'le',
      'thanh',
      'van'
    ];

    httpClientService.search().subscribe();
    httpClientService.search().subscribe();
    httpClientService.search().subscribe((value: Data) => {
      return expect(value).toEqual(testData);

    });
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.match('/assets/jsonFake/jsonSearhc.json');
    // Assert that the request is a GET.
    expect(req[1].request.method).toEqual('GET');
    // check header not null với name Authorization
    expect(req[1].request.headers.get('Authorization')).not.toBeNull();
    expect(req.length).toEqual(3, 'calls to search()');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req[0].flush(testData);
    req[1].flush(testData);
    req[2].flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  // check error

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<Data[]>('/ssss').subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('/ssss');

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
    httpTestingController.verify();

  });

  it('can test for network error', () => {
    const emsg = 'simulated network error';

    httpClient.get<Data[]>('/ssss').subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne('/ssss');

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
    httpTestingController.verify();

  });

});
