import React from 'react';

const JobApplicationRow = ({appliction,index}) => {
    const { company,title,company_logo } = appliction;
    return (
        <div>
            <tr>
        <th>
          <label>
            {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{company}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        
      </tr>
        </div>
    );
};

export default JobApplicationRow;