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

export const routes: Routes = [] = [

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
