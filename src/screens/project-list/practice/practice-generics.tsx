import React from 'react';
import { useArray, useMount } from 'utils';

export const TsReactTest = () => {
  const person: { name: string; age: number }[] = [
    { name: 'jack', age: 25 },
    { name: 'peter', age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(person);

  //   useMount(()=>{
  //       console.log(value.notExist)
  //       add({name:'tom'})
  //       removeIndex('111')
  //   })

  return (
    <>
      <button onClick={() => add({ name: 'john', age: 99 })}>add john</button>
      <button onClick={() => removeIndex(0)}>Remove First Name</button>
      <button onClick={() => clear()}>Clear All</button>
      {value.map((person: { age: number; name: string }, index: number) => {
        return (
          <div key={index}>
            <span>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </>
  );
};
