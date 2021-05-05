import React from 'react';
import {graphql} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
    query ($slug: String!) {
        allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
            nodes {
                titulo
                contenido
                imagen {
                    gatsbyImageData
                }
            }
        }
    }
  
`


const HabitacionTemplate = ({data: {allDatoCmsHabitacion: { nodes } }} ) => {

    const {titulo, contenido, imagen} = nodes[0];
    return ( 
        <Layout>
            <main>
                <h1>{titulo}</h1>
                <p>{contenido}</p>
                <GatsbyImage
                    image={imagen.gatsbyImageData}
                    alt="Habitación"
                />
            </main>
        </Layout>
     );
}
 
export default HabitacionTemplate;