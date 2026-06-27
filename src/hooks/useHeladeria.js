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
        // Obtenemos el valor bruto (probando varios nombres de propiedad)
        const valorBruto = item.precio || item.price || item.valor || item.costo || 0;
        
        // Convertimos a string y quitamos todo lo que NO sea número, punto o guion
        // Esto elimina signos de pesos, comas, etc.
        const precioLimpio = parseFloat(valorBruto.toString().replace(/[^0-9.-]+/g, "")) || 0;
        
        const cantidad = parseInt(item.cantidad) || 1;
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