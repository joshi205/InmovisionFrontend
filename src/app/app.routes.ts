import { Routes } from '@angular/router';

import { Distrito } from './components/distrito/distrito';
import { Distritoinsertar } from './components/distrito/distritoinsertar/distritoinsertar';

import { Usuario } from './components/usuario/usuario';
import { Usuarioinsertar } from './components/usuario/usuarioinsertar/usuarioinsertar';

import { Rol } from './components/rol/rol';
import { Rolinsertar } from './components/rol/rolinsertar/rolinsertar';

import { Propiedad } from './components/propiedad/propiedad';
import { Propiedadinsertar } from './components/propiedad/propiedadinsertar/propiedadinsertar';
import { Recomendacioninsertar } from './components/recomendacion/recomendacioninsertar/recomendacioninsertar';
import { Recomendacion } from './components/recomendacion/recomendacion';
import { Comparacion } from './components/comparacion/comparacion';
import { Comparacioninsertar } from './components/comparacion/comparacioninsertar/comparacioninsertar';

import { Mensaje } from './components/mensaje/mensaje';
import { Mensajeinsertar } from './components/mensaje/mensajeinsertar/mensajeinsertar';

import { Visita } from './components/visita/visita';

import { Calificacion } from './components/calificacion/calificacion';
import { VisitaInsert } from './components/visita/visitainsertar/visitainsertar';
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
            {path: 'nuevo', component: VisitaInsert },
            {path: 'edits/:id', component: VisitaInsert }
        ]
    },

    {path: 'calificaciones',
    component: Calificacion,
        children: [
            {path: 'nuevo', component: Calificacioninsertar},
            {path: 'edits/:id', component: Calificacioninsertar }
        ]
    },
    
    {path:'recomendaciones',component:Recomendacion,
          children:[
            {path:'nuevo',component:Recomendacioninsertar},
            {path:'edits/:id',component:Recomendacioninsertar}

        ]  
    },
    
    {path:'comparaciones',component:Comparacion,
          children:[
            {path:'nuevo',component:Comparacioninsertar},
            {path:'edits/:id',component:Comparacioninsertar}
            
        ]  

    },
];
