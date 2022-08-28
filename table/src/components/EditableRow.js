import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelFormChange,
}) => {
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter a name...'
          name='fullName'
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          name='address'
          required='required'
          placeholder='Enter an address...'
          value={editFormData.address}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='text'
          name='phoneNumber'
          required='required'
          placeholder='Enter a phone number...'
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type='email'
          name='email'
          required='required'
          placeholder='Enter a email...'
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button onClick={handleCancelFormChange} type='button'>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
