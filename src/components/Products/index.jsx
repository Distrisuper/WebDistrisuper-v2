import Banner from '../Banner/index'
import imagen from '../../assets/images/a.png'
import './styles.css'; // Asegúrate de tener los estilos CSS necesarios para la superposición de texto

const Products = () => {
    const items = [
        { id: 1, src: imagen, text: 'Tren delantero', link: '1.png' },
        { id: 2, src: imagen, text: 'Dirección', link: '2.png' },
        { id: 3, src: imagen, text: 'Suspensión', link: '3.png' },
        { id: 4, src: imagen, text: ' 4', link: '4.png' },
        { id: 5, src: imagen, text: ' 5', link: '5.png' },
        { id: 6, src: imagen, text: ' 6', link: '6.png' },
        { id: 7, src: imagen, text: ' 7', link: '7.png' },
        { id: 8, src: imagen, text: ' 8', link: '8.png' },
        { id: 9, src: imagen, text: ' 9', link: '9.png' },
    ];

    return (
        <>
            <Banner title={"Nuestros productos"} />
            <div className="gallery-section ptb-120">
                <div className="container">
                    <div className="gallery-filter-wrapper">
                        <h1 className="title text-center mb-5">Nos especializamos en</h1>
                        <div className="grid">
                            {items.map(item => (
                                <div key={item.id} className={`grid-item ${item.categories}`}>
                                    <div className="gallery-item">
                                        <div className="gallery-thumb">
                                            <img src={item.src} alt="Product" />
                                            <div className="gallery-text-overlay text-center ">
                                                <span className='lh-lg'>{item.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;
