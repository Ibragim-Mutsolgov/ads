import './App.css';

function App() {
    function app() {
        let count = 3;

        for(let i = 0; i < count; i++) {

        }
    }

    return (
        <div>
            <div id="mainDiv">
                <div style="text-align: center" id="header">
                    Шапка
                </div>
                <div id="market">
                    <p>Рынок</p>
                </div>
                <div id="categories">
                    <p>Категории</p>
                </div>
                <div id="sidebar">
                    <p>Боковое меню</p>
                </div>
                <div id="menu">
                    <p>Главное меню</p>
                    <p>Главное меню</p>
                </div>
            </div>
            <div id="footer">Футер</div>
        </div>
    );
}

export default App;
