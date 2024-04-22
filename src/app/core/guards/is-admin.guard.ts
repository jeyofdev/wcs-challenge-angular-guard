import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserEnum } from '../../enums/enums';
import { map } from 'rxjs';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(UserService);

  return service.getRole().pipe(
    map((role) => {
      if (role === UserEnum.ADMIN) {
        return true;
      } else {
        router.navigateByUrl('/');
        return false;
      }
    })
  );
};
