import Pokemon from '../interfaces/Pokemon';
import './styles.css';

export const Card = (props:Pokemon) => {
    const cardTop = {
        height: '300px',
        width: '250px',
        margin: '20px',
        border: '1px solid',
        backgroundColor: '#FBD603',
        borderRadius: '10px'
    };

    return (
        <div style={cardTop}>
            <div className='cardBody'>
                <div>imagen</div>
                <div>{props.name}</div>
            </div>
        </div>
    );
}