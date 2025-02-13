import React from 'react';

const SubsTableItem = ({ email, mongoId, deleteEmail, date }) => {
  const emailDate = new Date(date);

  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email || "No Email"}
      </th>
      <td className='px-6 py-4 hidden sm:table-cell'>
        {emailDate.toLocaleDateString()}
      </td>
      <td onClick={() => deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer text-red-600 hover:underline'>
        Delete
      </td>
    </tr>
  );
};

export default SubsTableItem;
