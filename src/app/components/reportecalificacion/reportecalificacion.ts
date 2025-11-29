import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';

import { CalificacionService } from '../../services/calificacionservice';
import { ReporteCalificacionPromedioDTO } from '../../models/ReporteCalificacionPromedioDTO';

@Component({
  selector: 'app-reportecalificacion',
  standalone: true,
  imports: [MatIconModule, BaseChartDirective],
  templateUrl: './reportecalificacion.html',
  styleUrl: './reportecalificacion.css',
  providers: [provideCharts(withDefaultRegisterables())],
})
export class Reportecalificacion implements OnInit {
  hasData = false;

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#1C1C1C',
          font: {
            family: 'Lexend Deca, Arial, sans-serif',
          },
        },
      },
      title: {
        display: true,
        text: 'Promedio de calificación por propiedad',
        color: '#105590',
        font: {
          size: 18,
          family: 'Lexend Deca, Arial, sans-serif',
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#1C1C1C',
          font: {
            family: 'Exo 2, Arial, sans-serif',
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 5, // calificaciones de 1 a 5
        ticks: {
          color: '#1C1C1C',
          font: {
            family: 'Exo 2, Arial, sans-serif',
          },
        },
      },
    },
  };

  barChartLegend = true;
  barChartType: 'bar' = 'bar';
  barChartLabels: string[] = [];
  barChartData: ChartDataset<'bar'>[] = [];

  constructor(private cS: CalificacionService) {}

  ngOnInit(): void {
    this.cS.getCalificacionPromedio().subscribe(
      (data: ReporteCalificacionPromedioDTO[]) => {
        if (data && data.length > 0) {
          this.hasData = true;

          // Etiquetas: Propiedad + id
          this.barChartLabels = data.map(
            (item) => `Propiedad ${item.idPropiedad}`
          );

          // Dataset: promedio de puntuación
          this.barChartData = [
            {
              data: data.map((item) => item.promedioPuntuacion),
              label: 'Promedio de puntuación',
              backgroundColor: '#105590',
              hoverBackgroundColor: '#0c416a',
              borderRadius: 8,
            },
          ];
        } else {
          this.hasData = false;
        }
      }
    );
  }
}
