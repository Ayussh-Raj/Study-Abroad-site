// import ProgramCard from '../components/ProgramCard';

// export default function Programs() {
//   const programs = [
//     {
//       title: "Computer Science",
//       university: "MIT",
//       location: "Cambridge, USA",
//       duration: "4 years",
//       rating: 4.9,
//       reviews: 250,
//       image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
//       price: "$52,000/year"
//     },

//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">CSE Programs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {programs.map((program, index) => (
//           <ProgramCard key={index} {...program} />
//         ))}
//       </div>
//     </div>
//   );
// }
import ProgramCard from '../components/ProgramCard';

export default function Programs() {
  const programs = [
    {
      title: "Bachelor of Science in Computer Science",
      university: "Technical University of Munich",
      location: "Munich, Bavaria, Germany",
      duration: "3 years",
      rating: 4.8,
      reviews: 200,
      image: "https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€85 per semester (EU/EEA), €2,000-€6,000 (non-EU/EEA)"
    },
    {
      title: "Master of Science in Computer Science",
      university: "Technical University of Berlin",
      location: "Berlin, Germany",
      duration: "2 years",
      rating: 4.7,
      reviews: 180,
      image: "https://images.unsplash.com/photo-1531259736756-6caccf485f81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€316 per semester"
    },
    {
      title: "Bachelor of Science in Computer Science",
      university: "RWTH Aachen University",
      location: "Aachen, North Rhine-Westphalia, Germany",
      duration: "3 years",
      rating: 4.6,
      reviews: 150,
      image: "https://images.unsplash.com/photo-1547653872-052e3539decc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€300 per semester"
    },
    {
      title: "Master of Science in Computer Science",
      university: "University of Munich (LMU)",
      location: "Munich, Bavaria, Germany",
      duration: "2 years",
      rating: 4.5,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€129.40 per semester"
    },
    {
      title: "Bachelor of Science in Computer Science",
      university: "Karlsruhe Institute of Technology",
      location: "Karlsruhe, Baden-Württemberg, Germany",
      duration: "3 years",
      rating: 4.4,
      reviews: 100,
      image: "https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€155 per semester"
    },
    {
      title: "Master of Science in Computer Science",
      university: "Technical University of Darmstadt",
      location: "Darmstadt, Hesse, Germany",
      duration: "2 years",
      rating: 4.3,
      reviews: 90,
      image: "https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "€315 per semester"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">CSE Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </div>
    </div>
  );
}