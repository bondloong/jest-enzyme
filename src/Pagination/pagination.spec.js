import { shallow } from 'enzyme';
import React from 'react'
import Pagination from './pagination'

const setUp = (props) => shallow(<Pagination {...props} lastPage={20}/>)
describe('Pagination component', () => {
    it('should Pagination render without props', () => {
        const wrapper = shallow(<Pagination />)
        expect(wrapper).toMatchSnapshot();
    });
    it('should Pagination render with props', () => {
        const wrapper = setUp({page: 0})
        expect(wrapper).toMatchSnapshot();
    });
    it('should Pagination render for last page ', () => {
        const wrapper = setUp({page: 15})
        expect(wrapper).toMatchSnapshot();
    });
    it('should Pagination render without 3dots in the middle', () => {
        const wrapper = setUp({page: 16})
        expect(wrapper).toMatchSnapshot();
    });
    it('should Pagination render with 3dots and 3 buttons in the end', () => {
        const wrapper = setUp({page: 19})
        expect(wrapper).toMatchSnapshot();
    });

    describe('default props', () => {
        it('should use default onChange', () => {
            const result = Pagination.defaultProps.onClick();
            expect(result).toBe(undefined)
        });
    });
});