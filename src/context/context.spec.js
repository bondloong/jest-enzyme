import React from 'react'
import { AuthProvider } from './context'
import Component from './component'

describe('Component', () => {
    const wrapper = mount(
        <AuthProvider>
            <Component />
        </AuthProvider>
    );
        it('should ', () => {
            expect(wrapper.find('div').text()).toBe('false');
            wrapper.find('.btn').simulate('click');
            expect(wrapper.find('div').text()).toBe('true');

            wrapper.find('.btn').simulate('click');
            expect(wrapper.find('div').text()).toBe('false');
        });
    
})