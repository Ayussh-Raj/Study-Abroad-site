// login and register page
// This page will have two tabs, one for login and one for register 

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Shield, Mail, Lock } from 'lucide-react';

// const studyAbroadImages = [
//   'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 
//   'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80', 
// ];

// function Auth() {
//   const [activeTab, setActiveTab] = useState('signin');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex === studyAbroadImages.length - 1 ? 0 : prevIndex + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('isAuthenticated', 'true'); // Save login state
//     navigate('/'); // Redirect to home
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-1/2 p-12 bg-white shadow-lg">
//         <h2 className="text-4xl font-bold text-gray-700 mb-8">{activeTab === 'signin' ? 'Sign In' : 'Register'}</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <label>Email <span className="text-red-500">*</span></label>
//             <input type="email" name="email" required className="w-full border-b-2 border-blue-500 py-2" value={formData.email} onChange={handleInputChange} />
//           </div>
//           <div className="space-y-2">
//             <label>Password <span className="text-red-500">*</span></label>
//             <input type="password" name="password" required className="w-full border-b-2 border-blue-500 py-2" value={formData.password} onChange={handleInputChange} />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
//             {activeTab === 'signin' ? 'Sign In' : 'Register'}
//           </button>
//         </form>
//         <p className="mt-4 text-gray-500">
//           {activeTab === 'signin' ? "Don't have an account?" : "Already have an account?"} 
//           <button onClick={() => setActiveTab(activeTab === 'signin' ? 'register' : 'signin')} className="text-blue-500 underline ml-2">
//             {activeTab === 'signin' ? 'Register' : 'Sign In'}
//           </button>
//         </p>
//       </div>

//       <div className="w-1/2 relative">
//         {studyAbroadImages.map((image, index) => (
//           <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
//                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Auth;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const studyAbroadImages = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80', 
];

function Auth() {
  const [activeTab, setActiveTab] = useState('signin');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    password: '',
    result: '',
    country: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === studyAbroadImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 p-12 bg-white shadow-lg">
        <h2 className="text-4xl font-bold text-gray-700 mb-8">{activeTab === 'signin' ? 'Sign In' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === 'register' && (
            <>
              <div className="space-y-2">
                <label>Full Name <span className="text-red-500">*</span></label>
                <input type="text" name="fullName" required className="w-full border-b-2 border-blue-500 py-2" value={formData.fullName} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label>Address <span className="text-red-500">*</span></label>
                <input type="text" name="address" required className="w-full border-b-2 border-blue-500 py-2" value={formData.address} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label>12th/BTech Result <span className="text-red-500">*</span></label>
                <input type="text" name="result" required className="w-full border-b-2 border-blue-500 py-2" value={formData.result} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <label>Country Opting For <span className="text-red-500">*</span></label>
                <select name="country" required className="w-full border-b-2 border-blue-500 py-2" value={formData.country} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  <option value="Australia">Australia</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  
                </select>
              </div>
            </>
          )}
          <div className="space-y-2">
            <label>Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" required className="w-full border-b-2 border-blue-500 py-2" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <label>Password <span className="text-red-500">*</span></label>
            <input type="password" name="password" required className="w-full border-b-2 border-blue-500 py-2" value={formData.password} onChange={handleInputChange} />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            {activeTab === 'signin' ? 'Sign In' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          {activeTab === 'signin' ? "Don't have an account?" : "Already have an account?"} 
          <button onClick={() => setActiveTab(activeTab === 'signin' ? 'register' : 'signin')} className="text-blue-500 underline ml-2">
            {activeTab === 'signin' ? 'Register' : 'Sign In'}
          </button>
        </p>
      </div>
      <div className="w-1/2 relative">
        {studyAbroadImages.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
               style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} />
        ))}
      </div>
    </div>
  );
}

export default Auth;