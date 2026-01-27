export const productosMock = [
  { 
    id: 1, 
    nombre: 'Cable Unipolar 2.5mm', 
    categoria: 'Cables', 
    precio: 1200,
    descripcion: 'Cable unipolar de cobre estañado, aislamiento de PVC',
    stock: 150,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop'
  },
  { 
    id: 2, 
    nombre: 'Térmica Bipolar 32A', 
    categoria: 'Protección', 
    precio: 8900,
    descripcion: 'Interruptor térmico bipolar 32A para tablero',
    stock: 45,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
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

export const categoriasMock = [
  { id: 1, nombre: 'Cables', cantidad: 42, icon: '⚡' },
  { id: 2, nombre: 'Protección', cantidad: 28, icon: '🛡️' },
  { id: 3, nombre: 'Iluminación', cantidad: 65, icon: '💡' },
  { id: 4, nombre: 'Instalación', cantidad: 89, icon: '🔧' },
  { id: 5, nombre: 'Herramientas', cantidad: 37, icon: '🛠️' },
  { id: 6, nombre: 'Tableros', cantidad: 15, icon: '🔌' },
]