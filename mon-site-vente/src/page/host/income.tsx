import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Enregistrement des composants nécessaires
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Income() {
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai"], // index axe X
    datasets: [
      {
        label: "Ventes magasin",       // série 1
        data: [10, 15, 12, 20, 18],
        borderColor: "rgba(59, 130, 246, 0.7)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "Ventes en ligne",      // série 2
        data: [8, 12, 15, 18, 22],
        borderColor: "rgba(34, 197, 94, 0.7)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: {
        display: true,
        text: "Comparaison des ventes magasin et en ligne",
        font: { size: 18 },
        color: "#1e293b",
      },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
}
