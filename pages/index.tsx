import type { NextPage } from 'next';
import Head from 'next/head';

import Basic from '../src/skins/paperbase/Basic';

import * as settings from '../src/settings'
const PageName = "Home Page"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{settings.sitename} - {PageName}</title>
                <meta name="description" content="Generated by Ike" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Basic title={PageName} sitename={settings.sitename}>
                Welcome!
            </Basic>
        </>
    )
}

export default Home
