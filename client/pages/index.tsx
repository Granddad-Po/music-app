import React from 'react';
import {NextPage} from "next";
import Layout from "../layouts/layout";
import styles from '../styles/Index.module.scss'


const Index: NextPage = () => {

    return (
        <>
            <Layout>
                <div className={styles.center}>
                    <h1>Welcome</h1>
                    <h3>Here are the best tracks</h3>
                </div>
            </Layout>
        </>
    );
};

export default Index;