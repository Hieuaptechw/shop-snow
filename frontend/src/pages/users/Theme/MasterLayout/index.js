import {memo} from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';


const MasterLayoutUser = ({children,...props}) => {
    return (
        <div {...props} className=''>
    <Header/>
   {children}
    <Footer/>
        </div>
    );
};

export default memo(MasterLayoutUser);