import React from "react";
import './MainPage.css';

class MainPage extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="main-page">
                <div className="container">
                    <div className="header">
                        <div className="logo">Voltar</div>
                        <div className="profile">Profile</div>
                    </div>
                </div>
                <div className="main-content">
                <div className="naming"><span style={{color: '#BF00FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Voltar</span><span style={{color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}> Банк</span></div>
                <div style={{width: 345}}><span style={{color: '#BF00FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Надёжное</span><span style={{color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> место для </span><span style={{color: '#BF00FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>хранения</span><span style={{color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> ваших </span><span style={{color: '#BF00FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>средств</span></div>
                </div>
            </div>
        );
    }
}
 
export default MainPage;