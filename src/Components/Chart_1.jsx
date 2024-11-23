// import React from "react";
// import { Scatter } from "react-chartjs-2";
// import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";
// import { FaSearch } from "react-icons/fa";
// import { FiMoreVertical } from "react-icons/fi"; // Import kebab menu icon

// // Register Chart.js components
// ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

// const Chart_1 = () => {
//   // Chart data
//   const data = {
//     datasets: [
//       {
//         label: "Min PIP",
//         data: Array.from({ length: 50 }, () => ({
//           x: Math.random() * (90 - 30) + 30,
//           y: Math.random() * 6000,
//         })),
//         backgroundColor: "#1E88E5",
//         borderColor: "#1E88E5",
//         borderWidth: 1,
//         pointStyle: "triangle",
//       },
//       {
//         label: "Max HZ",
//         data: Array.from({ length: 50 }, () => ({
//           x: Math.random() * (90 - 30) + 30,
//           y: Math.random() * 6000,
//         })),
//         backgroundColor: "#64B5F6",
//         borderColor: "#64B5F6",
//         borderWidth: 1,
//         pointStyle: "triangle",
//       },
//       {
//         label: "Wells",
//         data: Array.from({ length: 50 }, () => ({
//           x: Math.random() * (90 - 30) + 30,
//           y: Math.random() * 6000,
//         })),
//         backgroundColor: "#BBDEFB",
//         borderColor: "#BBDEFB",
//         borderWidth: 1,
//         pointStyle: "triangle",
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Frequency (Hz)",
//           color: "#fff",
//           font: { size: 14 },
//         },
//         grid: { color: "#2A2A2A" },
//         ticks: { color: "#fff" },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Pump Intake Pressure (psig)",
//           color: "#fff",
//           font: { size: 14 },
//         },
//         grid: { color: "#2A2A2A" },
//         ticks: { color: "#fff" },
//       },
//     },
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           color: "#fff",
//           usePointStyle: true,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//     backgroundColor: "#121212", // Set the background color of the chart
//   };

//   return (
//     <div style={{ backgroundColor: "#121212", padding: "1rem", borderRadius: "8px" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h3 style={{ color: "#fff", textAlign: "left", margin: 0 }}>Recommendations</h3>
//         <FiMoreVertical style={{ color: "#fff", cursor: "pointer" }} /> {/* Kebab menu icon */}
//       </div>
//       <hr style={{ borderColor: "#2A2A2A", borderWidth: "1px", margin: "10px 0" }} /> {/* Add margin here */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
//         <p style={{ color: "#9E9E9E", fontSize: "14px", margin: 0 }}>Optimization opportunities</p>
//         <div style={{ position: "relative", width: "300px" }}>
//           <input
//             type="text"
//             placeholder="Search"
//             style={{
//               width: "100%",
//               height: "30px", // Reduced height
//               padding: "10px 20px",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//               backgroundColor: "#212121",
//               color: "#fff",
//               fontSize: "14px",
//             }}
//           />
//           <FaSearch
//             style={{
//               position: "absolute",
//               top: "50%",
//               right: "10px",
//               transform: "translateY(-50%)",
//               color: "#9E9E9E",
//               fontSize: "16px",
//             }}
//           />
//         </div>
//       </div>
//       <div style={{ height: "400px", backgroundColor: "#121212" }}>
//         <Scatter data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Chart_1;



import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi"; // Import kebab menu icon

// Register Chart.js components
ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

const Chart_1 = () => {
  // Chart data
  const data = {
    datasets: [
      {
        label: "Min PIP",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#1E88E5",
        borderColor: "#1E88E5",
        borderWidth: 1,
        pointStyle: "triangle",
      },
      {
        label: "Max HZ",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#64B5F6",
        borderColor: "#64B5F6",
        borderWidth: 1,
        pointStyle: "triangle",
      },
      {
        label: "Wells",
        data: Array.from({ length: 50 }, () => ({
          x: Math.random() * (90 - 30) + 30,
          y: Math.random() * 6000,
        })),
        backgroundColor: "#BBDEFB",
        borderColor: "#BBDEFB",
        borderWidth: 1,
        pointStyle: "triangle",
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Frequency (Hz)",
          color: "#fff",
          font: { size: 14 },
        },
        grid: { color: "#2A2A2A" },
        ticks: { color: "#fff" },
      },
      y: {
        title: {
          display: true,
          text: "Pump Intake Pressure (psig)",
          color: "#fff",
          font: { size: 14 },
        },
        grid: { color: "#2A2A2A" },
        ticks: { color: "#fff" },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
    backgroundColor: "#111827", // Set the background color of the chart
  };

  return (
    <div style={{ backgroundColor: "#111827", padding: "1rem", borderRadius: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "#fff", textAlign: "left", margin: 0 }}>Recommendations</h3>
        <FiMoreVertical style={{ color: "#fff", cursor: "pointer" }} /> {/* Kebab menu icon */}
      </div>
      <hr style={{ borderColor: "#2A2A2A", borderWidth: "1px", margin: "10px 0" }} /> {/* Add margin here */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <p style={{ color: "#9E9E9E", fontSize: "14px", margin: 0 }}>Optimization opportunities</p>
        <div style={{ position: "relative", width: "300px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "100%",
              height: "30px", // Reduced height
              padding: "10px 20px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#212121",
              color: "#fff",
              fontSize: "14px",
            }}
          />
          <FaSearch
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "#9E9E9E",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
      <div style={{ height: "400px", backgroundColor: "#111827" }}>
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart_1;
