import React from 'react';
import Header from '../components/header'
import Helmet from 'react-helmet';

const Layout = (props) => {
    return (
        <>
            <Helmet>
                <title>Gatsby hotel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@100;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
            {props.children}
        </>
    );
}

export default Layout;