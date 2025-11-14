import { Routes } from '@angular/router';

import { Distrito } from './components/distrito/distrito';
import { Distritoinsertar } from './components/distrito/distritoinsertar/distritoinsertar';

import { Usuario } from './components/usuario/usuario';
import { Usuarioinsertar } from './components/usuario/usuarioinsertar/usuarioinsertar';

import { Rol } from './components/rol/rol';
import { Rolinsertar } from './components/rol/rolinsertar/rolinsertar';

import { Propiedad } from './components/propiedad/propiedad';
import { Propiedadinsertar } from './components/propiedad/propiedadinsertar/propiedadinsertar';

import { Mensaje } from './components/mensaje/mensaje';
import { Mensajeinsertar } from './components/mensaje/mensajeinsertar/mensajeinsertar';

import { Visita } from './components/visita/visita';
import { Visitainsertar } from './components/visita/visitainsertar/visitainsertar';

import { Calificacion } from './components/calificacion/calificacion';
import { Calificacioninsertar } from './components/calificacion/calificacioninsertar/calificacioninsertar';


export const routes: Routes = [

    {path:'distritos',component:Distrito,
          children:[
            {path:'nuevo',component:Distritoinsertar},
            {path:'edits/:id',component:Distritoinsertar}

        ]  
    },

    {path:'usuarios',component:Usuario,
          children:[
            {path:'nuevo',component:Usuarioinsertar},
            {path:'edits/:id',component:Usuarioinsertar}

        ]  
    },

    {path:'roles',component:Rol,
          children:[
            {path:'nuevo',component:Rolinsertar},
            {path:'edits/:id',component:Rolinsertar}

        ]  
    },

    {path:'propiedades',component:Propiedad,
        children:[
            {path:'nuevo',component:Propiedadinsertar},
            {path:'edits/:id',component:Propiedadinsertar}

        ]  
    },

    {path: 'mensajes',
    component: Mensaje,
        children: [
            {path: 'nuevo', component: Mensajeinsertar },
            {path: 'edits/:id', component: Mensajeinsertar }
        ]
    },

    {path: 'visitas',
    component: Visita,
        children: [
            {path: 'nuevo', component: Visitainsertar },
            {path: 'edits/:id', component: Visitainsertar }
        ]
    },

    {path: 'calificacion',
    component: Calificacion,
        children: [
            {path: 'nuevo', component: Calificacioninsertar},
            {path: 'edits/:id', component: Calificacioninsertar }
        ]
    },
];
