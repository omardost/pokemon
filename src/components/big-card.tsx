import Pokemon from '../interfaces/pokemon';
import './styles.css';

export const BigCard = (props:Pokemon) => {
    const cardTop = {
        height: '400px',
        width: '250px',
        margin: '20px',
        border: '1px solid',
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