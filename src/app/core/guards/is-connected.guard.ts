import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';
import { UserEnum } from '../../enums/enums';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(UserService);

  return service.getRole().pipe(
    map((role) => {
      if (role === UserEnum.ADMIN || role === UserEnum.USER) {
        return true;
      } else {
        router.navigateByUrl('/');
        return false;
      }
    })
  );
};
