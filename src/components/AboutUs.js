import React from 'react'
import { Card, Button } from 'react-bootstrap/';
import {FaGithub,FaFacebookF} from  'react-icons/fa'
import Maram from './members/IMG_0502.JPG'
export class AboutUs extends React.Component {
    render() {
        return (
            <div className="aboutus">
                <div className='firstSec'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Omar Alazaizeh</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Ghaidaa Alnattah</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Maram} />
                        <Card.Body>
                            <Card.Title>Maram Abu Murad</Card.Title>
                            <Card.Text>Business Administration</Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                </div>
                        <div className='secSection'>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Saleem Diab</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>                        
                            </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Suhaib Ersan</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>                        
                            </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Taima Al-hajjaj</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <div>
                                <ul>
                                    <li><FaGithub /></li>
                                    <li> <FaFacebookF/></li>
                                </ul>
                            </div>                        
                            </Card.Body>
                    </Card>
                 </div>
            </div>
        </div>
        )
    }
}

export default AboutUs
