import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    Navbar,
    Tab,
    Nav,
    NavItem,

} from 'react-bootstrap';
import Chat from './chat/Chat';
import PostList from './posts/PostList';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

class Home extends Component{
    render(){
        return(
            <Grid>
                <Row>
                    
                        <Navbar>
                            <Navbar.Header>
                            <Navbar.Brand>
                                <a>Smart Chat Alpha</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                            <Navbar.Text>
                                Signed in as: <Navbar.Link>Mark Otto</Navbar.Link>
                            </Navbar.Text>
                            <Navbar.Text pullRight>
                                <Navbar.Link>Salir</Navbar.Link>
                            </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                      
                </Row>
                <Row>
                    <Router>
                         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className="clearfix">
                            <Col sm={2}>
                                <h4>Asignados</h4>
                                <Nav bsStyle="pills" stacked>
                                    <IndexLinkContainer to="/">
                                        <NavItem eventKey={1}>All</NavItem>
                                    </IndexLinkContainer>
                                    <LinkContainer to="/chat/1234">
                                        <NavItem eventKey={2}>Error 404 nodejs</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/chat/12323423">
                                        <NavItem eventKey={3}>Error apache2</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/chat/1232342323">
                                        <NavItem eventKey={4}>react native error</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/chat/12312323234">
                                        <NavItem eventKey={5}>js de mierda</NavItem>
                                    </LinkContainer>
                                     <LinkContainer to="/chat/1231232asds3234">
                                        <NavItem eventKey={6}>jquery</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/chat/123123eeee4">
                                        <NavItem eventKey={6}>React install</NavItem>
                                    </LinkContainer>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Route exact path="/" component={PostList}/>
                                <Route exact path="/chat/:id" component={Chat}/>
                            </Col>
                            </Row>
                        </Tab.Container>
                    </Router>
                </Row>
            </Grid>
        )
    }
}

export default Home;