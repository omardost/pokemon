import Pokemon from '../interfaces/pokemon';
import './styles.css';

export const BigCard = (props: Pokemon) => {
    const cardTop = {
        width: '100%',
        margin: '20px',
        border: '1px solid',
        borderRadius: '10px',
        backgroundColor: '#a6ff59'
    };

    return (
        <div style={cardTop}>
            <div className='bigCardBody'>
                <div style={{ width: '100%' }}># {props.id}</div>
                <div style={{ width: '100%', justifyContent: 'center' }}>

                    <img src={props.sprites?.front_default} alt=""
                        className='bigSprite' />


                </div>
                <div style={{ width: '100%', justifyContent: 'center' }}><strong> <h3>{props.name}</h3></strong></div>
                <div style={{ marginTop: '5px' }}><strong>Types</strong></div>
                <div>
                    {
                        props.types?.map((obj, idx) => {
                            if (obj)
                                return (

                                    <div key={idx}>{obj.type?.name}&nbsp; </div>

                                )
                        })
                    }
                </div>
                <div style={{ marginTop: '5px' }}><strong>Weight</strong></div>
                <div>{props.weight} kg</div>
                <div style={{ marginTop: '5px' }}><strong>Sprites</strong></div>
                <div className='spriteListBody'>
                    <img src={props.sprites?.front_default} alt=""
                        className='spriteList' />
                    <img src={props.sprites?.front_shiny} alt=""
                        className='spriteList' />
                    <img src={props.sprites?.back_default} alt=""
                        className='spriteList' />
                    <img src={props.sprites?.back_shiny} alt=""
                        className='spriteList' />
                </div>
                <div><strong>Movements</strong></div>
                <div>
                    {
                        props.abilities?.map((obj, idx) => {
                            if (obj)
                                return (

                                    <div key={idx}>{obj.ability?.name}&nbsp; </div>

                                )
                        })
                    }
                </div>
            </div>
        </div >
    );
}