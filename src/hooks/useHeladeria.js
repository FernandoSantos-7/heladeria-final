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
        const precio = parseFloat(item.precio) || 0;
        const cantidad = parseInt(item.cantidad) || 1;
        return acumulador + (precio * cantidad);
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