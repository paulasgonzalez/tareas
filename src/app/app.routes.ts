import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"login",
        loadComponent: () => import('./login/login').then(login => login.Login),
    },
        {
        path:"registro",
        loadComponent: () => import('./registro/registro').then(registro => registro.Registro),
    },
        {
        path:"bienvenida",
        loadComponent: () => import('./bienvenida/bienvenida').then(b => b.Bienvenida),
    },
    {
        path:'',
        redirectTo: 'bienvenida',
        pathMatch: 'full'
    },
    {
        path:"error",
        loadComponent: () => import('./error/error').then(e => e.Error),
    },
        {
        path:"sobre-mi",
        loadComponent: () => import('./sobre-mi/sobre-mi').then(m => m.SobreMi),
    }
];
