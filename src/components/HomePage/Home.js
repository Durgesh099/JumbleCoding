import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './home.css'
import Main1 from '../DragDrop/Codes/Main1';
import Main2 from '../DragDrop/Codes/Main2';
import Main3 from '../DragDrop/Codes/Main3';
import Complete from '../HomePage/Team1'

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
                {currentPage !== 'complete' &&
                <div className='output'>
                    {currentPage==='main1' && 
                        <>
                            <h3>Expected Output</h3>
                            <img src="https://i.ibb.co/hc63W6C/HTML2.png" alt="output" border="0"/>
                        </>
                    }
                    {currentPage==='main2' &&
                        <>
                            <h3>Expected Output</h3>
                            <img src="https://i.ibb.co/fVWmthn/SQL-2.png" alt="output" border="0"/>
                        </>
                    }
                    {currentPage==='main3' &&
                        <>
                            <h3>Expected Output</h3>
                            <img src="https://i.ibb.co/VTwhxvr/DSA-2.pngg" alt="output" border="0"/>
                        </>
                    }
                </div>}

                <div id="container" className="container">
                    {currentPage === 'main1' && <Main1 onNextClick={handleNextClick} />}
                    {currentPage === 'main2' && <Main2 onNextClick={handleNextClick} />}
                    {currentPage === 'main3' && <Main3 onNextClick={handleNextClick} />}
                    {currentPage === 'complete' && <Complete/>}
                </div>
                

                <div className='adds'>
                <div className='add1'>
                    <h2>CoreCode Academy</h2>
                    <Link target='_blank' to="https://www.facebook.com/coreprogrammingacademy/info?tab=page_info"><img src="https://i.ibb.co/t4bRSXh/ca.jpg" alt='Corecode-Academy'/></Link>
                </div>
                <div className='add2'>
                    <h2>Posit Source</h2>
                    <Link target='_blank' to="https://www.positsource.com"><img src="https://i.ibb.co/hV0vtXr/ps.jpg" alt='Posit-Source'/></Link>
                </div>
                <div className='add3'>
                    <h2>Sana Cyber Forensics</h2>
                    <img src="https://i.ibb.co/z77XtDF/Screenshot-2024-02-21-124833.png" alt='Sana-CyberForensics'/>
                </div>
                <div className='add4'>
                    <h2>ABC'Z</h2>
                    <Link target='_blank' to="https://abcz.in/"><img src="https://i.ibb.co/25S0FPv/abc.jpg" alt='ABCZ'/></Link>
                </div>
                <div className='add5'>
                    <h2>Frullato</h2>
                    <Link target='_blank' to="https://frullato.business.site/"><img src="https://i.ibb.co/KhBN6Zc/Screenshot-2024-02-21-210521.png" alt='ABCZ'/></Link>
                </div>
            </div>
        </div>
    );
}

export default Home