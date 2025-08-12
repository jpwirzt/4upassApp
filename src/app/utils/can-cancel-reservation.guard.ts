import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivateFn, Router, RouterStateSnapshot } from '@angular/router';

export interface ICanComponentCancelReservation {
  canDeactivate: () => Promise<boolean>;
}

const allowedRoutes = ['/resumen-compra'];

export const canCancelReservationGuard: CanDeactivateFn<ICanComponentCancelReservation> = (
  component: ICanComponentCancelReservation,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot 
) => {
  const location = inject(Location);
  const router = inject(Router);
  const trigger = router.getCurrentNavigation()?.trigger;
  const nextUrl = nextState?.url.split('?')[0];

  if (allowedRoutes.includes(nextUrl)) return true;

  // Si el usuario está en resumen de compra, puede volver hacia atrás
  if (currentState.url.split('?')[0] === '/resumen-compra' && trigger === 'popstate') return true;

  return component?.canDeactivate().then((result: boolean) => {
    if (!result && trigger === 'popstate') {
      history.pushState(null, null, location.path());
    }
    return result;
  });
};
