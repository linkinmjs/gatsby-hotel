exports.createPages = async ({ action, graphql, reporter }) => {
    const resultado = await graphql(`
        query{
            allDatoCmsHabitacion{
                nodes{
                    slug
                }
            }
        }
    `);

    // console.log(resultado.data.allDatoCmsHabitacion);

    if (resultado.errors){
        reporter.panic('No hubo resultados ',resultado.errors)
    }

    // si hay páginas, crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
}