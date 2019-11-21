import React from 'react';
import Routes from 'react-router-dom';
import AppBarPortal from '../home/modules/views/AppBarPortal';
import Despesas from '../../public/img/wallet.png';

import '../financeiro/style.css';
// import { Link } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function Financeiro() {
    return (

        <div>
            <AppBarPortal />
            <Link to="#">
            <div className="containerF1">
                <div className='contentF1'>
                    <center><img src={Despesas} alt="Despesas" /></center>
                    <p>
                        <strong> DESPESAS </strong>
                    </p>
                </div>
            </div>
            </Link>
            <div className="containerF1">
                <div className='contentF1'>
                    <center><img src={Despesas} alt="Despesas" /></center>
                    <p>
                        <strong> DESPESAS </strong>
                    </p>
                    <form>
                        <button className="btnF1" type="button">Custos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}