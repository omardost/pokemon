import Pokemon from '../interfaces/pokemon';
import './styles.css';

export const Card = (props: Pokemon) => {
    const cardTop = {
        height: '200px',
        width: '150px',
        margin: '20px',
        border: '1px solid',
        borderRadius: '10px'
    };

    return (
        <div style={cardTop}>
            <div className='cardBody'>
                <div># {props.id}</div>
                <div>{
                    (props.sprites) ?
                        <img src={props.sprites.front_default} alt="" 
                        className='sprite'/>
                        : ''

                }</div>
                <div>{props.name}</div>
            </div>
        </div>
    );
}