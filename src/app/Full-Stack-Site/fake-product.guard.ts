import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const fakeProductGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const id = Number(route.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert("Invalid Id")
    return false;
  }
  return true;
};