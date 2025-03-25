// export default function Stories() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">Student Stories</h1>
//       <div className="prose max-w-none">
//         <p>Student success stories will go here...</p>
//       </div>
//     </div>
//   );
// }
// export default function Stories() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Student Stories Header */}
//       <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//       <p className="text-center mb-6 text-gray-600">
//         Hover over the map to find out how many students and/or alumni are in or from a particular country.
//       </p>
      
//       {/* Heat Map Section - API Integration Placeholder */}
//       <div className="p-4 h-[500px] flex items-center justify-center">
//         <p className="text-gray-500">Heatmap will be placed here</p>
//       </div>
      
//       {/* Facts About Abroad Universities */}
//       <div className="mt-4 pt-4">
//         <h2 className="text-lg font-semibold text-center">Facts About Studying Abroad</h2>
//         <ul className="list-disc pl-5 mt-2">
//           <li>Many top universities offer scholarships for international students.</li>
//           <li>Countries like the USA, UK, and Canada have a high intake of foreign students.</li>
//           <li>Studying abroad can improve career opportunities globally.</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const API_URL = "https://heatmap-api-pakj.onrender.com";

// export default function Stories() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.error("Error fetching heatmap data:", err));
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12 border-2 border-black bg-white text-black">
//         <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//         <p className="text-center mb-6 text-gray-600">
//           Hover over the map to find out how many students and/or alumni are in or from a particular country.
//         </p>

//         <div className="p-4 h-[500px] flex items-center justify-center border-2 border-black bg-white">
//           <ComposableMap>
//             <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json">
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryData = data.find((d) => d.country === geo.properties.name);
//                   const fillColor = countryData ? `rgba(255, 0, 0, ${Math.min(0.8, countryData.count / 100)})` : "#DDD";
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={fillColor}
//                       stroke="#000"
//                       onMouseEnter={() => {
//                         console.log(geo.properties.name, countryData?.count || 0);
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         <div className="mt-4 pt-4 text-center border-2 border-black bg-white text-black">
//           <h2 className="text-lg font-semibold">Facts </h2>
//           <div className="mt-2 space-y-2">
//             <p>🎓 Many top universities offer scholarships for international students.</p>
//             <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
//             <p>🚀 Studying abroad can improve career opportunities globally.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const API_URL = "https://heatmap-api-pakj.onrender.com";

// export default function Stories() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.error("Error fetching heatmap data:", err));
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12 bg-white text-black">
//         <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//         <p className="text-center mb-6 text-gray-600">
//           Hover over the map to find out how many students and/or alumni are in or from a particular country.
//         </p>

//         <div className="p-4 h-[500px] flex items-center justify-center bg-white">
//           <ComposableMap>
//             <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json">
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryData = data.find((d) => d.country === geo.properties.name);
//                   const fillColor = countryData ? `rgba(255, 0, 0, ${Math.min(0.8, countryData.count / 100)})` : "#DDD";
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={fillColor}
//                       stroke="#000"
//                       onMouseEnter={() => {
//                         console.log(geo.properties.name, countryData?.count || 0);
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         <div className="mt-4 pt-4 text-center bg-white text-black">
//           <h2 className="text-lg font-semibold">Facts </h2>
//           <div className="mt-2 space-y-2">
//             <p>🎓 Many top universities offer scholarships for international students.</p>
//             <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
//             <p>🚀 Studying abroad can improve career opportunities globally.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const API_URL = "https://heatmap-api-pakj.onrender.com";

// const countryAliases = {
//   "United States of America": "United States",
//   "United Kingdom": "UK",
//   "Russia": "Russian Federation",
// };

// const getCountryName = (name) => countryAliases[name] || name;

// export default function Stories() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const API_URL = "/api"; // Using Vite proxy
  
//     fetch(API_URL)
//       .then(async (res) => {
//         console.log("Status Code:", res.status); // Log status code
  
//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           const text = await res.text();
//           throw new Error(`Unexpected response (not JSON): ${text}`);
//         }
  
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched Data:", data); // Log data response
//         setData(data);
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, []);
  
  

//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12 bg-white text-black">
//         <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//         <p className="text-center mb-6 text-gray-600">
//           Hover over the map to find out how many students and/or alumni are in or from a particular country.
//         </p>

