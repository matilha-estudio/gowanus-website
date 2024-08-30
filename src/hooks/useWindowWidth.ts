import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(1020);

    useEffect(() => {
        // Função para atualizar o estado com a largura atual da janela
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Adiciona o event listener
        window.addEventListener('resize', handleResize);

        // Define a largura inicial
        handleResize();

        // Remove o event listener quando o componente for desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};