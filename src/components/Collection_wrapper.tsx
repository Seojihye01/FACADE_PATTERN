import Collection_1 from './Collection_1';
import Collection_2 from './Collection_2';
import Collection_3 from './Collection_3';
import Collection_4 from './Collection_4';
import Collection_5 from './Collection_5';




const Collection_wrapper =() => {
    return (
        <div className='collection_page_wrapper'>
        <div id='start'><Collection_1/></div>
        <div id='start'><Collection_2/></div>
        <div id='start'><Collection_3/></div>
        <div id='start'><Collection_4/></div>
        <div id='start'><Collection_5/></div>
 
        </div>
    );
}

export default Collection_wrapper;