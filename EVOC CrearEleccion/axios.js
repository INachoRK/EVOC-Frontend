const obtenerEvento = async() => {
    try {
        const respuesta = await axios.get('')

        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

obtenerEvento();