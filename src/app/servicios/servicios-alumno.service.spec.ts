import { TestBed } from '@angular/core/testing';

import { ServiciosAlumnoService } from './servicios-alumno.service';

describe('ServiciosAlumnoService', () => {
  let service: ServiciosAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
