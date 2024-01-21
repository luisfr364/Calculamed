import "./header.css";

function Header() {
    return (
        <>
            <h1 className="header__title">
                Calcula<b className="title__b">Med</b>
            </h1>
            <div className="header__warning">
                <h2 className="warning__text shadow">
                    O criador deste website não se responsabiliza por nenhum dano causado pelo
                    seu uso. <b className="warning__b">Utilize-o com cautela</b>
                </h2>
            </div>
        </>
    );
}

export default Header;
