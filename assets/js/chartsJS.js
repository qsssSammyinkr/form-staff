// ====== Chart 1 - Polar Area ======
const ctx1 = document.getElementById('chart-1');

if (ctx1) {
  new Chart(ctx1, {
    type: 'polarArea',
    data: {
      labels: ['Staff', 'Members', 'Bots', 'Owner'], // nomes das seções
      datasets: [{
        label: 'Total',
        data: [2, 109, 17, 1], // seus valores
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#000', // cor do texto do legend
            font: {
              size: 14
            }
          }
        },
        datalabels: {
          display: true,
          color: '#000',
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex]; // mostra nome dentro do gráfico
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(0,0,0,0.1)'
          },
          ticks: {
            color: '#000'
          }
        }
      }
    },
    plugins: [ChartDataLabels] // necessário se quiser usar os labels dentro do gráfico
  });
}

// ====== Chart 2 - Bar Chart ======
const ctx2 = document.getElementById('chart-2');

if (ctx2) {
  new Chart(ctx2, {
    type: 'bar', // gráfico de barras
    data: {
      labels: ['Staff', 'Members', 'Bots', 'Owner'], // nomes das categorias
      datasets: [{
        label: 'total',
        data: [2, 109, 17, 1], // seus valores
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#000', // cor do texto da legenda
            font: {
              size: 14
            }
          }
        },
        datalabels: {
          display: true,
          color: '#000',
          anchor: 'end',
          align: 'top',
          formatter: function(value) {
            return value; // mostra o número de cada barra no topo
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#000', // nomes das categorias
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(0,0,0,0.05)' // linhas de grade discretas
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#000', // números do eixo Y
            font: {
              size: 14
            }
          },
          grid: {
            color: 'rgba(0,0,0,0.1)'
          }
        }
      }
    },
    plugins: [ChartDataLabels] // mostra os números das barras
  });
}