//         <div className="p-4 h-[500px] flex items-center justify-center bg-white">
//           <ComposableMap>
//             <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json">
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryName = getCountryName(geo.properties.name);
//                   const countryData = data.find((d) => d.country === countryName);
//                   const fillColor = countryData ? `rgba(255, 0, 0, ${Math.min(0.8, countryData.count / 100)})` : "#DDD";

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={fillColor}
//                       stroke="#000"
//                       onMouseEnter={() => console.log(countryName, countryData?.count || 0)}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>


//         <div className="mt-4 pt-4 text-center bg-white text-black">
//           <h2 className="text-lg font-semibold">Facts </h2>
//           <div className="mt-2 space-y-2">
//             <p>🎓 Many top universities offer scholarships for international students.</p>
//             <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
//             <p>🚀 Studying abroad can improve career opportunities globally.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const API_URL = "https://heatmap-api-pakj.onrender.com";

// const countryAliases = {
//   "United States of America": "United States",
//   "United Kingdom": "UK",
//   "Russia": "Russian Federation",
// };

// const getCountryName = (name) => countryAliases[name] || name;

// export default function Stories() {
//   const [data, setData] = useState([]);
//   const [heatmapUrl, setHeatmapUrl] = useState(null);

//   useEffect(() => {
//     const API_URL = "/api"; // Using Vite proxy

//     fetch(API_URL)
//       .then(async (res) => {
//         console.log("Status Code:", res.status); // Log status code

//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           const text = await res.text();
//           console.error("Unexpected Response (Not JSON):", text);

//           // Extract heatmap URL from HTML response
//           const match = text.match(/href="(\/heatmap)"/);
//           if (match) {
//             const extractedUrl = `https://heatmap-api-pakj.onrender.com${match[1]}`;
//             console.log("Extracted Heatmap URL:", extractedUrl);
//             setHeatmapUrl(extractedUrl);
//           }

//           throw new Error("API returned an unexpected format.");
//         }

//         return res.json();
//       })
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         setData(data);
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12 bg-white text-black">
//         <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//         <p className="text-center mb-6 text-gray-600">
//           Hover over the map to find out how many students and/or alumni are in or from a particular country.
//         </p>

//         {/* World Map */}
//         <div className="p-4 h-[500px] flex items-center justify-center bg-white">
//           <ComposableMap>
//             <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json">
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryName = getCountryName(geo.properties.name);
//                   const countryData = data.find((d) => d.country === countryName);
//                   const fillColor = countryData ? `rgba(255, 0, 0, ${Math.min(0.8, countryData.count / 100)})` : "#DDD";

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={fillColor}
//                       stroke="#000"
//                       onMouseEnter={() => console.log(countryName, countryData?.count || 0)}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         {/* Embedded Heatmap */}
//         <div className="mt-8">
//           <h2 className="text-xl font-bold text-center">Interactive Heatmap</h2>
//           {heatmapUrl ? (
//             <iframe
//               src={heatmapUrl}
//               width="100%"
//               height="600px"
//               style={{ border: "none", marginTop: "16px" }}
//               title="Heatmap"
//             ></iframe>
//           ) : (
//             <p className="text-center text-gray-500">Loading heatmap...</p>
//           )}
//         </div>

//         {/* Facts Section */}
//         <div className="mt-4 pt-4 text-center bg-white text-black">
//           <h2 className="text-lg font-semibold">Facts</h2>
//           <div className="mt-2 space-y-2">
//             <p>🎓 Many top universities offer scholarships for international students.</p>
//             <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
//             <p>🚀 Studying abroad can improve career opportunities globally.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const API_URL = "https://heatmap-api-pakj.onrender.com";

// const countryAliases = {
//   "United States of America": "United States",
//   "United Kingdom": "UK",
//   "Russia": "Russian Federation",
// };

// const getCountryName = (name) => countryAliases[name] || name;

// export default function Stories() {
//   const [data, setData] = useState([]);
//   const [heatmapUrl, setHeatmapUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api"); // Using Vite proxy
//         console.log("Status Code:", res.status);

//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//           const text = await res.text();
//           console.error("Unexpected Response (Not JSON):", text);

