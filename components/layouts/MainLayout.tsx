import { FC } from 'react';
import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = {};

interface Propiedades {
    title?:string;
}

export const MainLayout: FC<PropsWithChildren<Propiedades>> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{title || "PokemonApp"}</title>
                <meta name='author' content='Cesar Duran' />
                <meta name='description' content={`Información sobre el pokémon ${ title }`} />
                <meta name='keywords' content={`${ title }, pokemon, pokedex`} />
            </Head>

            <main>
                { children }
            </main>
        </>
      )
};
