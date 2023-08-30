// frontend/pages/index.tsx

import Navigation from "@/components/navigation/navigation2"
export default function Blog(){
  return (
    <div className="">
      
      <body className="bg-gradient-to-br from-color1 via-color2 to-color3 " style={{height: "100vh"}}>
        <Navigation />
        <div className="text-center">
          <h1 className="text-white m-5 text-5xl">Blog</h1>
          <p className="text-white m-5">Coming Soon</p>
        </div>
      </body>
    </div>
  );
}

// bg-gradient-to-br from-color1 via-color2 to-color3 