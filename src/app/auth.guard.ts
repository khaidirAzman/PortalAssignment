import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const session: any = authService.getSession();
  const router = inject(Router);
  const homeURL = '';
  const errorPage = 'error';
  const errorTree: UrlTree = router.parseUrl(errorPage);
  if(!!session) {
    if (session.role === 'admin' || route.routeConfig?.path === 'dashboard'){
      return true;
    }
    else {
      return errorTree;
    }
  }
  return errorTree;
};
