import React from 'react';
//import Api from '../utils/Api';
import Citation from './Citation'

// Composant Material Design
import Button from '@material-ui/core/Button';

class RandomCitation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citation: '',
            auteur: '',
        }
        
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    componentDidMount(){
        
    }

    getRandomQuote() {
        alert("Générer une citation aléatoire depuis un appel à l'api");
    }

    render() {
        return (
            <div>
                <Citation/> 

                <Button 
                    variant="contained" 
                    onClick={this.getRandomQuote}
                >
                    Rafraichir
                </Button>
            </div>
        );
    }
}

export default RandomCitation;