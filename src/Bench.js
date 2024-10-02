import React, { useState } from 'react';
import Chart from "https://esm.sh/chart.js/auto";

function Bench() {
  const [results, setResults] = useState(null);

  const runBenchmark = () => {   
    const tests = [
      { name: "Array manipulation", fn: arrayManipulation, iterations: 100000 },
      { name: "Object creation", fn: objectCreation, iterations: 100000 },
      { name: "String operations", fn: stringOperations, iterations: 100000 },
      { name: "Math operations", fn: mathOperations, iterations: 100000 },
    ];

    const results = tests.map(test => {
      const start = performance.now();
      for (let i = 0; i < test.iterations; i++) {
        test.fn();
      }
      const end = performance.now();
      return { name: test.name, time: end - start };
    });

    setResults(results);
    createChart(results);
  };

  const createChart = (data) => {
    const ctx = document.getElementById('benchmarkChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          label: 'Execution Time (ms)',
          data: data.map(d => d.time),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Time (ms)'
            }
          }
        }
      }
    });
  };

  return (
    <div>
      <h1>JavaScript Benchmark</h1>
      <canvas id="benchmarkChart" width="400" height="200"></canvas>
      {results && (
        <div>
          <h2>Results:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name}: {result.time.toFixed(2)} ms</li>
            ))}
          </ul>
        </div>
      )}
      <button id="runBenchmarkButton" onClick={runBenchmark} >
        Run Benchmark
      </button>
    </div>
  );
}


export default Bench;

// Benchmark functions
function arrayManipulation() {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }
  arr.sort((a, b) => b - a);
  arr.filter(x => x % 2 === 0);
}

function objectCreation() {
  const obj = {};
  for (let i = 0; i < 1000; i++) {
    obj[`key${i}`] = i;
  }
  Object.keys(obj);
  Object.values(obj);
}

function stringOperations() {
  let str = "Hello, world!";
  for (let i = 0; i < 1000; i++) {
    str += i;
    str = str.slice(0, -1);
  }
}

function mathOperations() {
  for (let i = 0; i < 1000; i++) {
    Math.sqrt(i);
    Math.sin(i);
    Math.cos(i);
    Math.tan(i);
  }
}
