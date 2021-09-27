import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should be able to add two numbers', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add')
    const totalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    totalButton.simulate('click')
    expect(runningTotal.text()).toEqual('5')
  });

  it('Should be able to subtract two numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtractButton = container.find('#operator-subtract')
    const totalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    totalButton.simulate('click')
    expect(runningTotal.text()).toEqual('3')
  });
    

  it('Should be able to multiply two numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply')
    const totalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    totalButton.simulate('click')
    expect(runningTotal.text()).toEqual('15')
  });

  it('Should be able to divide two numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide')
    const totalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    totalButton.simulate('click')
    expect(runningTotal.text()).toEqual('3')
  });

  it ('Should be able to handle multiple digits', () => {
    const button9 = container.find('#number9');
    const button6 = container.find('#number6');
    const button8 = container.find('#number8');
    const runningTotal = container.find('#running-total');
    button9.simulate('click');
    button6.simulate('click');
    button8.simulate('click');
    expect(runningTotal.text()).toEqual('968')
  })
  
  it ('Should be able to chain multiple operations together', ()=> {
    const button9 = container.find('#number9');
    const subtractButton = container.find('#operator-subtract')
    const button2 = container.find('#number2');
    const addButton = container.find('#operator_add')
    const button8 = container.find('#number8');
    const totalButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    
    button9.simulate('click');
    subtractButton.simulate('click');
    button2.simulate('click');
    addButton.simulate('click');
    button8.simulate('click');
    totalButton.simulate('click')
    expect(runningTotal.text()).toEqual('15')
  })

  it('Should be able to handle a clear operation without affecting the running total from a previous calculation', ()=>{
    const button6 = container.find('#number6');
    const button2 = container.find('#number2');
    const addButton = container.find('#operator_add')
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear')
    const totalButton = container.find('#operator-equals')

    button6.simulate('click');
    addButton.simulate('click');
    button2.simulate('click');
    addButton.simulate('click');
    button2.simulate('click');
    clear.simulate('click')

    totalButton.simulate('click')

    expect(runningTotal.text()).toEqual('8')
  })

})

