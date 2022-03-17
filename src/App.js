import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from './components/Layout'
import Home from './views/Home'
import Person from './views/Person'

import {
    Routes,
    Route,
    useLocation
} from "react-router-dom"

const App = () => {

	const location = useLocation();
	const [showBackButton, setShowBackButton] = useState(false);
	const title = 'Home'
	
	useEffect(() => {
		setShowBackButton(location.pathname !== '/')
	}, [location.pathname]);

    return (
      <Routes location={location}>
            <Route path="/" element={<Layout title={title} showBackButton={showBackButton} />}>
				<Route index element={
					<TransitionGroup component={null}>
						<CSSTransition key={location.key} classNames="fade" timeout={300}>
							<Home />
						</CSSTransition>
					</TransitionGroup>
				} />
                <Route path='home' element={
					<TransitionGroup component={null}>
						<CSSTransition key={location.key} classNames="fade" timeout={300}>
							<Home />
						</CSSTransition>
					</TransitionGroup>
				} />
				<Route path='person/:name' element={
					<TransitionGroup component={null}>
						<CSSTransition key={location.key} classNames="fade" timeout={300}>
							<Person />
						</CSSTransition>
					</TransitionGroup>
				} />
            </Route>
      </Routes>
    );
}

export default App;
