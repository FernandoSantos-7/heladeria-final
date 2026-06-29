import { useState, useMemo } from 'react';

export const useHeladeria = () => {
    const [poteSeleccionado, setPoteSeleccionado] = useState(null);
    const [gustosSeleccionados, setGustosSeleccionados] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [categoriaGustoAbierta, setCategoriaGustoAbierta] = useState(null);
    const [categoriaExtraAbierta, setCategoriaExtraAbierta] = useState(null);
    const [cantidadPote, setCantidadPote] = useState(1);
    const [esSegundaPartePromo, setEsSegundaPartePromo] = useState(false);
    const [promoTemporal, setPromoTemporal] = useState(null);
    const [metodoEntrega, setMetodoEntrega] = useState('Local');
    const [zona, setZona] = useState('');
    const [calle, setCalle] = useState('');

   const total = useMemo(() => {
  return carrito.reduce((acumulador, item) => {
    // 1. Buscamos el precio en varios lugares posibles
    const precioCrudo = item.precio || 0;
    
    // 2. Convertimos a número de forma segura
    const precioLimpio = parseFloat(precioCrudo.toString().replace(/[^0-9.-]+/g, "")) || 0;
    
    // 3. Calculamos la cantidad (si no existe, es 1)
    const cantidad = parseInt(item.cantidad) || 1;

    // 4. LOG: Si el precio es 0, nos avisa en la consola F12 qué producto es
    if (precioLimpio === 0) {
      console.warn("Producto con precio 0 detectado:", item);
    }

    return acumulador + (precioLimpio * cantidad);
  }, 0);
}, [carrito]);

    return {
        poteSeleccionado, setPoteSeleccionado,
        gustosSeleccionados, setGustosSeleccionados,
        carrito, setCarrito,
        categoriaGustoAbierta, setCategoriaGustoAbierta,
        categoriaExtraAbierta, setCategoriaExtraAbierta,
        cantidadPote, setCantidadPote,
        esSegundaPartePromo, setEsSegundaPartePromo,
        promoTemporal, setPromoTemporal,
        metodoEntrega, setMetodoEntrega,
        zona, setZona,
        calle, setCalle,
        total
    };
};