import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <Space direction="vertical">
    
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
        marginTop: -3
      }}
    />
   
  
  </Space>
);
export default SearchBar;






// import React, { useState } from 'react';
// import { AudioOutlined } from '@ant-design/icons';
// import { Input } from 'antd';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const { Search } = Input;

// const onSearch = (value, _e, info) => console.log(info?.source, value);

// const SearchBar = () => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleSearchBar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       {!collapsed && (
//         <Search
//           placeholder="input search text"
//           allowClear
//           onSearch={onSearch}
//           style={{ width: 200, marginRight: '10px',marginBottom:'23px' }}
//         />
//       )}
//       <FontAwesomeIcon
//         icon={faMagnifyingGlass}
//         size="lg"
//         onClick={toggleSearchBar}
//         style={{ cursor: 'pointer', color: '#1677ff',marginBottom:'23px' }}
//       />
//     </div>
//   );
// };

// export default SearchBar;
