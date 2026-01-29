export const productosMock = [
  { 
    id: 1, 
    nombre: 'Cable Subterraneo 2 X 6 Mm Antiflama Neutroluz X Metro Violeta', 
    categoria: 'Electricidad', 
    precio: 5484,
    descripcion: 'Cable Subterraneo 2 X 6 Mm Antiflama Neutroluz X Metro Violeta. Conductor de cobre. Material de la cubierta: pvc. Cable no propagador de incendio. Cumple con norma IRAM.',
    Voltaje: 450/720.,
    stock: 150,
    destacado: true,
    imagen: '/img/productos/cable1.png',
    url: 'https://articulo.mercadolibre.com.ar/MLA-1369482209-cable-subterraneo-2-x-6-mm-antiflama-neutroluz-x-metro-_JM',
  },
  { 
    id: 2, 
    nombre: 'Estabilizador Atomlux R1000 1000VA 220V 6 Tomas LED Línea R Tensión Monovolt', 
    categoria: 'Computacion', 
    precio: 102500,
    descripcion: 'Voltaje de salida: 220V. Voltaje de entrada: 220V. Potencia nominal de 500 VA para dispositivos electrónicos. Rango de voltaje de entrada de 185V - 240V. Rango de estabilización de salida de 8%. Incluye 6 tomas para conectar múltiples dispositivos.',
    stock: 45,
    destacado: true,
    imagen: '/img/productos/estabilizador.png'
  },
  { 
    id: 3, 
    nombre: 'Disyuntor 40A', 
    categoria: 'Protección', 
    precio: 14500,
    descripcion: 'Disyuntor diferencial 40A para protección eléctrica',
    stock: 30,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
  },
  { 
    id: 4, 
    nombre: 'Luminaria LED 18W', 
    categoria: 'Iluminación', 
    precio: 3200,
    descripcion: 'Luminaria LED industrial 18W, IP65',
    stock: 200,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop'
  },
  { 
    id: 5, 
    nombre: 'Tomacorriente Industrial', 
    categoria: 'Instalación', 
    precio: 5400,
    descripcion: 'Toma industrial trifásica 32A',
    stock: 85,
    destacado: false,
    imagen: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop'
  },
]

export const categoriasMock = 
[
  { id: 1, nombre: 'Luces de Emergencia', cantidad: 42, icon: '🚨', url:'https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/luces-emergencia' },
  { id: 2, nombre: 'Computación',        cantidad: 28, icon: '🖥️', url: 'https://www.mercadolibre.com.ar/pagina/induselectric/listado/computacion/' },
  { id: 3, nombre: 'Lámparas',            cantidad: 65, icon: '🏮', url:'https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/lamparas' },
  { id: 4, nombre: 'Focos',               cantidad: 89, icon: '💡', url: 'https://www.mercadolibre.com.ar/pagina/induselectric/listado/hogar-muebles-jardin/iluminacion-hogar/focos' },
  { id: 5, nombre: 'Oficina',              cantidad: 37, icon: '🏢', url:'https://www.mercadolibre.com.ar/pagina/induselectric/listado/industrias-oficinas/' },
  { id: 6, nombre: 'Electricidad',         cantidad: 15, icon: '🔌', url: 'https://www.mercadolibre.com.ar/pagina/induselectric/listado/construccion/electricidad' },
]