import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-merchant-dashboard',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
    ChartModule
  ],
  templateUrl: './merchant-dashboard.component.html',
  styleUrl: './merchant-dashboard.component.scss'
})
export class MerchantDashboardComponent {
  salesData: any;
  revenueData: any;
  transactions: any;
  chartOptions: any;

  ngOnInit() {
    this.initializeSalesData();
    this.initializeRevenueData();
    this.initializeTransactions();
    this.initializeChartOptions();
  }

  initializeSalesData() {
    this.salesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Sales',
          data: [3000, 5000, 4000, 7000, 8000, 12000],
          fill: false,
          borderColor: '#42A5F5',
        },
      ],
    };
  }

  initializeRevenueData() {
    this.revenueData = {
      labels: ['Product A', 'Product B', 'Product C'],
      datasets: [
        {
          data: [50, 25, 25],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }

  initializeTransactions() {
    this.transactions = [
      { date: '2024-12-01', customer: 'John Doe', amount: 120, status: 'completed' },
      { date: '2024-12-02', customer: 'Jane Smith', amount: 85, status: 'pending' },
      { date: '2024-12-03', customer: 'Michael Brown', amount: 250, status: 'failed' },
    ];
  }

  initializeChartOptions() {
    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value: number) => `$${value}`,
          },
        },
      },
    };
  }
}