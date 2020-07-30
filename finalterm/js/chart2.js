var ctx =　document.getElementById('chacha').getContext('2d');
var chacha = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['The UK', 'Germany', 'Sweden', 'Australia', 'The US', 'Japan'],
        datasets: [
            {
                type: 'bar',
                label: 'ベジタリアン人口',
                data: [16, 11, 10, 9, 13.7, 9.2],
                backgroundColor:[
                   'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 20,
                    suggestedMin: 0,
                    stepSize: 5,
                }
            }]
        }
    }
});
