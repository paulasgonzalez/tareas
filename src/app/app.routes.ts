import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'bienvenida',
        pathMatch: 'full'
    },
    {
        path:"login",
        loadComponent: () => import('./pages/login/login').then(login => login.Login),
    },
        {
        path:"registro",
        loadComponent: () => import('./pages/registro/registro').then(registro => registro.Registro),
    },
        {
        path:"bienvenida",
        loadComponent: () => import('./pages/bienvenida/bienvenida').then(b => b.Bienvenida),
    },
    {
        path:"error",
        loadComponent: () => import('./pages/error/error').then(e => e.Error),
    },
        {
        path:"sobre-mi",
        loadComponent: () => import('./pages/sobre-mi/sobre-mi').then(m => m.SobreMi),
    },
    {
        path:'**', //ruta comodin siempre al final
        loadComponent: () => import('./pages/error/error').then(e => e.Error)
    }
];
