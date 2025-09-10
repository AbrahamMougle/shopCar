// src/data/rentalData.ts
 const rentalData = {
  2023: {
    simple: [
      { month: "Jan", count: 12 },
      { month: "Feb", count: 8 },
      { month: "Mar", count: 15 },
      { month: "Apr", count: 10 },
      { month: "May", count: 20 },
      { month: "Jun", count: 18 },
      { month: "Jul", count: 25 },
      { month: "Aug", count: 22 },
      { month: "Sep", count: 14 },
      { month: "Oct", count: 17 },
      { month: "Nov", count: 9 },
      { month: "Dec", count: 11 },
    ],
    camper: [
      { month: "Jan", count: 5 },
      { month: "Feb", count: 7 },
      { month: "Mar", count: 6 },
      { month: "Apr", count: 9 },
      { month: "May", count: 14 },
      { month: "Jun", count: 18 },
      { month: "Jul", count: 21 },
      { month: "Aug", count: 19 },
      { month: "Sep", count: 12 },
      { month: "Oct", count: 15 },
      { month: "Nov", count: 8 },
      { month: "Dec", count: 10 },
    ],
    luxury: [
      { month: "Jan", count: 2 },
      { month: "Feb", count: 3 },
      { month: "Mar", count: 4 },
      { month: "Apr", count: 5 },
      { month: "May", count: 7 },
      { month: "Jun", count: 10 },
      { month: "Jul", count: 12 },
      { month: "Aug", count: 14 },
      { month: "Sep", count: 8 },
      { month: "Oct", count: 6 },
      { month: "Nov", count: 4 },
      { month: "Dec", count: 5 },
    ],
  },
    2024: {
    simple: [
      { month: "Jan", count: 60 },
      { month: "Feb", count: 8 },
      { month: "Mar", count: 15 },
      { month: "Apr", count: 10 },
      { month: "May", count: 20 },
      { month: "Jun", count: 18 },
      { month: "Jul", count: 2 },
      { month: "Aug", count: 30 },
      { month: "Sep", count: 14 },
      { month: "Oct", count: 17 },
      { month: "Nov", count: 9 },
      { month: "Dec", count: 11 },
    ],
    camper: [
      { month: "Jan", count: 5 },
      { month: "Feb", count: 7 },
      { month: "Mar", count: 6 },
      { month: "Apr", count: 12 },
      { month: "May", count: 7 },
      { month: "Jun", count: 18 },
      { month: "Jul", count: 45 },
      { month: "Aug", count: 19 },
      { month: "Sep", count: 12 },
      { month: "Oct", count: 15 },
      { month: "Nov", count: 8 },
      { month: "Dec", count: 10 },
    ],
    luxury: [
      { month: "Jan", count: 2 },
      { month: "Feb", count: 3 },
      { month: "Mar", count: 4 },
      { month: "Apr", count: 5 },
      { month: "May", count: 70 },
      { month: "Jun", count: 10 },
      { month: "Jul", count: 23 },
      { month: "Aug", count: 14 },
      { month: "Sep", count: 8 },
      { month: "Oct", count: 6 },
      { month: "Nov", count: 12 },
      { month: "Dec", count: 5 },
    ],
  }
  
};


import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,

  
} from "chart.js";
import type { ChartOptions,
  } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

export default function VanRentalCharts() {
  const [year, setYear] = useState<keyof typeof rentalData>(2023);

  const months = rentalData[year].simple.map((item) => item.month);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Simple Vans",
        data: rentalData[year].simple.map((item) => item.count),
        borderColor: "oklch(0.55 0.15 250)",
        backgroundColor: "oklch(0.55 0.15 250 / 0.3)", // ajout transparence pour le fill
        fill: true,
        tension: 0.3,
      },
      {
        label: "Camper Vans",
        data: rentalData[year].camper.map((item) => item.count),
        borderColor: "oklch(0.40 0.15 250)",
        backgroundColor: "oklch(0.40 0.15 250 / 0.3)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Luxury Vans",
        data: rentalData[year].luxury.map((item) => item.count),
        borderColor: "oklch(0.25 0.08 250)",
        backgroundColor: "oklch(0.25 0.08 250 / 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Options responsives pour Chart.js
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false, // permet à la hauteur de s'adapter
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 14, weight: "bold" } ,
        },
      },
      title: {
        display: true,
        text: `Évolution des locations de vans (${year})`,
        font: { size: 18, weight: "bold" },
        color: "#111",
      },
      tooltip: { mode: "index" as const, intersect: false },
    },
    interaction: { mode: "nearest" as const, axis: "x" as const, intersect: false },
    scales: {
      x: {
        title: {
          display: true,
          text: "Mois",
          font: { size: 14, weight: "bold" } 
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Nombre de vans loués",
          font: { size: 14, weight: "bold" }
        },
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Sélecteur d'année */}
      <div className="flex justify-center mb-6">
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value) as keyof typeof rentalData)}
          className="border px-4 py-2 rounded shadow"
        >
          {Object.keys(rentalData).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Container responsive */}
      <div className="bg-white border rounded-xl shadow-lg p-4">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
