import { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { PhoneIcon, WrenchIcon, ShoppingCartIcon, StarIcon, MenuIcon } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center space-x-2" to="/">
              <img className='m-8 w-16 h-auto' src="https://aircloudleloir.com/wp-content/uploads/2024/07/Diseno-sin-titulo.png" alt="Logo Aircloudleloir" />
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <nav className={`${isMenuOpen ? 'flex bg-white' : 'hidden'} md:flex absolute md:relative top-14 left-0 right-0 bg-background md:top-0 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 text-sm font-medium`}>
            <Link to="#servicios" onClick={(e) => handleLinkClick(e, '#servicios')}>Servicios</Link>
            <Link to="#productos" onClick={(e) => handleLinkClick(e, '#productos')}>Productos</Link>
            <Link to="#testimonios" onClick={(e) => handleLinkClick(e, '#testimonios')}>Testimonios</Link>
            <Link to="#contacto" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://aircloudleloir.com/wp-content/uploads/2024/07/aircloud-trueview-1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Reparación y Venta de iPhones
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Expertos en reparación de iPhones y venta de dispositivos reacondicionados de alta calidad.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-white text-black hover:bg-gray-200 py-2 px-4"><Link to='https://api.whatsapp.com/send?phone=541135200845&text=Hola%20buenos%20días!%20Quisiera%20hacerte%20una%20consulta!'>Reparar mi Apple</Link></button>
                <button className="bg-transparent text-white border-white hover:bg-white hover:text-black py-2 px-4 border"><Link to='https://docs.google.com/file/d/1hTYP7gXorOoBUou4AV-wUm4XDNqz79-P/edit?usp=docslist_api&filetype=msexcel'>Ver Productos</Link></button>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="flex flex-col items-center text-center h-full p-4 border rounded-lg">
                <div className="flex justify-center w-full mb-4">
                  <WrenchIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold">Reparación de Pantallas</h3>
                <p className="text-sm">Reparamos pantallas rotas o con fallas en todos los modelos de iPhone.</p>
              </article>

              <article className="flex flex-col items-center text-center h-full p-4 border rounded-lg">
                <div className="flex justify-center w-full mb-4">
                  <PhoneIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold">Cambio de Batería</h3>
                <p className="text-sm">Reemplazamos baterías agotadas para mejorar la duración de la carga de tu iPhone.</p>
              </article>

              <article className="flex flex-col items-center text-center h-full p-4 border rounded-lg">
                <div className="flex justify-center w-full mb-4">
                  <ShoppingCartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold">Venta de iPhones Reacondicionados</h3>
                <p className="text-sm">Ofrecemos una amplia selección de iPhones reacondicionados a precios accesibles.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="productos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">iPhone 12 Pro</h3>
                  <p className="text-2xl font-bold">$699</p>
                  <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" alt="" />
                </div>
                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 rounded">Comprar Ahora</button>
                </div>
              </div>

              <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">iPhone 11</h3>
                  <p className="text-2xl font-bold">$499</p>
                  <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" alt="" />
                </div>
                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 rounded">Comprar Ahora</button>
                </div>
              </div>

              <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">iPhone SE (2nd gen)</h3>
                  <p className="text-2xl font-bold">$299</p>
                  <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" alt="" />
                </div>
                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 rounded">Comprar Ahora</button>
                </div>
              </div>

              <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">iPhone XR</h3>
                  <p className="text-2xl font-bold">$399</p>
                  <img src="https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png" alt="" />
                </div>
                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 rounded">Comprar Ahora</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Lo que dicen nuestros clientes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">María G.</h3>
          <div>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 inline-block text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <p className="text-sm">Excelente servicio. Repararon mi iPhone en menos de una hora y quedó como nuevo. El personal fue muy amable y profesional.</p>
        </div>
      </div>
      
      <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Juan P.</h3>
          <div>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 inline-block text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <p className="text-sm">Compré un iPhone reacondicionado y funciona perfectamente. La calidad es excelente y el precio muy razonable. Muy satisfecho con mi compra.</p>
        </div>
      </div>

      <div className="flex flex-col bg-white shadow-md rounded-lg p-5">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Ana L.</h3>
          <div>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 inline-block text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <p className="text-sm">Personal muy amable y profesional. Me explicaron todo el proceso de reparación y me dieron consejos para cuidar mejor mi dispositivo. Altamente recomendado.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer id="contacto" className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contacto</h3>
              <Link to='https://api.whatsapp.com/send?phone=541135200845&text=Hola%20buenos%20días!%20Quisiera%20hacerte%20una%20consulta!'>Teléfono: +54 11 3520-0845</Link>
              <p>Email: info@airclodleloir.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <Link to="https://www.google.com/maps/place/Martín+Fierro+3246,+B1715+Villa+Udaondo,+Provincia+de+Buenos+Aires,+Argentina/@-34.6260204,-58.6944929,21z/data=!4m6!3m5!1s0x95bcbe54de6b83db:0x7330b4d72deab1be!8m2!3d-34.6260323!4d-58.6944313!16s%2Fg%2F11c87_g6y3?hl=es-ES&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D">Martin Fierro  3246 <br />Villa Udaondo</Link>
              
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Horario</h3>
              <p>Lunes a Viernes: 9am - 7pm</p>
              <p>Sábado: 10am - 5pm</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Aircloud. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
