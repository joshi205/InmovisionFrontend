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
import { Calificacioninsertar } from './components/calificacion/calificacioninsertar/calificacioninsertar';

import { Favorito } from './components/favorito/favorito';
import { Favoritoinsertar } from './components/favorito/favoritoinsertar/favoritoinsertar';
import { Lista_favoritos } from './components/lista_favoritos/lista_favoritos';
import { Lista_favoritosinsertar } from './components/lista_favoritos/lista_favoritosinsertar/lista_favoritosinsertar';

import { Pagoinsertar } from './components/pago/pagoinsertar/pagoinsertar';

import { Contratoinsertar } from './components/contrato/contratoinsertar/contratoinsertar';
import { SimulacionDePrecios } from './components/simulacion-de-precios/simulacion-de-precios';
import { Simulacioninsertar } from './components/simulacion-de-precios/simulacion-de-precios-insertar/simulacion-de-precios-insertar';
import { Contrato } from './components/contrato/contrato';
import { Pago } from './components/pago/pago';
import { Visitainsertar } from './components/visita/visitainsertar/visitainsertar';

export const routes: Routes = [
  {
    path: 'distritos',
    component: Distrito,
    children: [
      { path: 'nuevo', component: Distritoinsertar },
      { path: 'edits/:id', component: Distritoinsertar },
    ],
  },
  {
    path: 'usuarios',
    component: Usuario,
    children: [
      { path: 'nuevo', component: Usuarioinsertar },
      { path: 'edits/:id', component: Usuarioinsertar },
    ],
  },
  {
    path: 'roles',
    component: Rol,
    children: [
      { path: 'nuevo', component: Rolinsertar },
      { path: 'edits/:id', component: Rolinsertar },
    ],
  },
  {
    path: 'propiedades',
    component: Propiedad,
    children: [
      { path: 'nuevo', component: Propiedadinsertar },
      { path: 'edits/:id', component: Propiedadinsertar },
    ],
  },

  {
    path: 'mensajes',
    component: Mensaje,
    children: [
      { path: 'nuevo', component: Mensajeinsertar },
      { path: 'edits/:id', component: Mensajeinsertar },
    ],
  },

  {
    path: 'visitas',
    component: Visita,
    children: [
      { path: 'nuevo', component: Visitainsertar },
      { path: 'edits/:id', component: Visitainsertar },
    ],
  },

  {
    path: 'calificaciones',
    component: Calificacion,
    children: [
      { path: 'nuevo', component: Calificacioninsertar },
      { path: 'edits/:id', component: Calificacioninsertar },
    ],
  },

  {
    path: 'recomendaciones',
    component: Recomendacion,
    children: [
      { path: 'nuevo', component: Recomendacioninsertar },
      { path: 'edits/:id', component: Recomendacioninsertar },
    ],
  },

  {
    path: 'comparaciones',
    component: Comparacion,
    children: [
      { path: 'nuevo', component: Comparacioninsertar },
      { path: 'edits/:id', component: Comparacioninsertar },
    ],
  },
  {
    path: 'favoritos',
    component: Favorito,
    children: [
      { path: 'nuevo', component: Favoritoinsertar },
      { path: 'edit/:id', component: Favoritoinsertar },
    ],
  },

  {
    path: 'listas-favoritos',
    component: Lista_favoritos,
    children: [
      { path: 'nuevo', component: Lista_favoritosinsertar },
      { path: 'edit/:id', component: Lista_favoritosinsertar },
    ],
  },

  {
    path: 'pagos',
    component: Pago,
    children: [
      { path: 'nuevo', component: Pagoinsertar },
      { path: 'edits/:id', component: Pagoinsertar },
    ],
  },

  {
    path: 'contratos',
    component: Contrato,
    children: [
      { path: 'nuevo', component: Contratoinsertar },
      { path: 'edits/:id', component: Contratoinsertar },
    ],
  },

  {
    path: 'simulaciones-de-precios',
    component: SimulacionDePrecios,
    children: [
      { path: 'nuevo', component: Simulacioninsertar },
      { path: 'edits/:id', component: Simulacioninsertar },
    ],
  },
];
