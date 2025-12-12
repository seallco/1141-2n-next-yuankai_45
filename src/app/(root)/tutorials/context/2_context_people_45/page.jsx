'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_45';

import {usePeopleContext_45, PeopleContextProvider_45} from './_context.jsx';

const PropDrilling_45 = () => {
  return (
    <PeopleContextProvider_45>
    <Wrapper>
      <div className='container'>
        <h3>Context API Demo</h3>
        <List /> 
      </div>
    </Wrapper>
    </PeopleContextProvider_45>
  );
};

const List = () => {
  const {people} = usePeopleContext_45();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson 
        key={person.id} 
        {...person} />
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} =usePeopleContext_45()
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling_45;
