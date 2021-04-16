import React from 'react';
//import Api from '../utils/Api';
import Citation from './Citation';

// Composant Material Design
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class ListeCitations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const citations = [
            {id:1, citation:"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", auteur:"Stephen Hawking"},
            {id:2, citation:"Celui qui suit la foule n’ira jamais plus loin que la foule qu’il suit. Celui qui marche seul peut parfois atteindre des lieux que personne n’a jamais atteints !", auteur:"Albert Einstein"},
        ]
        const ListeCitations = citations.map( citation => (
            <tr key={citation.id}>
                <td>
                    <Citation />
                </td>
                
                <td style={{'verticalAlign': 'middle'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<DeleteIcon />}
                    >
                        Supprimer
                    </Button>
                </td>
            </tr>
            )
        )

        return (
            <div>
                <table>
                        <thead>
                            <tr>
                                <th><h3>Liste de mes citations</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListeCitations}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ListeCitations;