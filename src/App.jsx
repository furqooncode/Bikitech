import Home from './Home.jsx';
import AllProducts from './Product/Allproducts.jsx'
import { Toaster } from 'react-hot-toast';
import { Routes , Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import db from './lib/util.jsx';
import logo from './assets/logo.jpg';
import colors from './color.jsx'


export default function App(){
  useEffect(() => {
    import('vconsole').then(({ default: VConsole }) => {
      new VConsole();
    });
    console.log("page mounted!!")
  }, []);
  
  const {data, isError, isPending, error} = useQuery({
    queryKey:['woodProduct'],
    queryFn: async()=>{
      const res = await db.listDocuments("products");
      return res;
    }
  });
  
  if (isPending) {
  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-center gap-4"
      style={{ background: colors.background }}
    >
      {/* Spinning ring around image */}
      <div className="relative w-[150px] h-[150px]">
        {/* Rotating border ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            border: `3px solid transparent`,
            borderTop: `3px solid ${colors.accent}`,
            borderRight: `3px solid ${colors.accent}`,
          }}
        />
        {/* Image */}
        <img
          src={logo} // your logo here
          alt="loading"
          className="w-full h-full rounded-full object-cover p-[6px]"
          style={{ border: `2px solid ${colors.border}` }}
        />
      </div>

      {/* Brand name */}
      <h1
        className="text-2xl font-bold uppercase tracking-widest"
        style={{ color: colors.primaryText }}
      >
        BikiTech
      </h1>

      {/* Tagline */}
      <p
        className="text-sm font-medium text-center px-6"
        style={{ color: colors.text }}
      >
        Where Premium Wood Meets Precision
      </p>

      {/* Animated dots */}
      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              background: colors.accent,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
  
  
  return(
    <div>
      <Toaster position="top-center" />
      <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/AllProducts" element={<AllProducts /> } />
      </Routes>
    </div>
  )
}

