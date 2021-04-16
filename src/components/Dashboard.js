import React from 'react';
//import Api from '../utils/Api';
import FormAjouterCitation from './FormAjouterCitation';
import ListeCitations from './ListeCitations';
import './Dashboard.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citations: [],
        }

        this.ajouterCitation = this.ajouterCitation.bind(this);
        this.supprimerCitation = this.supprimerCitation.bind(this);
    }

    componentDidMount(){

    }

    ajouterCitation() {
        console.log("Citation ajoutée")
    }

    supprimerCitation() {

    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                
                <table className="dashboardTable">
                    <tbody>
                        <tr>
                            <td><FormAjouterCitation ajouterCitation={this.ajouterCitation}/></td>
                            <td><ListeCitations citations={this.state.citations}/></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Dashboard;