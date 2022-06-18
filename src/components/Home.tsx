import { Card } from './Card';

export const Home = () => {
    const mystyle = {
        "display": "flex",
        "justifyContent": 'center'
    };
    return (
        <div style={mystyle}>
            <Card />
            pantalla de inicioo
        </div>
    );
}