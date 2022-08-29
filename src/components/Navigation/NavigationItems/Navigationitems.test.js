import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should render two <NavigationItem /> elemets if not authenticated', () => {
        // To check if the wrapper contain a specific item
        // Tohavelength = Make sure it is shown more than two times
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render two <NavigationItem /> elemets if not authenticated', () => {
            // wrapper.setProps({isAuthenticated: true});
            wrapper = shallow(<NavigationItems isAuthenticated/>);
            expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render two <NavigationItem /> elemets if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });


});