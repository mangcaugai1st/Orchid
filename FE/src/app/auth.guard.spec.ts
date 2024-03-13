import { TestBed } from '@angular/core/testing';
import {CanActivate, CanActivateFn} from '@angular/router';

import { authGuard } from './auth.guard';
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