//           // Extract heatmap URL from HTML response
//           const match = text.match(/href="(\/heatmap)"/);
//           if (match) {
//             const extractedUrl = `${API_URL}${match[1]}`;
//             console.log("Extracted Heatmap URL:", extractedUrl);
//             setHeatmapUrl(extractedUrl);
//           } else {
//             console.error("Heatmap URL not found in response.");
//           }
//           throw new Error("API returned an unexpected format.");
//         }

//         const jsonData = await res.json();
//         console.log("Fetched Data:", jsonData);
//         setData(jsonData);
//       } catch (err) {
//         console.error("Fetch Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-black text-white">
//       <div className="container mx-auto px-4 py-12 bg-white text-black">
//         <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
//         <p className="text-center mb-6 text-gray-600">
//           Hover over the map to find out how many students and/or alumni are in or from a particular country.
//         </p>

//         {/* World Map */}
//         <div className="p-4 h-[500px] flex items-center justify-center bg-white">
//           <ComposableMap>
//             <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json">
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const countryName = getCountryName(geo.properties.name);
//                   const countryData = data.find((d) => d.country === countryName);
//                   const fillColor = countryData ? `rgba(255, 0, 0, ${Math.min(0.8, countryData.count / 100)})` : "#DDD";

//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={fillColor}
//                       stroke="#000"
//                       onMouseEnter={() => console.log(countryName, countryData?.count || 0)}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>

//         {/* Embedded Heatmap */}
//         <div className="mt-8">
//           <h2 className="text-xl font-bold text-center">Interactive Heatmap</h2>
//           {loading ? (
//             <p className="text-center text-gray-500">Loading heatmap...</p>
//           ) : heatmapUrl ? (
//             <iframe
//               src={heatmapUrl}
//               width="100%"
//               height="600px"
//               style={{ border: "none", marginTop: "16px" }}
//               title="Heatmap"
//             ></iframe>
//           ) : (
//             <p className="text-center text-red-500">Heatmap not available.</p>
//           )}
//         </div>

//         {/* Facts Section */}
//         <div className="mt-4 pt-4 text-center bg-white text-black">
//           <h2 className="text-lg font-semibold">Facts</h2>
//           <div className="mt-2 space-y-2">
//             <p>🎓 Many top universities offer scholarships for international students.</p>
//             <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
//             <p>🚀 Studying abroad can improve career opportunities globally.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function Stories() {
  const [heatmapUrl, setHeatmapUrl] = useState(null);

  useEffect(() => {                                               //pg loads
    const API_URL = "/api"; // Using Vite proxy

    fetch(API_URL)
      .then(async (res) => {
        console.log("Status Code:", res.status); // Log status code
         
        
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          console.error("Unexpected Response (Not JSON):", text);

          // Extract heatmap URL from HTML response
          const match = text.match(/href="(\/heatmap)"/);
          if (match) {
            const extractedUrl = `https://heatmap-api-pakj.onrender.com${match[1]}`;
            console.log("Extracted Heatmap URL:", extractedUrl);
            setHeatmapUrl(extractedUrl);
          }

          throw new Error("API returned an unexpected format.");
        }

        return res.json();
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 bg-white text-black">
        <h1 className="text-3xl font-bold text-center mb-4">Student Stories</h1>
        <p className="text-center mb-6 text-gray-600">
          View the interactive heatmap to find out how many students and/or alumni are in or from a particular country  
        </p>

        {/* Embedded Heatmap */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center">Interactive Heatmap</h2>
          {heatmapUrl ? (
            <iframe
              src={heatmapUrl}
              width="100%"
              height="600px"
              style={{ border: "none", marginTop: "16px" }}
              title="Heatmap"
            ></iframe>
          ) : (
            <p className="text-center text-gray-500">Loading heatmap...</p>
          )}
        </div>

        {/* Facts Section */}
        <div className="mt-4 pt-4 text-center bg-white text-black">
          <h2 className="text-lg font-semibold">Facts</h2>
          <div className="mt-2 space-y-2">
            <p>🎓 Many top universities offer scholarships for international students.</p>
            <p>🌍 Countries like the USA, UK, and Canada have a high intake of foreign students.</p>
            <p>🚀 Studying abroad can improve career opportunities globally.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
