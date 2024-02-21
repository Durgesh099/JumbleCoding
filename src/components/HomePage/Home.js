import React, {useState} from 'react';
import './home.css'
import Main1 from '../DragDrop/Codes/Main1';
import Main2 from '../DragDrop/Codes/Main2';
import Main3 from '../DragDrop/Codes/Main3';
import Complete from './Complete'

const Home = () => {
    const [currentPage, setCurrentPage] = useState('main1');

    const handleNextClick = () => {
        switch (currentPage) {
        case 'main1':
            setCurrentPage('main2');
            break;
        case 'main2':
            setCurrentPage('main3');
            break;
        case 'main3':
            setCurrentPage('complete');
            break;
        default:
            break;
        }
    };

    return (
        <div>
            <div>
                <div className='add1'><img src="" alt='Corecode-Academy'/></div>
                <div className='add2'><img src="" alt='Posit-Source'/></div>
                <div className='add3'><img src="" alt='Sana-CyberForensics'/></div>
                {currentPage !== 'complete' &&
                <div className='output'>
                    {currentPage==='main1' && 
                        <>
                            <h3>Expected Output</h3>
                            <img src="https://i.ibb.co/dr9cBDm/html-cf.jpg" alt="output" border="0"/>
                        </>
                    }
                    {currentPage==='main2' &&
                        <>
                            <h3>SQL Table</h3>
                            <img src="https://i.ibb.co/VCLhJmB/Screenshot-2024-02-19-194843.png" alt="output" border="0"/>
                        </>
                    }
                    {currentPage==='main3' && <h3>Selection Sort Algorithm.</h3>}
                </div>}

                <div id="container" className="container">
                    {currentPage === 'main1' && <Main1 onNextClick={handleNextClick} />}
                    {currentPage === 'main2' && <Main2 onNextClick={handleNextClick} />}
                    {currentPage === 'main3' && <Main3 onNextClick={handleNextClick} />}
                    {currentPage === 'complete' && <Complete/>}
                </div>
            </div>

        </div>
    );
}

export default Home