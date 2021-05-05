import React from 'react';
import {graphql} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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


const HabitacionTemplate = ({data}) => {

    // console.log(data);
    return ( 
        <h1>habitacion.js</h1>
     );
}
 
export default HabitacionTemplate;