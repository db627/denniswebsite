
import App from './app'
export default function Layout({ children }) {

  return (
    <div className="bg-zinc-800"> 
      {children}
      <App />
    </div>
  );
}
//bg-gradient-to-t from-white to-teal-500

//bg-zinc-8