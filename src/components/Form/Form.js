import React from 'react';

const Form = (data) => {
  return (
    <form>
      <div className='input-group mb-3'>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={data.handleInputChange}
          value={data.name}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='age'>age</label>
        <input
          type='text'
          name='age'
          id='age'
          onChange={data.handleInputChange}
          value={data.age}
        ></input>
      </div>
      <div className='input-group mb-3'>
        <label htmlFor='breed'>breed</label>
        <input
          type='text'
          name='breed'
          id='breed'
          onChange={data.handleInputChange}
          value={data.breed}
        ></input>
      </div>
      <div className='input-group-append'>
        <button
          className='btn btn-outline-secondary'
          type='button'
          id='button-addon2'
          onClick={data.handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
