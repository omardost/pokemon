export const Footer = (props: any) => {
    const { setPage, page } = props;

    const before = () => {
        const pageCurrent = page - 1;
        if (pageCurrent >= 0) {

            setPage(pageCurrent);
        }
    };

    const later = () => {
        const pageCurrent = page + 1;
        setPage(pageCurrent);
    };

    return (
        <div className="footer">
            <div style={{ display: 'flex' }}>

                <button onClick={before}>Anterior</button>
            </div>
            <div style={{ display: 'flex' }}>

                <button onClick={later}>Siguiente</button>
            </div>
        </div>
    );
}