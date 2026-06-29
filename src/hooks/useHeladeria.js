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
    // BUSCAMOS EL PRECIO EN CUALQUIER LADO DONDE PUEDA ESTAR ESCONDIDO
    const precioBruto = item.precio || item.price || item.costo || 0;
    
    // Convertimos a número quitando TODO lo que no sea dígito o punto
    const precioLimpio = parseFloat(precioBruto.toString().replace(/[^0-9.]/g, "")) || 0;
    
    const cantidad = parseInt(item.cantidad) || 1;

    // DEBUG: Esto es vital ahora mismo
    console.log("Calculando item:", item.nombre, "Precio bruto:", precioBruto, "Precio limpio:", precioLimpio);

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